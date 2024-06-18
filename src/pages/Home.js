import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";

// import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  //   const { id } = useParams();

  useEffect(() => {
    console.log("react App");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/data/getAllData");
    setUsers(result.data);
  };

  //   const deleteUser = async (id) => {
  //     await axios.delete(`http://localhost:8080/user/${id}`);
  //     loadUsers();
  //   };

  return (
    <>
      <Box height={100} />
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">end_year</th>
                <th scope="col">citylng</th>
                <th scope="col">citylat</th>
                <th scope="col">intensity</th>

                <th scope="col">sector</th>
                <th scope="col">topic</th>
                <th scope="col">insight</th>
                <th scope="col">swot</th>
                <th scope="col">url</th>

                <th scope="col">region</th>
                <th scope="col">start_year</th>
                <th scope="col">impact</th>
                <th scope="col">added</th>
                <th scope="col">published</th>

                <th scope="col">city</th>
                <th scope="col">country</th>
                <th scope="col">relevance</th>
                <th scope="col">pestle</th>
                <th scope="col">source</th>

                <th scope="col">title</th>
                <th scope="col">likelihood</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>

                  <td>{user.end_year}</td>
                  <td>{user.citylng}</td>
                  <td>{user.citylat}</td>
                  <td>{user.intensity}</td>
                  <td>{user.sector}</td>

                  <td>{user.topic}</td>
                  <td>{user.insight}</td>
                  <td>{user.swot}</td>
                  <td>{user.url}</td>
                  <td>{user.region}</td>

                  <td>{user.start_year}</td>
                  <td>{user.impact}</td>
                  <td>{user.added}</td>
                  <td>{user.published}</td>
                  <td>{user.city}</td>

                  <td>{user.country}</td>
                  <td>{user.relevance}</td>
                  <td>{user.pestle}</td>
                  <td>{user.source}</td>
                  <td>{user.title}</td>
                  <td>{user.likelihood}</td>


                  {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
