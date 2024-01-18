import { formatter } from "../util/investment";
export default function Table({ data, interestData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(interestData[i])}</td>
              <td>{formatter.format(row.valueEndOfYear - interestData[i])}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
