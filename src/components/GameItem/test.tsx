import { screen } from '@testing-library/react'

import GameItem from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    // Verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // Verificar se a imagem foi renderizada
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    // Verificar se o price foi renderizado
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    // Verificar se o link de download foi renderizado
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the item with payment info', () => {
    const paymentInfo = {
      number: '*** *** *** 4326',
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})