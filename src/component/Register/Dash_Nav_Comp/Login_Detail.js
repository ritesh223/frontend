import React, { useState } from 'react'
import './logindetail.css'

export default function Login_Detail() {
    const [phone, setPhone] = useState(8747374374);
    const [email, setEmail] = useState('enter email');
    const [password, setPassword] = useState('change password');
    const [editPhone,setEditPhone]=useState("");
    const [editEmail,setEditEmail]=useState("");
    const [editPassword,setEditPassword]=useState("");

    const handleEventPhone =(e)=>{
        setEditPhone(e.target.value);
    }
    const savePhone =()=>{
        setPhone(editPhone);
    }
    const handleEventEmail=(e)=>{
        setEditEmail(e.target.value)
    }
    const saveEmail=()=>{
        setEmail(editEmail);
    }
    const handleEventPassword=(e)=>{
        setEditPassword(e.target.value);
    }
    const savePassword=()=>{
        setPassword(editPassword);
    }


    return (
        <>
            <div className="Login_details">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h4>Login Details</h4>
                        <p>Manage Your email Id , Phone number and password </p>
                    </div>

                </div>

                <div className="credentials_detail">

                    <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                        <h6 style={{ marginRight: "10px" }}>Phone No. :  </h6>
                        <p style={{ marginRight: "10px" }}>{phone}</p>
                        <i type='button' data-bs-toggle="modal" data-bs-target="#editPhone" style={{ color: "red", cursor: "pointer" }} className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                        <h6 style={{ marginRight: "10px" }}>Email :  </h6>
                        <p style={{ marginRight: "10px" }}>{email}</p>
                        <i type='button' data-bs-toggle="modal" data-bs-target="#editEmail" style={{ color: "red", cursor: "pointer" }} className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                        <h6 style={{ marginRight: "10px" }}>Password :  </h6>
                        <p style={{ marginRight: "10px" }}>{password}</p>
                        <i type='button' data-bs-toggle="modal" data-bs-target="#editPassword" style={{ color: "red", cursor: "pointer" }} className="fa-solid fa-pen-to-square"></i>
                    </div>

                </div>
            </div>

            {/* <!-- Modal --> for phone number */}
            <div className="modal fade" id="editPhone" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Phone Number</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" name='name' value={editPhone} onChange={handleEventPhone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" onClick={savePhone} className="btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> for Email */}
            <div className="modal fade" id="editEmail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Phone Number</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="text" name='name' value={editEmail} onChange={handleEventEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" onClick={saveEmail} className="btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> for phone number */}
            <div className="modal fade" id="editPassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Phone Number</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                    <input type="password" name='name' value={editPassword} onChange={handleEventPassword} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" onClick={savePassword} className="btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
