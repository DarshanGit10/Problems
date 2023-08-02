import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fetch/fetchData');
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <table className='dataTable'>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchData;

