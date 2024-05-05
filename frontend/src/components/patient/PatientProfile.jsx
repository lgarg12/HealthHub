import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Typography, Avatar, Input, } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/Operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { List, ListItem } from "@material-tailwind/react";

const PatientProfile = () => {
  const user = useSelector((state) => state.profile.user);
  const [name, SetName] = useState(`${user.firstName} ${user.lastName}`);

  const [image, SetImage] = useState("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      SetImage(URL.createObjectURL(file));
    }
  };


  return (
    <div className='profile flex lg:flex-row flex-col-reverse overflow-y-scroll lg:gap-0 gap-8 pb-4'>

      <motion.div
        initial={{ scale: 0, height: 0 }}
        animate={{ scale: 1, height: "70vh" }}
        transition={{ duration: 0.5 }}
        className=' flex justify-center items-center lg:w-[50%] h-full w-[100%] '>
        <Card
          shadow={false}
          className="relative grid h-[70vh] w-full max-w-[28rem] items-start  overflow-hidden p-4"
        >

          <div>
            <h4 className='my-1'>Change Profile Picture</h4>
            <div
              style={{
                border: '2px dashed #ccc',
                borderRadius: '10px',
                padding: '20px',
                width: '200px',
                margin: '20px auto',
                cursor: 'pointer',
              }}
              onClick={() => document.getElementById('profileImageInput').click()}
            >

              {image ? (
                <img
                  src={image}
                  alt="Profile Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ color: '#666' }}>Click to upload profile image</div>
              )}
            </div>

            <input
              type="file"
              id="profileImageInput"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className=' mt-[-4vh]'>
            <h4 className='my-[2vh]'>Previous Reports</h4>
            <Card className="w-[70%] ml-auto mr-auto ">
              <List className='text-sm'>
                <ListItem selected={selected === 1} onClick={() => {setSelectedItem(1); navigate(`/report/${selected}`);}}>
                  Document 1
                </ListItem>
                <ListItem selected={selected === 2} onClick={() => {setSelectedItem(2); navigate(`/report/${selected}`);}}>
                  Document 2
                </ListItem>
                <ListItem selected={selected === 3} onClick={() => {setSelectedItem(3); navigate(`/report/${selected}`);}}>
                  Document 3
                </ListItem>
                <ListItem selected={selected === 3} onClick={() => {setSelectedItem(4); navigate(`/report/${selected}`);}}>
                  Document 4
                </ListItem>
              </List>
            </Card>
          </div>


        </Card>
      </motion.div>

      <motion.div
        initial={{ scale: 0, height: 0 }}
        animate={{ scale: 1, height: "70vh" }}
        transition={{ duration: 0.5 }}
        className=' flex justify-center items-center lg:w-[50%]'>
        <Card
          shadow={false}
          className="relative grid h-[70vh] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url(https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph)] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography variant="h5" className="mb-4 text-gray-400">
              {name}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className="mb-6 font-bold hover:scale-[1.1] hover:text-gray-500 leading-[1.5]"
            >
              <button onClick={handleLogout}>Log Out</button>
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src={image}
            />
          </CardBody>
        </Card>
      </motion.div>

    </div>

  )
}

export default PatientProfile