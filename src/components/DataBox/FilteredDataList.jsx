import ExcelReport from "./ExcelReport";

const FilteredDataList = ({ currentItems, filteredData }) => {
  const formatIndianNumber = (num) => {
    // Convert the number to a string
    const numStr = num.toString();

    // Check if the number is greater than or equal to 1000
    if (num >= 1000) {
      // Split the string into parts before and after the decimal point
      const parts = numStr.split(".");

      // Format the part before the decimal point with commas
      const formattedPartBeforeDecimal = parts[0].replace(
        /\B(?=(\d{2})+(?!\d))/g,
        ","
      );

      // If there is a part after the decimal point, include it in the result
      const formattedNumber =
        parts.length > 1
          ? `${formattedPartBeforeDecimal}.${parts[1]}`
          : formattedPartBeforeDecimal;

      return formattedNumber;
    } else {
      // Return the original number for values less than 1000
      return numStr;
    }
  };

  return (
    <div>
      <div className="domain_found">
        <div className="domain_found_count">
          <strong>{`${filteredData.length} domains found`}</strong>
        </div>
        <ExcelReport items={filteredData} />
      </div>
      {currentItems.length > 0 && (
        <div className="filteredData_ul">
          {currentItems.map((item, index) => (
            <div className="filteredData_list" key={index}>
              {item.domain_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FilteredDataList;
