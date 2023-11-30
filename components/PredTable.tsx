const PredTable = (data) => {
  if (data != null) {
    const pred = Object.entries(data.data);
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Condition</th>
              <th className="px-6 py-3">Value</th>
            </tr>
          </thead>
          <tbody>
            {pred.map((item, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item[0]}</td>
                <td className="px-6 py-4">{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Condition</th>
            <th className="px-6 py-3">Value</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default PredTable;
