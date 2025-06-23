
import Backdrop from '@mui/material/Backdrop';//modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';///
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { addAssortment } from '../childcategory/assortment/AssortmentSlice';

function Modal2({open2,setOpen2,name_ass,setName_ass,categoryQuery,name_text}) {

    let dispatch = useDispatch()
    const handleClose2 = () => {
        setOpen2(false);
        setName_ass("")
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
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open2}>
                <Box sx={style}
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                    <Typography className="modal1_close" id="modal-modal-title" variant="h6" component="h2">
                        {name_text}:добавить подкатегория
                        <CloseIcon onClick={() => {
                            handleClose2()
                        }} />
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField style={{
                            width: "320px"
                        }} id="standard-basic" label="категория" variant="standard" value={name_ass} onChange={(e) => {
                            setName_ass(e.target.value)
                        }} />
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button variant="contained" onClick={() => {
                            if (!name_ass.trim()) {
                                alert("write text in input")
                            } else if (categoryQuery == null) {
                                alert("please choose category")
                            } else {
                                dispatch(addAssortment([name_ass, categoryQuery]))
                                handleClose2()
                            }
                        }}>добавить</Button>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    </div>
}

export default Modal2