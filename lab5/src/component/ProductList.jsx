import Product from './Product'

const ProductList = () => {
  const Data = [
    { id: 1, title: 'Laptop', price: 1200 },
    { id: 2, title: 'Phone', price: 800 },
    { id: 3, title: 'Tablet', price: 600 },
  ]

  return (
    <div>
      {Data.map((item) => (
        <Product
          title={item.title}
          price={item.price}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default ProductList