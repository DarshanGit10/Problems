import React, { useState, useEffect } from "react";

const DebounceSearch = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("Search Function Called");
      // Perform the filtering logic here or call a separate function
      const filterData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Update the filtered data
      setFilteredData(filterData);
    }, 500); // Set the delay time as desired (e.g., 500ms)

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <center>
        <h2>Search</h2>
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </center>
      <br />
      <div>
        <table className="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{String(item.completed)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DebounceSearch;
