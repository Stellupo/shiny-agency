import Results, { formatJobList, formatFetchParams } from './index'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render } from '../../utils/tests'
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'

const resultsMockedData = [
  {
    title: 'seo',
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
]

const server = setupServer(
  // URL which will be intercepted
  rest.get('http://localhost:8000/results',
    (req, res, ctx) => {
      // There we will be able to pass the mocked data into what is returned in json
      return res(ctx.json({ resultsData: resultsMockedData}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('The function formatJobList', () => {
  test('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  test('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The function formatFetchParams', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  test('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2&a3=answer3&a4=answer4'
    expect(formatFetchParams(
      { 1:'answer1', 2:'answer2', 3:'answer3', 4: 'answer4'}))
      .toEqual(expectedState)
  })
})


describe('The results', () => {
  it ('should appear after the loader is removed', async () => {
    render(<Results />)
    expect(screen.getByTestId('loader')).toBeTruthy()
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    const jobTitleElements = screen.getAllByTestId('job-title')
    expect(jobTitleElements.length).toBe(2)
    expect(jobTitleElements[0].textContent).toBe('seo,')

    const jobDescriptionElements = screen.getAllByTestId('job-description')
    expect(jobDescriptionElements[0].textContent).toBe("Le SEO est en charge du référencement web d'une page")
    expect(jobDescriptionElements.length).toBe(2)
  })
})
