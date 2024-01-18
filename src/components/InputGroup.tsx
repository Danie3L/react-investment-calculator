export default function InputGroup({ children }) {
  const [firstInput, secondInput] = children;
  return (
    <div className="input-group">
      <p>{firstInput}</p>
      <p>{secondInput}</p>
    </div>
  );
}
