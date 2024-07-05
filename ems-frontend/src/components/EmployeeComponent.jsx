import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    
    const {id} = useParams();
    const [errors,setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator =  useNavigate();

    function saveEmployee(e){
        e.preventDefault();
         
        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)

            createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
            });
        }

    }

   function validateForm(){
     let valid = true;

     const errorsCopy = {...errors};

     if(firstName.trim()){
        errorsCopy.firstName='';
     }else{
        errorsCopy.firstName='First Name is required';
        valid = false;  
     }

     if(lastName.trim()){
        errorsCopy.lastName='';
     }else{
        errorsCopy.lastName='Last Name is required';
        valid = false;  
     }

     if(email.trim()){
        errorsCopy.email='';
     }else{
        errorsCopy.email='Email is required';
        valid = false;  
     }
     setErrors(errorsCopy);

     return valid;
   }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Edit Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <br/><br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                 pageTitle()
            }
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
                        { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
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
