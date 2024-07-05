import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator =  useNavigate();

    function saveEmployee(e){
        e.preventDefault();
         
        const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
        });
    }

   
  return (
    <div className='container'>
        <br/><br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name:</label>
                        <input
                         type='text' 
                         placeholder='Enter First Name'
                         name='firstname'
                         className='form-control'
                         value={firstName} 
                         onChange={(e) => setFirstName(e.target.value)}
                         >
                        </input>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name:</label>
                        <input
                         type='text' 
                         placeholder='Enter Last Name'
                         name='lastname'
                         className='form-control'
                         value={lastName} 
                         onChange={(e) => setLastName(e.target.value)}
                         >
                        </input>
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email:</label>
                        <input
                         type='text' 
                         placeholder='Enter Email'
                         name='email'
                         className='form-control '
                         value={email} 
                         onChange={(e) => setEmail(e.target.value)}
                         >
                        </input>
                    </div>
                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default EmployeeComponent
