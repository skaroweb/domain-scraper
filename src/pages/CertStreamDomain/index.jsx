import DataBox from "../../components/DataBox";
const CertStreamDomain = () => {
  return (
    <div className="domain_list">
      <h1>CertStream Domains</h1>
      <DataBox Apiurljson="cert.json" design="FilteredDataList" />
    </div>
  );
};
export default CertStreamDomain;
