const StartsWith = ({ setStartsWith, setInputEnter }) => {
  const handleInputChange = (e) => {
    setStartsWith(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputEnter(true);
    }
  };

  return (
    <div className="databox">
      <h3>Starts With</h3>
      <input
        id="starts-with-kw"
        className="big-input input-control"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <p>Type in the keyword to find at the start of the domain name.</p>
    </div>
  );
};
export default StartsWith;
