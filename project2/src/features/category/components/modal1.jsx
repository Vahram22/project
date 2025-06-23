
import Backdrop from '@mui/material/Backdrop';//modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';///
import { useDispatch } from 'react-redux';
import UploadImg from '../../uploading/Uploading';
import CloseIcon from '@mui/icons-material/Close';
import WomanIcon from '@mui/icons-material/Woman';
import Man2Icon from '@mui/icons-material/Man2';
import TextField from '@mui/material/TextField';
import { addCategory } from '../childcategory/CategorySlice';



function Modal1({setSearchParams,modalgender,setModalgender,images,setImages,text1,setText1,colorm,setColorm,colorw,
            loginQuery, setColorw,open1,setOpen1,gender,  
}) {
    
    let dispatch = useDispatch()
   
  
    const handleClose1 = () => {
        setOpen1(false)
        setText1("");
        setImages([]);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open1}
            onClose={handleClose1}
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 1000,
                },
            }}
        >
            <Fade in={open1}>

                <Box sx={style}>

                    <Typography className="modal1_close" id="transition-modal-title" variant="h6" component="h2">
                        добавить категория
                        <CloseIcon onClick={() => {
                            handleClose1()
                        }} />
                    </Typography>

                    <div className="add_div" >
                        {gender.map(({ id }) => {
                            return <div key={id} >
                                {(id == "1") ? <button className="add_button" onClick={() => {
                                    setSearchParams({
                                        gender: id,
                                        min: 100,
                                        max: 6700,
                                        search:"",
                                        login:loginQuery
                                    })
                                    setModalgender("1")
                                    setColorm("blue")
                                    setColorw("black")
                                }} >
                                    <Man2Icon style={{
                                        width: "24px",
                                        height: "24px",
                                        color: colorm,
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                    }} />
                                    Мужской
                                </button> : (id == "2") ? <button className="add_button" onClick={() => {
                                    setSearchParams({
                                        gender: id,
                                         min: 100,
                                        max: 6700,
                                        search:"",
                                        login:loginQuery
                                    })
                                    setColorw("blue")
                                    setModalgender("2")
                                    setColorm("black")
                                }}>
                                    <WomanIcon style={{
                                        width: "24px",
                                        height: "24px",
                                        color: colorw,
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                    }} />
                                    Женский
                                </button> : <div></div>}
                            </div>
                        })

                        }

                    </div>

                    <TextField style={{
                        width: "320px"
                    }} id="standard-basic" label="категория" value={text1} variant="standard" onChange={(e) => {
                        setText1(e.target.value)
                    }} />
                    <div className="add_bot">


                        <UploadImg images={images} setImages={setImages} />


                        <Button variant="contained" onClick={() => {
                            if (!text1.trim()) {
                                alert("write text in input")
                            }
                            else if (images.length === 0) {
                                alert("select a picture")
                            }
                            else {
                                dispatch(addCategory([text1, modalgender, images]))
                                handleClose1()
                            }
                        }}>добавить</Button>
                    </div>

                </Box>
            </Fade>
        </Modal>

    </div>
}

export default Modal1