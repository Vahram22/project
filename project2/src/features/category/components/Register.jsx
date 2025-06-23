import { useForm } from "react-hook-form"
import './register.css'
import img from '../img/Mask Group.png'
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addRegistration, getRegistration } from "./RegisterSlice"
// import Login from "./Login"
import Button from '@mui/material/Button';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


function Registration({ user, setUser, openReg, setOpenReg, handleOpenLog, handleCloseReg}) {
    let [show, setShow] = useState(false)

    let dispatch = useDispatch()
    let { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ mode: "onSubmit" })


    let onSubmit = (data) => {
        // console.log(data);
        setUser([...user, data])
        setShow(true)
        reset()
        dispatch(addRegistration({
            name: data.Name,
            email: data.Mail,
            password: data.Password,
        }));
    }
    const password = watch("Password");

    const styleReg = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        dispatch(getRegistration())
        dispatch(addRegistration())
    }, [])

    return <div className="register" style={{
        // backgroundImage: url(${img}) 
    }}>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openReg}
            onClose={handleCloseReg}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openReg}>
                <Box sx={styleReg}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        <div className="register_childreg">
                            <div className="register_left">
                                <img className="" src={img} alt="" />
                            </div>

                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <p className="form_p">Регистрация</p>
                                <input className="inputreg" style={{
                                    borderColor: errors?.Name?.message ? "red" : "grey"
                                }} type="text" placeholder="  имя:" {...register("Name", {
                                    minLength: {
                                        value: 2,
                                        message: "Имя не может содержать менее 2 букв."
                                    },
                                    maxLength: {
                                        value: 16,
                                        message: "Не может быть более 15 символов."
                                    },
                                    pattern: {
                                        value: /^[A-Z][a-z]+/,
                                        message: "не соответствует проверке"
                                    }
                                })} />
                                <p style={{fontSize:"15px", color: "red" }}>{errors?.Name?.message}</p>

                                <input className="inputreg" style={{
                                    borderColor: errors?.Mail?.message ? "red" : "grey"
                                }} type="text" placeholder="  электронная почта:" {...register("Mail", {
                                    minLength: {
                                        value: 7,
                                        message: "Имя Почты не может быть меньше 7 букв"
                                    },
                                    maxLength: {
                                        value: 45,
                                        message: "Имя Почты не может содержать более 45 символов"
                                    },
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "не соответствует проверке"
                                    },
                                }
                                )} />
                                <p style={{fontSize:"15px", color: "red" }}>{errors?.Mail?.message}</p>

                                <input className="inputreg" style={{
                                    borderColor: errors?.Password?.message ? "red" : "grey"
                                }} type="password" placeholder="  Пароль։" {...register("Password", {
                                    minLength: {
                                        value: 8,
                                        message: "пароль не может быть меньше 8 букв"
                                    },
                                    maxLength: {
                                        value: 16,
                                        message: "пароль может состоять более чем из 16 букв"
                                    },
                                    pattern: {
                                        value: /^/,
                                        message: "не соответствует проверке"
                                    }
                                })} />
                                <p style={{fontSize:"15px", color: "red" }}>{errors?.Password?.message}</p>


                                <input
                                    className="inputreg"
                                    style={{ borderColor: errors?.repetPassword?.message ? "red" : "grey" }}
                                    type="password"
                                    placeholder="Повторите пароль:"
                                    {...register("repetPassword", {
                                        validate: value =>
                                            value === password || "Пароли не совпадают"
                                    })}
                                />
                                <p style={{fontSize:"15px", color: "red" }}>{errors?.repetPassword?.message}</p>

                                <div className="buttons">
                                    <button className="buttonreg">Регистрация</button>
                                    <Button onClick={handleOpenLog}>вход</Button>
                                </div>
                            </form>
                        </div>
                    </Typography>

                </Box>
            </Fade>
        </Modal>



    </div>
}

export default Registration