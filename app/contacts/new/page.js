'use client';
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Data from "@/app/Data/page";
import 'bootstrap/dist/css/bootstrap.css';

export default function NewContact() {
  const nameInput = useRef('');
  const imgInput = useRef('');
  const emailInput = useRef('');
  const phoneInput = useRef('');
  
  const router = useRouter();
  
  const [isDisabled, setIsDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  
  const addCon = (e) => {
    e.preventDefault()
    const id = Math.round(Math.random() * 100)
    
    Data.addContact(id, nameInput.current.value, imgInput.current.value, emailInput.current.value, phoneInput.current.value);
    
    nameInput.current.value = '';
    imgInput.current.value = '';
    emailInput.current.value = '';
    phoneInput.current.value = '';
    
    alert('Contact Added')
    
    router.push('/contacts')
  }
  const renderInputs = (label, type, ref) => {
    return (
      <div className="form-group">
        <label><u>{label}</u></label>
        <br />
        <input onChange={enableSubmit} required ref={ref} className="input-group-text m-auto" type={type}></input>
        <br />
      </div>
    )
  }
  const enableSubmit = () => {
    const urlValid = imgInput.current.checkValidity();

    if (nameInput.current.value === '' || urlValid === false || emailInput.current.value === '' || phoneInput.current.value === '' || imgInput.current.value === '') {
      setIsDisabled(true)
      if (imgInput.current.value.trim() !== '' && urlValid === false) {
        setErrorMessage('Please use a valid image url')
      } else {
        setErrorMessage('')
      }
    } else {
      setIsDisabled(false)
    }
  }
  return (
    <>
      <h1 className="text-center p-3">Add New Contact</h1>
      <form className="text-center p-3 mx-auto border rounded w-25 p-3">
        {renderInputs('Name', 'text', nameInput)}
        {renderInputs('Image URL', 'url', imgInput)}
        {renderInputs('Email', 'email', emailInput)}
        {renderInputs('Phone Number', 'text', phoneInput)}
        <button className="btn btn-primary" disabled={isDisabled} onClick={addCon}>Add Contact</button>
        <br />
        <Link href='/contacts'>Cancel</Link>
        <h3 style={{ color: "red" }}>{errorMessage}</h3>
      </form>
    </>
  )
}