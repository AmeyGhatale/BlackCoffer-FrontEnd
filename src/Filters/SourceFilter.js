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

    //   const deleteUser = async (id) => {
    //     await axios.delete(`http://localhost:8080/user/${id}`);
    //     loadUsers();
    //   };

    return (
        <>
            <Box height={100} />
            <div className="container">
                <Form>
                    <InputGroup className='my-3'>

                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Source'
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
                                        : item.source.includes(search);
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

                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
