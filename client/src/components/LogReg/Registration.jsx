import React, { useState } from 'react'
import axios from 'axios'
import './Reg.css'

const Registration = () => {
    
    const[formInfo,setFormInfo] = useState({
    Fname:"",
    Lname:"",
    Email:"",
    Company:"",
    Bday:"",
    Password:"",
    Cpassword:"", 
    })
    const [errors,setErrors]= useState({

    })
    const changehandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
            
        })

    }
    const register = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/register',formInfo,{withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                navigate("/dashboard")
            }

        })
        .catch(err=>{
            console.log(err)
        })

    }
return (
    <div>
    <h1>Regisrtaion</h1>
<form onSubmit={(register)}>
        <div className='form-group'>
        <label>First name:</label>
        <input type="text" className="form-control"name='Fname' onChange={changehandler} />
        {errors.Fname? <p className='text-danger'>errors.Fname.message</p>:""}
        <div/>
        <div className='form-group'></div>
        <label>Last name:</label>
        <input type="text" className="form-control"name='Lname'onChange={changehandler} />
        {errors.Lname? <p className='text-danger'>errors.Lname.message</p>:""}
        <div/>
        <div className='form-group'>
        <label>Email:</label>
        <input type="text" className="form-control"name='Email'onChange={changehandler} />
        {errors.Email? <p className='text-danger'>errors.Email.message</p>:""}
        </div>
        <div className='form-group'>
        <label>Company:</label>
        <input type="text" className="form-control"name='Compnay' onChange={changehandler}/>
        {errors.Company? <p className='text-danger'>errors.Company.message</p>:""}
        </div>
        <div className='form-group'>
        <label>Birthday</label>
        <input type="date" className="form-control" name='Bday' onChange={changehandler}/>
        {errors.Bday? <p className='text-danger'>errors.Bday.message</p>:""}
        </div>
        <div className='form-group'>
        <label>Password</label>
        <input type="password" className="form-control"name='Password'onChange={changehandler} />
        {errors.Password? <p className='text-danger'>errors.Password.message</p>:""}
        </div>
        <div className='form-group'>
        <label>Confirm Password:</label>
        <input type="password" className="form-control"name='Cpassword'onChange={changehandler} />
        {errors.Cpassword? <p className='text-danger'>errors.Cpassword.message</p>:""}
        </div>
        <label>Agree</label>
        <input type="checkbox"/>
        <br></br>
        <input type="submit" value="Register" className="btn btn-primary" />
    </div>
</form>
</div>
)
}

export default Registration;

