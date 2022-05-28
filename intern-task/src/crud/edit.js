import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [singledata, setSingleData] = useState(
        {
            layout: '',
            name: '',
            capacity: '',
            status: '',
            image: ''
        }
    );

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

    function onFieldChange(e) {
        setSingleData({
            ...singledata,
            [e.target.name]: e.target.value
        })

    }

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/datas/${id}`, singledata)
        }
        catch (error) {
            console.log("Error", error);

        }

    }


    return (
        <div className='container'>
            <div className='card'>
                <div className='title'>
                    < h3 > Edit Table</h3 >
                </div >
                <div className='formContainer'>
                    <form>

                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label>ID:</label>
                            </div>
                            <div className='col col-6 col-md-4'>
                                <input disabled value={id} style={{ border: '2px solid lightgray' }} onChange={e => onFieldChange(e)} type="number" className='input-group'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label>Select Layout : </label>
                            </div>
                            <div className='col col-6 col-md-4'>
                                <select value={singledata.layout} onChange={e => onFieldChange(e)} name='layout' style={{ border: '2px solid lightgray' }} className='form-select'>
                                    <option value={'none'} >Select Layout</option>
                                    <option value={'2x3'}>2x3</option>
                                    <option value={'3x3'}>3x3</option>
                                    <option value={'2x2'}>2x2</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label>Name:</label>
                            </div>
                            <div className='col col-6 col-md-4'>
                                <input value={singledata.name} name='name' style={{ border: '2px solid lightgray' }} onChange={e => onFieldChange(e)} type="text" placeholder="Enter Name" className='input-group'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label>Capacity:</label>
                            </div>
                            <div className='col col-6 col-md-4'>
                                <input value={singledata.capacity} name='capacity' style={{ border: '2px solid lightgray' }} type="number" onChange={e => onFieldChange(e)} placeholder="Enter number of capacity" className='input-group'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label >Status:</label>
                            </div>
                            <div className='checkBox col col-6 col-md-4'>
                                <input value={singledata.status} name='status' style={{ border: '2px solid lightgray' }} className='form-check-input' onChange={e => onFieldChange(e)} type="checkbox"  ></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-6 col-md-4'>
                                <label>Image:</label>
                            </div>
                            <div className='col col-6 col-md-4'>
                                <input value={singledata.filename} name='image' style={{ border: '2px solid lightgray' }} onChange={e => onFieldChange(e)} className="form-control form-control-sm" id="formFileSm" type="file"></input>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col  col-6 col-md-4 btnCreate'>
                                <button type="button" className="btn btn-primary" onClick={e => onFormSubmit(e)}>Update</button>
                            </div>
                            <div className='col  col-6  col-md-4 btnCancel'>
                                <button onClick={goBack} type="button" className="btn btn-danger">Cancel</button>
                            </div>

                        </div>

                    </form>

                </div>


            </div>

        </div >
    )
}

export default Edit