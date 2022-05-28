import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHis } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import axios from 'axios'

const View = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [singledata, setSingleData] = useState([]);

    function goBack() {
        navigate('/');
    }

    useEffect(() => {
        async function getData() {
            try {
                const singledata = await axios.get(`http://localhost:3001/datas/${id}`)
                // console.log("Single Data", singledata.data)
                setSingleData(singledata.data);
            } catch (error) {
                console.log("Error", error)
            }

        }
        getData();

    }, [id])

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
                        </tr>
                    </thead>

                    <tbody key={id}>
                        <tr>
                            <th scope="row">{singledata.id}</th>
                            <td>{singledata.layout}</td>
                            <td>{singledata.name}</td>
                            <td>{singledata.capacity}</td>
                            <td>{singledata.status}</td>
                            <td>{singledata.image}</td>


                        </tr>
                    </tbody>


                </table>


            </div>
            <button type="button" className="btn btn-danger" onClick={goBack}>Go back</button>


        </div>
    )
}

export default View