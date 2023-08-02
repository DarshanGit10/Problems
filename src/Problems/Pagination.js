import React, {useState, useEffect} from 'react'

const Pagination = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const lenPages = users.length/5
    const page = [...Array(lenPages+1).keys()].slice(1)
    const lastPoint = currentPage * 5
    const initialPoint = lastPoint - 5
    const visibleUsers = users.slice(initialPoint, lastPoint)
    // console.log(currentPage)
  
    const getUsers = async () => {
      const data = await fetch("https://api.github.com/users");
      const resData = await data.json();
      setUsers(resData);
    };
    useEffect(() => {
      getUsers();
    }, []);
  
    const handlePrev = () =>{
      if (currentPage !== 1){
          setCurrentPage(currentPage-1)
      }
    }
    const handleNext = () =>{
      if(currentPage !== lenPages){
          setCurrentPage(currentPage+1)
      }
    }
  
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Node ID</th>
            </tr>
          </thead>
          <tbody>
            {visibleUsers.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.login}</td>
                  <td>{u.node_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={handlePrev}>Prev</button>
       {
          page.map((p) =>{
              return(
                  <span key={p} onClick={()=>setCurrentPage(p)}>{`${p} |`}</span>
              )
          })
       }
       <button onClick={handleNext}>Next</button>
        </div>
      </>
    );
}

export default Pagination