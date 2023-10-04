import React, { useState } from 'react'

const AddUser = () => {
    const [inputField,setInputField]=useState(
    {id:"",email:"",first_name:"",last_name:"",avatar:""}
    )

    const inputHandler=(event)=>{
     setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add User</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="first_name" value={inputField.first_name} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="last_name"  value={inputField.last_name}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input onChange={inputHandler} type="email" name="email" id="" className="form-control" value={inputField.email} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image</label>
                            <input onChange={inputHandler} type="file" name="avatar" id="" className="form-control" value={inputField.avatar} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser