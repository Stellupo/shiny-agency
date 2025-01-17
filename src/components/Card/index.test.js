import { fireEvent, render, screen } from '@testing-library/react'
import Card from './index'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('should render correctlly', async () => {
    render(
      <ThemeProvider>
        <Card/>
      </ThemeProvider>
    )
  })

  test('should display image and title', () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter"
              label="Magicien frontend"
              picture="/myPicture.png"/>
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')

    const cardTitle = screen.getByText('Harry Potter')
    expect(cardTitle.textContent).toBeTruthy()
  })

  test('should select favorite', () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter"
              label="Magicien frontend"
              picture="/myPicture.png"/>
      </ThemeProvider>
    )
    const cardTitle = screen.getByText('Harry Potter')
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})
