import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Table from "./components/Table";
import Error from "./components/Error";

function deriveComputedTableData(data) {
  const annualData = calculateInvestmentResults(data);
  return annualData;
}

function deriveTotalInterestArray(data) {
  const totalInterestArray = data[0] ? [data[0].interest] : [];
  const newData = data.slice(1);
  newData.forEach((obj, index) => {
    const sum = obj.interest + totalInterestArray[index];
    totalInterestArray.push(sum);
  });
  return totalInterestArray;
}

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });

  const computedTablaData = deriveComputedTableData(data);
  const computedInterestData = deriveTotalInterestArray(computedTablaData);

  function handleInputChange(dataKey, event) {
    const { target } = event;
    setData((prevState) => {
      return { ...prevState, [dataKey]: Number(target.value) };
    });
  }

  return (
    <>
      <Header />
      <UserInputs data={data} handleInputChange={handleInputChange} />
      {computedTablaData.length ? (
        <Table data={computedTablaData} interestData={computedInterestData} />
      ) : (
        <Error />
      )}
    </>
  );
}

export default App;
