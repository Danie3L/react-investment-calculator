export default function Input({ data, handleInputChange, mode, label }) {
  return (
    <>
      <label>{label}</label>
      <input
        type="number"
        required
        value={data[mode]}
        onChange={(e) => handleInputChange(mode, e)}
      />
    </>
  );
}
