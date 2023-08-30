import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" lineColor="primary">
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
