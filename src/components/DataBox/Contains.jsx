const Contains = ({ setContains, setInputEnter }) => {
  const handleInputChange = (e) => {
    setContains(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputEnter(true);
    }
  };
  return (
    <div className="databox">
      <h3>Contains</h3>
      <input
        id="contains-kw"
        className="big-input"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <p>
        Type in the keyword to find anywhere in the domain name. Separate
        multiple keywords using space.
      </p>
    </div>
  );
};
export default Contains;
