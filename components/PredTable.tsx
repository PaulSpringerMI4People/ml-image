const PredTable = (data) => {
    data = Object.entries(data);
    console.log(data)
    return (
      <div className="container mx-auto my-8">
        <h3 className="text-lg font-semibold mb-4">Medical Data</h3>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Condition</th>
              <th className="px-4 py-2 border">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map(([condition, value], index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 border">{condition}</td>
                <td className="px-4 py-2 border">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PredTable;
