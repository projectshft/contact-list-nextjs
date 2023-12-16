import React from 'react'
import styles from './page.module.css';

const AddNew = () => {
  return (
    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
      <h1>Add New Contact</h1>
      <div className='w-50'>
        <form className='d-flex flex-column align-items-center justify-content-center p-3 shadow'>
          <label className='mt-3' for='new-name'>Name</label>
          <input className='form-control' type='text' id='new-name' placeholder='Enter name'></input>
          <label className='mt-3' for='new-email'>Email</label>
          <input className='form-control' type='email' id='new-email' placeholder='Enter email'></input>
          <label className='mt-3' for='new-profile-pic'>Profile Pic</label>
          <input className='form-control-file' type='file' id='new-profile-pic' placeholder='Enter'></input>
          <label className='mt-3' for='new-phone-number'>Phone Number</label>
          <input className='form-control' type='name' id='new-phone-number' placeholder='Enter phone number'></input>
          <button className='btn btn-primary mt-3' type='submit'>ADD</button>
        </form>
        </div>
    </div>
  )
}

export default AddNew;