type Props = {
  onIncrement: () => void
}

const IncrementBtn = ({ onIncrement }: Props) => {
  return (
    <button onClick={onIncrement}>Increment age + 1</button>
  )
}

export default IncrementBtn