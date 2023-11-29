const HasDistinctWord = ({ setHasDistinctWord, setInputEnter }) => {
  const handleInputChange = (e) => {
    setHasDistinctWord(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputEnter(true);
    }
  };
  return (
    <div className="databox">
      <h3>Has Distinct Word</h3>
      <input
        id="has-full-kw"
        className="big-input"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <p>
        Type in the keyword to find as a distinct word (eg. ideas in
        product-ideas.com but not in productideas.com). Separate multiple
        keywords using space.
      </p>
    </div>
  );
};
export default HasDistinctWord;
