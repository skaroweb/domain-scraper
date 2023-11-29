import StartsWith from "./StartsWith";
import Contains from "./Contains";
import HasDistinctWord from "./HasDistinctWord";
import EndsWith from "./EndsWith";

const DataboxAll = ({
  setStartsWith,
  setEndsWith,
  setContains,
  setHasDistinctWord,
  setInputEnter,
}) => {
  return (
    <>
      <StartsWith setStartsWith={setStartsWith} setInputEnter={setInputEnter} />
      <Contains setContains={setContains} setInputEnter={setInputEnter} />
      <EndsWith setEndsWith={setEndsWith} setInputEnter={setInputEnter} />
      <HasDistinctWord
        setHasDistinctWord={setHasDistinctWord}
        setInputEnter={setInputEnter}
      />
    </>
  );
};
export default DataboxAll;
