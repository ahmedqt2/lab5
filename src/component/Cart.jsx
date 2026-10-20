const style = {
  card: {
    borderRadius: '8px',
    border: '1px solid #222222',
    margin: '16px',
    padding: '8px',
  },
}

const Card = ({ children }) => {
  return (
    <div style={style.card}>
      {children}
    </div>
  )
}

export default Card