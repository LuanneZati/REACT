const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Titulo do container</h2>
        {children}
        {myValue}
    </div>
  )
}

export default Container