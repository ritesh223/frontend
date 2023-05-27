
import React, { useState } from 'react'
import './profile.css'

export default function Profile() {
    const [name, setName] = useState("?");
    const[editName,setEditName]=useState("enter");
    const [gender, setGender] = useState("?");
    const [editGender, setEditGender] = useState("");    
    const [status, setStatus] = useState("?");
    const [editStatus,setEditStatus]=useState(" ");
    const [BirthDay, setBirthDay] = useState("--/--/----");
    const [editBirthDay,setEditBirthDay]=useState("");
    const [Country, setCountry] = useState("?");
    const [editCountry, setEditCountry] = useState("");
    const [city, setCity] = useState("?");
    const [editCity, setEditCity] = useState("");
    

    function handleEvent(e){
        setEditName(e.target.value);
    
    }
    function handleEventCountry(e){
        setEditCountry(e.target.value);
    }
    function handleEventCity(e){
        setEditCity(e.target.value);
    }
    function handleEventBirthDay(e){
        setEditBirthDay(e.target.value);
    }
    function handleEventStatus(e){
        setEditStatus(e.target.value);
    }
    function handleEventRadio(e){
        setEditGender(e.target.value);
    }


    function changeDetail(e){
       alert("New Details updated ")
       setName(editName); 
       setGender(editGender);
       setStatus(editStatus);
       setBirthDay(editBirthDay);
       setCountry(editCountry);
       setCity(editCity);

    }

    return (
        <div className='Dash_Profile'>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h4>Profile</h4>
                    <p>Basic Info, For faster booking experience</p>
                </div>
                <div>
                    <button className="btn" type='button' data-bs-toggle="modal" data-bs-target="#editDetailModal">
                        <h5><i className="fa-solid fa-pen-to-square"></i> Edit</h5>
                    </button>
                </div>
            </div>

            <div className='profile_details'>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>Name :  </h6>
                    <p>{name}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>Gender :  </h6>
                    <p>{gender}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>BirthDay :  </h6>
                    <p>{BirthDay}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>Martail Status :  </h6>
                    <p>{status}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>Country :  </h6>
                    <p>{Country}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
                    <h6 style={{ marginRight: "10px" }}>City :  </h6>
                    <p>{city}</p>
                </div>
            </div>

            {/* MODAL */}

            <div className="modal fade" id="editDetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Your Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* Form */}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" name='name' value={editName} onChange={handleEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                                    <div className='gender'>
                                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleEventRadio} /> Male
                                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleEventRadio}/> Female
                                        <input className="form-check-input" type="radio" name="gender" value="other" onChange={handleEventRadio}/> Other <br />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Birthday</label>
                                    <div className="birth mx-2">
                                        <input type="date" id="check_in" value={editBirthDay} onChange={handleEventBirthDay} name="check_in" />
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Martail Status</label>
                                    <div className="dropdown mx-2">
                                        <select name="status" value={editStatus} onChange={handleEventStatus} id="status">
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widow">Widow</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                    <input type="text" className="form-control" value={editCountry} onChange={handleEventCountry} name='country' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                    <input type="text" className="form-control" name='city' value={editCity} onChange={handleEventCity} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn " data-bs-dismiss="modal" onClick={changeDetail}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
