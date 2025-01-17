import { setupServer } from 'msw/node'
import Freelances from './index'
import { render } from '../../utils/tests/index'
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { rest } from 'msw'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  // URL which will be intercepted
  rest.get('http://localhost:8000/freelances',
    (req, res, ctx) => {
    // There we will be able to pass the mocked data into what is returned in json
    return res(ctx.json({ freelancersList: freelancersMockedData}))
  })
)

// Activate the API simulation before the tests
beforeAll(() => server.listen())
// Resets everything we could have added in terms of duration for our tests before each test
afterEach(() => server.resetHandlers())
// Close the API simulation once the tests are finished
afterAll(() => server.close())

test('Should display freelancers names after loader is removed' , async () => {
  render(<Freelances />)
  expect(screen.getByTestId('loader')).toBeTruthy()
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})
