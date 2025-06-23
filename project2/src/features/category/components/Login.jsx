// import img from '../todo/img/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg'
import { useState } from "react";
import * as React from 'react';
import './login.css'
import img from '../img/Mask Group.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { compareLogin } from "./RegisterSlice";

function Login({ setUser, setOpenLog, openLog, login, setLogin, setSearchParams, productQuery,
    genderQuery, categoryQuery, assortmentQuery, minQuery, maxQuery, searchQuery, usename
}) {
    let [mailvalue, setMailvalue] = useState("")
    let [passvalue, setPassvalue] = useState("")
    const handleCloseLog = () => {
        setOpenLog(false)
        setMailvalue("")
        setPassvalue("")
    }
    let dispatch = useDispatch()


    const handleLogin = async () => {
        // Dispatch compareLogin action
        // const resultAction = await dispatch(compareLogin([mailvalue, passvalue]));
        // const result = resultAction.payload;

        // if (result.length > 0) {

        //     setMailvalue("")
        //     setPassvalue("")
        //     setUser(result[0]); 
        //     setOpenLog(false);
        //     setSearchParams({
        //         gender: genderQuery,
        //         category: categoryQuery,
        //         assortment: assortmentQuery,
        //         product: productQuery,
        //         login: login,
        //         min: minQuery,
        //         max: maxQuery,
        //         search: searchQuery,
        //         usename:usename
        //     }); 
        //     setLogin(true)
        // } else {
        //     alert("Invalid credentials");
        // }
        dispatch(compareLogin([mailvalue, passvalue]))
        handleCloseLog()
    };

    const styleLog = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        p: 4,
    };
    return <div className="parent" style={{
        // backgroundImage: `url(${img})`
    }}>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openLog}
            onClose={handleCloseLog}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }} >
            <Fade in={openLog}>
                <Box sx={styleLog}>

                    <div className="register_childlog">

                        <div className="divlog_left" >
                            <p className="form_plog">вход</p>
                            <div className="formlog">
                                <input className='inputlog' type="text" placeholder="  электронная почта:" value={mailvalue} onChange={(e) => {
                                    setMailvalue(e.target.value)
                                }} />
                                <input className='inputlog' type="Password" placeholder="  Пароль։" value={passvalue} onChange={(e) => {
                                    setPassvalue(e.target.value)
                                }} />
                                <button className='buttonlog' onClick={handleLogin} > вход</button>
                            </div>

                        </div>

                        <div className="register_left">
                            <img className="" src={img} alt="" />
                        </div>

                    </div>
                </Box>
            </Fade>
        </Modal>
    </div>
}
export default Login