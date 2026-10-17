import Card from './Card'

const Product = ({ title, price }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>${price}</p>
    </Card>
  )
}

export default Product