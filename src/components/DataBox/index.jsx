import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import FilteredDataList from "./FilteredDataList";
import FilteredDataListNew from "./FilteredDataListNew";
import DataboxAll from "./DataboxAll";
import ReactPaginate from "react-paginate";

const DataBox = ({ Apiurljson, design }) => {
  // Move allData outside of the handleShowDataClick function
  const [allData, setAllData] = useState([]);
  const [startsWith, setStartsWith] = useState("");
  const [contains, setContains] = useState("");
  const [endsWith, setEndsWith] = useState("");
  const [hasDistinctWord, setHasDistinctWord] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 150; // Adjust the number of items per page as needed
  const [inputEnter, setInputEnter] = useState(false);

  useEffect(() => {
    if (inputEnter) {
      handleShowDataClick();
      setInputEnter(false); // Reset the state after triggering the function
    }
  }, [inputEnter]);

  const handleShowDataClick = () => {
    // Check if the input has at least three characters
    if (
      startsWith.length >= 2 ||
      contains.length >= 2 ||
      endsWith.length >= 2 ||
      hasDistinctWord.length >= 2
    ) {
      // Define the API URL
      const apiUrl = Apiurljson;

      // Fetch the data from the API
      axios
        .get(apiUrl)
        .then((response) => {
          // Access the "data" array from the response
          const fetchedData = response.data;

          // Set allData to fetchedData
          setAllData(fetchedData);

          // Apply filters based on user input
          let filteredData = fetchedData;

          // Apply "Contains" filter
          if (contains) {
            filteredData = filteredData.filter(
              (item) =>
                item.domain_name &&
                item.domain_name.toLowerCase().includes(contains.toLowerCase())
            );
          }

          // Apply additional filters
          if (startsWith) {
            filteredData = filteredData.filter(
              (item) =>
                item.domain_name &&
                item.domain_name
                  .toLowerCase()
                  .startsWith(startsWith.toLowerCase())
            );
          }

          // Apply "Ends With" filter
          if (endsWith) {
            filteredData = filteredData.filter(
              (item) =>
                item.domain_name &&
                item.domain_name.toLowerCase().endsWith(endsWith.toLowerCase())
            );
          }

          // Apply filter for distinct word
          if (hasDistinctWord) {
            // Replace 'item.sitename' with the actual property name in your data
            const regex = new RegExp(`\\b${hasDistinctWord.toLowerCase()}\\b`);

            filteredData = filteredData.filter(
              (item) =>
                item.domain_name && regex.test(item.domain_name.toLowerCase())
            );
          }

          // Set the filtered data in the state
          setFilteredData(filteredData);
          setCurrentPage(0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    } else {
      // Inform the user that at least three characters are required
      alert(
        "Please enter at least three characters in Starts With, Contains, Ends With, or Has Distinct Word before filtering."
      );
    }
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    // Scroll to the top of the table
    const tableContainer = document.querySelector(".domain_found");
    if (tableContainer) {
      // Use smooth behavior for a smooth scrolling effect
      tableContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  return (
    <div className="container">
      <div className="databox-container">
        <DataboxAll
          setStartsWith={setStartsWith}
          setContains={setContains}
          setEndsWith={setEndsWith}
          setHasDistinctWord={setHasDistinctWord}
          setInputEnter={setInputEnter}
        />
      </div>
      <div className="databox_cta">
        <button onClick={handleShowDataClick}>Show the domains</button>
        {/* <button>Show the domains</button> */}
      </div>
      {/* Render or use the filtered data only if showFilteredData is true */}
      {filteredData.length > 0 ? (
        <>
          {design === "FilteredDataList" && (
            <FilteredDataList
              currentItems={currentItems}
              filteredData={filteredData}
            />
          )}
          {design === "FilteredDataListNew" && (
            <FilteredDataListNew
              currentItems={currentItems}
              filteredData={filteredData}
            />
          )}

          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          )}
        </>
      ) : allData.length > 0 ? (
        <p>No found</p>
      ) : null}
    </div>
  );
};

export default DataBox;
