export default function Table({ tableHeaders, tableBody, ...props }) {
  return (
    <table {...props}>
      <thead>{tableHeaders}</thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}
