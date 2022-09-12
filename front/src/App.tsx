
interface ButtonProps{
  label?: String,
  title?: String,
  color?: String,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.handleClick}>{props.label}</button>
  )
}

function App() {
  return (
    <>
      <Button {...{label: 'teste', handleClick: () => alert('teste')}}></Button>
      <Button {...{label: 'teste'}}></Button>
      <Button {...{label: 'teste'}}></Button>
    </>
  )
}

export default App
