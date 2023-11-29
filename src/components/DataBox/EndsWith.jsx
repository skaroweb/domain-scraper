const EndsWith = ({ setEndsWith, setInputEnter }) => {
  const handleInputChange = (e) => {
    setEndsWith(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputEnter(true);
    }
  };
  return (
    <div className="databox">
      <h3>Ends With</h3>
      <input
        id="ends-with-kw"
        className="big-input"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <p>
        Type in the keyword to find at the end of the domain name. This is
        typically a TLD (eg. Com, Net, Org).
      </p>
    </div>
  );
};
export default EndsWith;
