import DataBox from "../../components/DataBox";

const NewlyAddedDomain = () => {
  return (
    <div className="domain_list">
      <h1>Newly Registered Domains</h1>
      <DataBox Apiurljson="sitename_data.json" design="FilteredDataListNew" />
    </div>
  );
};
export default NewlyAddedDomain;
