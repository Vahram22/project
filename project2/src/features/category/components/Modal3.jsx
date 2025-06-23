
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import WomanIcon from '@mui/icons-material/Woman';
import Man2Icon from '@mui/icons-material/Man2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import workImg from '../img/rabota.png'
import TextField from '@mui/material/TextField';
import UploadImg from '../../uploading/Uploading';
import { addProduct } from '../childcategory/assortment/product/ProductSlice';
import { useState } from 'react';

function Modal3({ setSearchParams, images, setImages, colorm, setColorm, colorw,
    setColorw, gender, open3, setOpen3, categoryQuery, genderQuery, assortmentQuery, price, setPrice, item, setItem,
    setSelassortment, setSelcategory, category, selcategory, assortment, selassortment, minQuery, maxQuery, searchQuery, loginQuery,
    setCarat, carat, setWeight, weight, jeweler, setJeweler, file, setFile, quantity, setQuantity, comment, setComment,
    type, setType, diameter, setDiameter, number, setNumber, stone, setStone, prob, setProb
}) {
    let [color1, setColor1] = useState("#E9D07A")
    let [color2, setColor2] = useState("#CCCCCC")

    let [borderColor1, setBorderColor1] = useState("")
    let [borderColor2, setBorderColor2] = useState("")

    let [backgroundColor1, setBackgroundColor1] = useState("")
    let [backgroundColor2, setBackgroundColor2] = useState("")

    let [color3, setColor3] = useState("#E9D07A")
    let [color4, setColor4] = useState("#E9D07A")
    let [color5, setColor5] = useState("#CCCCCC")

    let [color6, setColor6] = useState("#CCCCCC")
    let [color7, setColor7] = useState("#EDC8C8")
    let [color8, setColor8] = useState(" #EDC8C8")

    let [borderColor3, setBorderColor3] = useState("")
    let [borderColor4, setBorderColor4] = useState("")
    let [borderColor5, setBorderColor5] = useState("")
    let [borderColor6, setBorderColor6] = useState("")
    let [borderColor7, setBorderColor7] = useState("")
    let [borderColor8, setBorderColor8] = useState("")

    let [name, setName] = useState("")

    // let [backgroundColor3, setBackgroundColor3] = useState("#E9D07A")
    // let [backgroundColor4, setBackgroundColor4] = useState("#E9D07A")
    // let [backgroundColor5, setBackgroundColor5] = useState("#CCCCCC")
    // let [backgroundColor6, setBackgroundColor6] = useState("#CCCCCC")
    // let [backgroundColor7, setBackgroundColor7] = useState("#EDC8C8")
    // let [backgroundColor8, setBackgroundColor8] = useState("#EDC8C8")

    let dispatch = useDispatch()
    const handleClose3 = () => {
        setOpen3(false);

        setImages([]);
        setPrice("");
        setItem("");

        images.length = 0
        setComment("")
        setStone("")
        setProb("")
        setColor1("#E9D07A"); setColor2("#CCCCCC"); setColor3("#E9D07A"); setColor4("#E9D07A"); setColor5("#CCCCCC"); setColor6("#CCCCCC"); setColor7("#EDC8C8");setColor8("#EDC8C8");
        setBackgroundColor1("")
        setBackgroundColor2("")

        setBorderColor8(""); setBorderColor7(""); setBorderColor6(""); setBorderColor5(""); setBorderColor4(""); setBorderColor3(""); setBorderColor2(""); setBorderColor1("");
        setWeight("")
        setJeweler("")
        setNumber("")
        setType("")
        setDiameter("")
        setFile("")
        setCarat("")
        setName("")
        setPrice("")
        setQuantity("")


    }


    const style3 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 860,
        height: 735,
        bgcolor: '#F2F2F2',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return <div>
        <Modal
            keepMounted
            open={open3}
            onClose={handleClose3}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style3}>
                <Typography id="keep-mounted-modal-title" className="modal3_close" style={{ fontWeight: "750" }} variant="h6" component="h2">
                    добавить изделия
                    <CloseIcon onClick={() => {
                        handleClose3()
                    }} />
                </Typography>
                <div className="top_child">
                    <div className="modal_child">
                        {
                            gender.map(({ id }) => {
                                return (<p key={id} onClick={() => {
                                    setSearchParams({
                                        gender: id,
                                        min: 100,
                                        max: 6700,
                                        search: "",
                                        login: loginQuery
                                    })
                                }}>
                                    {(id == "1") ? <Man2Icon onClick={() => {//?????? guynery
                                        setColorm("blue")
                                        setColorw("black")
                                    }
                                    } style={{
                                        width: "50px",
                                        height: "32px",
                                        color: colorm,
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                    }} />
                                        : (id == "2") ? <WomanIcon onClick={() => {
                                            setColorw("blue")
                                            setColorm("black")
                                        }} style={{
                                            width: "50px",
                                            height: "32px",
                                            color: colorw,
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            backgroundColor: "white",
                                            boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                        }} /> : <div>zbsfbs</div>

                                    }
                                </p>)

                            })
                        }
                    </div>
                    <div className="category_child">
                        {
                            category.map(({ id, parentid, name, img }) => {
                                return (genderQuery === parentid && <div className="child_category_child" key={id} style={{
                                    border: selcategory == id && categoryQuery != null ? `2px solid black` : `0px`
                                }} onClick={() => {
                                    setSelcategory(id)
                                    setSearchParams({
                                        gender: genderQuery,
                                        category: id,
                                        min: minQuery,
                                        max: maxQuery,
                                        search: searchQuery,
                                        login: loginQuery
                                    })
                                }}
                                >
                                    <img className="img_category_child" src={img} />
                                    {name}
                                </div>)
                            })
                        }
                    </div>


                </div>
                <div className="assortment_child">
                    {
                        assortment.map(({ id, parId, Name }) => {
                            return (categoryQuery === parId && <div key={id} className="assortment_div_child" style={{
                                borderBottom: selassortment == id && assortmentQuery != null ? `4px solid blue` : `4px solid white`,
                                borderBottomRightRadius: "3px",
                                borderBottomLeftRadius: "3px"
                            }} onClick={() => {

                                setSelassortment(id)

                                setSearchParams({
                                    gender: genderQuery,
                                    category: categoryQuery,
                                    assortment: id,
                                    min: minQuery,
                                    max: maxQuery,
                                    search: searchQuery,
                                    login: loginQuery
                                })
                            }}
                            >
                                {Name}
                            </div>)
                        })
                    }

                </div>

                <div className="product_child2">
                    <div className="uploadimg_div">
                        <UploadImg images={images} setImages={setImages} />
                    </div>

                    <TextField style={{
                        width: "160px"
                    }} id="standard-basic" label="артикул" value={item} variant="standard" onChange={(e) => {
                        setItem(e.target.value)
                    }} />

                    <TextField style={{
                        width: "160px"
                    }} id="standard-basic" label="Имя" value={name} variant="standard" onChange={(e) => {
                        setName(e.target.value)
                    }} />

                </div>

                <div className="bottom_item">

                    <div className='bottom_gold'>
                        <div className='bottom_gold_item1'>
                            <div className='bottom_gold_item1_child'>
                                <button style={{ border: `1px solid ${borderColor1}`, color: color1, backgroundColor: backgroundColor1 }} className='button_stone' value={stone} onClick={() => {
                                    setStone("Золото")
                                    setColor1("black")
                                    setColor2("#CCCCCC")
                                    setBorderColor1("gold")
                                    setBorderColor2("")
                                    setBackgroundColor1("#E9D07A")
                                    setBackgroundColor2("")

                                }}>Золото</button>
                                <button style={{ border: `1px solid ${borderColor2}`, color: color2, backgroundColor: backgroundColor2 }} value={stone} className='button_stone' onClick={() => {
                                    setStone("серебро")
                                    setColor2("black")
                                    setColor1("#E9D07A")
                                    setBorderColor2("silver")
                                    setBorderColor1("")
                                    setBackgroundColor2("#CCCCCC")
                                    setBackgroundColor1("")

                                }}> серебро</button>
                            </div>
                            <span></span>
                        </div>
                        <div className='bottom_gold_item2'>
                            <div className='bottom_gold_prob'>
                                <span> проб</span>
                                <button className='button_probs' style={{ color: color3, border: `1px solid ${borderColor3}` }} value={prob} onClick={() => {
                                    setProb("585")
                                    setColor3("black")
                                    setBorderColor3("black")

                                    setColor4('#CCCCCC')
                                    setColor5('#E9D07A')
                                    setColor6('#E9D07A')
                                    setColor7('#EDC8C8')
                                    setColor8("#EDC8C8")

                                    setBorderColor4("#CCCCCC")
                                    setBorderColor5('#E9D07A')
                                    setBorderColor6('#E9D07A')
                                    setBorderColor7('#EDC8C8')
                                    setBorderColor8("#EDC8C8")
                                }}>585</button>
                                <button className='button_probs' style={{ color: color4, border: `1px solid ${borderColor4}` }} value={prob} onClick={() => {
                                    setProb("630")
                                    setColor4("black")
                                    setBorderColor4("black")

                                    setColor3("#CCCCCC")
                                    setColor5('#E9D07A')
                                    setColor6('#E9D07A')
                                    setColor7('#EDC8C8')
                                    setColor8("#EDC8C8")

                                    setBorderColor3("#CCCCCC")
                                    setBorderColor8("#EDC8C8")
                                    setBorderColor5('#E9D07A')
                                    setBorderColor6('#E9D07A')
                                    setBorderColor7('#EDC8C8')

                                }}>630</button>
                                <button className='button_probs' style={{ color: color5, border: `1px solid ${borderColor5}` }} value={prob} onClick={() => {
                                    setProb("700")
                                    setColor5("gold")
                                    setBorderColor5("gold")

                                    setColor3("#CCCCCC")
                                    setColor4('#CCCCCC')
                                    setColor6('#E9D07A')
                                    setColor7('#EDC8C8')
                                    setColor8("#EDC8C8")

                                    setBorderColor3("#CCCCCC")
                                    setBorderColor4("#CCCCCC")
                                    setBorderColor8("#EDC8C8")
                                    setBorderColor6('#E9D07A')
                                    setBorderColor7('#EDC8C8')

                                }}>700</button>
                                <button className='button_probs' style={{ color: color6, border: `1px solid ${borderColor6}` }} value={prob} onClick={() => {
                                    setProb("750")
                                    setColor6("gold")
                                    setBorderColor6("gold")

                                    setColor3("#CCCCCC")
                                    setColor4('#CCCCCC')
                                    setColor5('#E9D07A')
                                    setColor7('#EDC8C8')
                                    setColor8("#EDC8C8")

                                    setBorderColor3("#CCCCCC")
                                    setBorderColor4("#CCCCCC")
                                    setBorderColor5('#E9D07A')
                                    setBorderColor8("#EDC8C8")
                                    setBorderColor7('#EDC8C8')

                                }}>750</button>
                                <button className='button_probs' style={{ color: color7, border: `1px solid ${borderColor7}` }} value={prob} onClick={() => {
                                    setProb("800")
                                    setColor7("purple")
                                    setBorderColor7("purple")

                                    setColor3("#CCCCCC")
                                    setColor4('#CCCCCC')
                                    setColor5('#E9D07A')
                                    setColor6('#E9D07A')
                                    setColor8("#EDC8C8")

                                    setBorderColor3("#CCCCCC")
                                    setBorderColor4("#CCCCCC")
                                    setBorderColor5('#E9D07A')
                                    setBorderColor6('#E9D07A')
                                    setBorderColor8("#EDC8C8")

                                }}>800</button>
                                <button className='button_probs' style={{ color: color8, border: `1px solid ${borderColor8}` }} value={prob} onClick={() => {
                                    setProb("850")
                                    setColor8("purple")
                                    setBorderColor8('purple')

                                    setColor3("#CCCCCC")
                                    setColor4('#CCCCCC')
                                    setColor5('#E9D07A')
                                    setColor6('#E9D07A')
                                    setColor7('#EDC8C8')

                                    setBorderColor3("#CCCCCC")
                                    setBorderColor4("#CCCCCC")
                                    setBorderColor5('#E9D07A')
                                    setBorderColor6('#E9D07A')
                                    setBorderColor7('#EDC8C8')




                                }}>850</button>
                            </div>

                            <div className="div4" id='grids'>
                                <TextField style={{
                                    height: "55px",
                                    width: "100px",
                                }} id="standard-basic" label="карат" value={carat} variant="standard" onChange={(e) => {
                                    setCarat(e.target.value)
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='work'> <img className='weightImg' style={{ marginLeft: "20px", paddingTop: "9px" }} src={workImg} alt="" />
                        <span style={{ marginLeft: "10px" }}>работa</span> </div>


                    <div className='bottom_grid'>
                        <div className="div1" id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="ювелир" value={jeweler} variant="standard" onChange={(e) => {
                                setJeweler(e.target.value)
                            }} />
                        </div>



                        <div className="div2" id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="сертификат" value={file} variant="standard" onChange={(e) => {
                                setFile(e.target.value)
                            }} />

                        </div>
                        <div className="div3" id='grids'>
                            <textarea autoFocus style={{ width: "200px", height: "143px" }} maxLength={90} rows={10}
                                placeholder="коммент" value={comment} onChange={(e) => {
                                    setComment(e.target.value)
                                }} />
                        </div>
                        {/* <div className="div4" id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="солид" variant="standard" onChange={(e) => {

                            }} />
                        </div> */}
                        {/* <div className="div5" id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="1" variant="standard" onChange={(e) => {

                            }} />
                        </div> */}
                        <div id='grids'>
                            <TextField style={{
                                width: "100px",
                            }} id="standard-basic" label="Вес" value={weight} variant="standard" onChange={(e) => {
                                setWeight(e.target.value)
                            }} />
                        </div>



                        <div className='div5' id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="тип" value={type} variant="standard" onChange={(e) => {
                                setType(e.target.value)
                            }} />
                        </div>
                        <div className='div6' id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="диаметр" value={diameter} variant="standard" onChange={(e) => {
                                setDiameter(e.target.value)
                            }} />

                        </div>
                        <div className='div7' id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="номер" value={number} variant="standard" onChange={(e) => {
                                setNumber(e.target.value)
                            }} />
                        </div>


                        <div className='div8' id='grids'>
                            <TextField style={{
                                width: "100px",
                            }} id="standard-basic" label="цена" value={price} variant="standard" onChange={(e) => {
                                setPrice(e.target.value)
                            }} />
                        </div>

                        <div className='div9' id='grids'>
                            <TextField style={{
                                height: "55px",
                                width: "100px",
                            }} id="standard-basic" label="штук" value={quantity} variant="standard" onChange={(e) => {

                                setQuantity(e.target.value)
                            }} />
                        </div>

                        <div className='div10' id='grids'>
                            Сумма {price * quantity}$
                        </div>

                    </div>

                    <div className='bottom_button'>
                        <Button variant="contained" onClick={() => {
                            if (images.length === 0) {
                                alert("select a picture")
                            }
                            else if (!item.trim()) {
                                alert("write articule in input")
                            }
                            else if (!price.trim()) {
                                alert("write price in input")
                            }
                            else if (!name.trim()) {
                                alert("Please write your product's name")
                            }
                            else if (!comment.trim()) {
                                alert("Please write something about your product")
                            }
                            else if (!carat.trim()) {
                                alert("Please choose your product's carat")
                            }
                            else if (!weight.trim()) {
                                alert("Please enter the weight of your product")
                            }
                            else if (!jeweler.trim()) {
                                alert("Please write your product's jeweler's name")
                            }
                            else if (!type.trim()) {
                                alert("Please choose your product's type")
                            }
                            else if (!diameter.trim()) {
                                alert("Please choose your product's diameter")
                            }
                            else if (!number.trim()) {
                                alert("Please write your product's jeweler's number")
                            }
                            else if (!quantity.trim()) {
                                alert("Please enter your product quantity")
                            }
                            else {
                                const itog = price * quantity;
                                dispatch(addProduct([item, price, images, assortmentQuery, carat, weight, jeweler, file, itog, quantity, comment, type, diameter, number, stone, prob, name]));

                                handleClose3()
                            }
                        }}>добавить</Button>
                    </div>

                </div>

            </Box>
        </Modal>
    </div>
}

export default Modal3