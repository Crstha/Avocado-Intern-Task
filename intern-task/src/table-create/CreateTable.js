import React from 'react';
import './CreateTable.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TableView from '../table-view/TableView';


const CreateTable = () => {

  const [singledata, setSingleData] = useState(
    {
      layout: '',
      name: '',
      capacity: '',
      status: '',
      image: ''
    }
  );


  function onFieldChange(e) {
    setSingleData({
      ...singledata,
      [e.target.name]: e.target.value
    })

  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/datas/`, singledata)
    }
    catch (error) {
      console.log("Error", error);

    }

  }


  return (
    <div className='container'>
      <div className='card'>
        <div className='title'>
          < h3 > Create Table</h3 >
        </div >
        <div className='formContainer'>
          <form>

            <div className='row'>
              <div className='col col-6 col-md-4'>
                <label>Select Layout : </label>
              </div>
              <div className='col col-6 col-md-4'>
                <select onChange={e => onFieldChange(e)} name='layout' style={{ border: '2px solid lightgray' }} className='form-select'>
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
                <input name='name' style={{ border: '2px solid lightgray' }} onChange={e => onFieldChange(e)} type="text" placeholder="Enter Name" className='input-group'></input>
              </div>
            </div>
            <div className='row'>
              <div className='col col-6 col-md-4'>
                <label>Capacity:</label>
              </div>
              <div className='col col-6 col-md-4'>
                <input name='capacity' style={{ border: '2px solid lightgray' }} type="number" onChange={e => onFieldChange(e)} placeholder="Enter number of capacity" className='input-group'></input>
              </div>
            </div>
            <div className='row'>
              <div className='col col-6 col-md-4'>
                <label >Status:</label>
              </div>
              <div className='checkBox col col-6 col-md-4'>
                <input name='status' style={{ border: '2px solid lightgray' }} className='form-check-input' onChange={e => onFieldChange(e)} type="checkbox"></input>
              </div>
            </div>
            <div className='row'>
              <div className='col col-6 col-md-4'>
                <label>Image:</label>
              </div>
              <div className='col col-6 col-md-4'>
                <input name='image' style={{ border: '2px solid lightgray' }} onChange={e => onFieldChange(e)} className="form-control form-control-sm" id="formFileSm" type="file"></input>
              </div>
            </div>

            <div className='row'>
              <div className='col  col-6 col-md-4 btnCreate'>
                <button type="button" className="btn btn-primary" onClick={e => onFormSubmit(e)}>Create Table</button>
              </div>
              <div className='col  col-6  col-md-4 btnCancel'>
                <button type="button" className="btn btn-danger">Cancel</button>
              </div>

            </div>

          </form>

        </div>


      </div>

    </div >
  )
}

export default CreateTable