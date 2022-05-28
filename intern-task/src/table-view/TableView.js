import React from 'react'
import './TableView.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const TableView = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        async function getAllDatas() {
            try {
                const datas = await axios.get("http://localhost:3001/datas/")
                // console.log("Data", datas.data)
                setDatas(datas.data);
            } catch (error) {
                console.log("Error")
            }

        }
        getAllDatas();

    }, [])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:3001/datas/${id}`)
        var newdata = datas.filter((item) => {
            return item.id !== id;
        })
        setDatas(newdata);
    }

    return (
        <div className="container">
            <div className='card'>
                <h1>View</h1>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Layout</th>
                            <th scope="col">Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Status</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {datas.map((data, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{data.layout}</td>
                                    <td>{data.name}</td>
                                    <td>{data.capacity}</td>
                                    <td>{data.status}</td>
                                    <td>{data.image}</td>
                                    <td>
                                        <Link to={`/edit/${data.id}`} >
                                            <i className="bi bi-pen-fill">
                                            </i>
                                        </Link>
                                        <Link to={`/view/${data.id}`}>
                                            <i className="bi bi-eye-fill"></i>
                                        </Link>
                                        <i onClick={() => handleDelete(data.id)} className="bi bi-trash3-fill" ></i>

                                    </td>

                                </tr>
                            </tbody>

                        )

                    })}
                </table>

            </div>

        </div>
    )
}

export default TableView