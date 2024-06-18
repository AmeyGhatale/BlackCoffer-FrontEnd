import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";
// import 

import { Link, useParams } from "react-router-dom";

export default function CityChart() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("react App");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/data/getAllRelevanceChart");
        setUsers(result.data);
    };






    return (
        <div style={{ marginTop: 30 }}>
            <h3>Relevance Chart</h3>
            <div className="App" style={{ textAlign: "center", marginLeft: 250 }}>
                {/* <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"     
                        isAnimationActive={false}
                        data={users}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart> */}

                <BarChart
                    width={1000}
                    height={450}
                    data={users}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis
                        dataKey="key"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
            </div>
        </div>
    );





    // return (
    //     <>
    //         <Box height={100} />
    //         <div className="container">
    //             <div className="py-4">
    //                 <table className="table border shadow">
    //                     <thead>
    //                         <tr>
    //                             <th scope="col">S.N</th>
    //                             <th scope="col">Key</th>
    //                             <th scope="col">Value</th>

    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {users.map((user, index) => (
    //                             <tr>
    //                                 <th scope="row" key={index}>
    //                                     {index + 1}
    //                                 </th>

    //                                 <td>{user.key}</td>
    //                                 <td>{user.value}</td>
    //                             </tr>
    //                         ))}


    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div >
    //     </>
    // );

}
