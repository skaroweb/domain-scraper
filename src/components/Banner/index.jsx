import "./index.css";

const Banner = () => {
  return (
    <div className="hero-wrapper">
      <div className="herobox container">
        <div className="">
          <h1 className="mb-0">Search ccTLD Domains</h1>
          <p>
            Find already registered global top level domains (ccTLDs) by
            keywords and nameserver. This is{" "}
            <b>
              <u>not a comprehensive list</u>
            </b>
            of ccTLD domains. The data is based on a list of over 44 million
            (but growing) list of recently observed ccTLD domains.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
