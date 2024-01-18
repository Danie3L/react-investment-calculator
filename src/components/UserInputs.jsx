import InputGroup from "./InputGroup";
import Input from "./Input";
export default function UserInputs({ data, handleInputChange }) {
  return (
    <section id="user-input">
      <InputGroup>
        <Input
          data={data}
          handleInputChange={handleInputChange}
          mode="initialInvestment"
          label="initial investment"
        />
        <Input
          data={data}
          handleInputChange={handleInputChange}
          mode="annualInvestment"
          label="annual investment"
        />
      </InputGroup>
      <InputGroup>
        <Input
          data={data}
          handleInputChange={handleInputChange}
          mode="expectedReturn"
          label="expected return"
        />
        <Input
          data={data}
          handleInputChange={handleInputChange}
          mode="duration"
          label="duration"
        />
      </InputGroup>
    </section>
  );
}
