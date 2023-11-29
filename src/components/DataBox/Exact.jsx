const Exact = ({ getSearchWords }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    getSearchWords(inputValue);
  };
  return (
    <div className="databox">
      <h3>Exact Match</h3>
      <input
        id="ends-with-kw"
        className="big-input"
        onChange={handleInputChange}
      />
      <p>Type in the keyword to find at the exact of the domain name.</p>
    </div>
  );
};
export default Exact;
