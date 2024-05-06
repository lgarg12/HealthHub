import React, { useState } from 'react'
import { Textarea } from "@material-tailwind/react";
import logo from "../../assets/logo/default.png"
import { Button, Input } from "@material-tailwind/react";


const WritePatientReport = () => {

    const [mode, setMode] = useState(null);
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

    const [image, setImage] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className=' bg-[#CFD8DB] h-[100vh] w-full flex justify-center items-center'>
            <div className='profile bg-white h-[85vh] w-[90vw] rounded-xl shadow-2xl p-6 overflow-scroll'>
                <img src={logo} alt="" width={200} className='ml-auto mr-auto' />
                <h1 className='mt-4'>By Doctor : Doctor name </h1>
                <h1 className='mt-4'>Date : {formattedDate}</h1>

                <div className='mt-4'>
                    <Input variant="outlined" label="Subject" placeholder="Subject" />
                </div>

                <div className='mt-4'>
                    Mode  :   &nbsp;
                    <Button size='sm' variant= {mode == "offline" ? "" : "outlined"} className="rounded-full" onClick={() => setMode("offline")}>Offline</Button>

                    &nbsp;

                    <Button size='sm' variant= {mode == "online" ? "" : "outlined"} className="rounded-full" onClick={() => setMode("online")}>Online</Button>
                </div>

                <div>
                    <h1 className='mt-4'>Summary : </h1>
                    <div className="w-full mt-4">
                        <Textarea label="Summarise your session" />
                    </div>
                </div>
                <div>
                    <h1 className='mt-4'>Medicines to Prescribe : </h1>
                    <div className="w-full mt-4">
                        <Textarea label="write prescriptions" />
                    </div>
                </div>

                <h1 className='text-center font-bold my-3'>Or</h1>


                <div
                    
                    onClick={() => document.getElementById('profileImageInput').click()}
                >

                    {image ? (
                        <img
                            src={image}
                            alt="Profile Preview"
                            style={{
                                border: '2px dashed #ccc',
                                borderRadius: '10px',
                                padding: '20px',
                                width: '20vw',
                                margin: '20px auto',
                                cursor: 'pointer',
                                textAlign : "center",
                            }}
                        />
                    ) : (
                        <Button variant="gradient" className="flex items-center gap-3 ml-auto mr-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                    </svg>
                    Upload Files
                </Button>
                    )}
                </div>

                <input
                    type="file"
                    id="profileImageInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <Button className='mt-4' fullWidth>Submit </Button>
            </div>


        </div>
    )
}

export default WritePatientReport