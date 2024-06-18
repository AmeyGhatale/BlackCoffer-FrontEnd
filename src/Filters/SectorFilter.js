import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const { id } = useParams();

    useEffect(() => {
        console.log("react App");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/data/getAllData");
        setUsers(result.data);
    };

    return (
        <>
            <Box height={100} />
            <div className="container">
                <Form>
                    <InputGroup className='my-3'>

                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Sector'
                        />
                    </InputGroup>
                </Form>
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
                            {users
                                .filter((item) => {
                                    return search.toLowerCase() === ''
                                        ? item
                                        : item.sector.includes(search);
                                })
                                .map((item, index) => (
                                    <tr>
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>

                                        <td>{item.end_year}</td>
                                        <td>{item.citylng}</td>
                                        <td>{item.citylat}</td>
                                        <td>{item.intensity}</td>
                                        <td>{item.sector}</td>

                                        <td>{item.topic}</td>
                                        <td>{item.insight}</td>
                                        <td>{item.swot}</td>
                                        <td>{item.url}</td>
                                        <td>{item.region}</td>

                                        <td>{item.start_year}</td>
                                        <td>{item.impact}</td>
                                        <td>{item.added}</td>
                                        <td>{item.published}</td>
                                        <td>{item.city}</td>

                                        <td>{item.country}</td>
                                        <td>{item.relevance}</td>
                                        <td>{item.pestle}</td>
                                        <td>{item.source}</td>
                                        <td>{item.title}</td>
                                        <td>{item.likelihood}</td>


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



















// // import React from 'react';
// // import Box from "@mui/material/Box";


// // export default function SectorFilter() {
// //     return (
// //         <>
// //             <Box height={100} />
// //             <div>SectorFilter</div>
// //         </>
// //     )
// // }


// // import { useState } from 'react';
// // import Table from 'react-bootstrap/Table';
// // import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// // import InputGroup from 'react-bootstrap/InputGroup';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import { data } from './data.js';
// // // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function SectorFilter() {
// //     // const [contacts, setContacts] = useState(data);
// //     // const [search, setSearch] = useState('');

// //     const [users, setUsers] = useState([]);
// //     const [search, setSearch] = useState('');

// //     // const { id } = useParams();

// //     // useEffect(() => {
// //     //     console.log("react App");
// //     //     loadUsers();
// //     // }, []);

// //     const loadUsers = async () => {
// //         const result = await axios.get("http://localhost:8080/data/getAllData");
// //         setUsers(result.data);
// //     };

// // const sortName = () => {
// //   setContacts(
// //     data.sort((a, b) => {
// //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
// //         ? -1
// //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
// //         ? 1
// //         : 0;
// //     })
// //   );
// // };



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// import Box from "@mui/material/Box";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//     const [users, setUsers] = useState([]);
//     const [search, setSearch] = useState('');

//     const { id } = useParams();

//     useEffect(() => {
//         console.log("react App");
//         loadUsers();
//     }, []);

//     const loadUsers = async () => {
//         const result = await axios.get("http://localhost:8080/data/getAllData");
//         setUsers(result.data);
//     };


//     return (
//         <div>
//             <Container>
//                 <h1 className='text-center mt-4'>Sector Filter</h1>
//                 <Form>
//                     <InputGroup className='my-3'>

//                         {/* onChange for search */}
//                         <Form.Control
//                             onChange={(e) => setSearch(e.target.value)}
//                             placeholder='Search sector'
//                         />
//                     </InputGroup>
//                 </Form>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th scope="col">S.N</th>
//                             <th scope="col">end_year</th>
//                             <th scope="col">citylng</th>
//                             <th scope="col">citylat</th>
//                             <th scope="col">intensity</th>

//                             <th scope="col">sector</th>
//                             <th scope="col">topic</th>
//                             <th scope="col">insight</th>
//                             <th scope="col">swot</th>
//                             <th scope="col">url</th>

//                             <th scope="col">region</th>
//                             <th scope="col">start_year</th>
//                             <th scope="col">impact</th>
//                             <th scope="col">added</th>
//                             <th scope="col">published</th>

//                             <th scope="col">city</th>
//                             <th scope="col">country</th>
//                             <th scope="col">relevance</th>
//                             <th scope="col">pestle</th>
//                             <th scope="col">source</th>

//                             <th scope="col">title</th>
//                             <th scope="col">likelihood</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {users
//                             .filter((item) => {
//                                 return search.toLowerCase() === ''
//                                     ? item
//                                     : item.sector.toLowerCase().includes(search);
//                             })
//                             .map((item, index) => (
//                                 <tr key={index}>
//                                     <th scope="col">item.S.N</th>
//                                     <th scope="col">item.end_year</th>
//                                     <th scope="col">citylng</th>
//                                     <th scope="col">citylat</th>
//                                     <th scope="col">intensity</th>

//                                     <th scope="col">sector</th>
//                                     <th scope="col">topic</th>
//                                     <th scope="col">insight</th>
//                                     <th scope="col">swot</th>
//                                     <th scope="col">url</th>

//                                     <th scope="col">region</th>
//                                     <th scope="col">start_year</th>
//                                     <th scope="col">impact</th>
//                                     <th scope="col">added</th>
//                                     <th scope="col">published</th>

//                                     <th scope="col">city</th>
//                                     <th scope="col">country</th>
//                                     <th scope="col">relevance</th>
//                                     <th scope="col">pestle</th>
//                                     <th scope="col">source</th>

//                                     <th scope="col">title</th>
//                                     <th scope="col">likelihood</th>
//                                 </tr>
//                             ))} */}
//                         ``

//                         {users
//                             .filter((item) => {
//                                 return search.toLowerCase() === ''
//                                     ? item
//                                     : item.sector.toLowerCase().includes(search);
//                             })
//                             .map((user, index) => (
//                                 <tr>
//                                     <th scope="row" key={index}>
//                                         {index + 1}
//                                     </th>

//                                     <td>{user.end_year}</td>
//                                     <td>{user.citylng}</td>
//                                     <td>{user.citylat}</td>
//                                     <td>{user.intensity}</td>
//                                     <td>{user.sector}</td>

//                                     <td>{user.topic}</td>
//                                     <td>{user.insight}</td>
//                                     <td>{user.swot}</td>
//                                     <td>{user.url}</td>
//                                     <td>{user.region}</td>

//                                     <td>{user.start_year}</td>
//                                     <td>{user.impact}</td>
//                                     <td>{user.added}</td>
//                                     <td>{user.published}</td>
//                                     <td>{user.city}</td>

//                                     <td>{user.country}</td>
//                                     <td>{user.relevance}</td>
//                                     <td>{user.pestle}</td>
//                                     <td>{user.source}</td>
//                                     <td>{user.title}</td>
//                                     <td>{user.likelihood}</td>


//                                     {/* <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${user.id}`}
//                   >
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td> */}
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </Table>
//             </Container>
//         </div>
//     );
// }

// // export default SectorFilter;