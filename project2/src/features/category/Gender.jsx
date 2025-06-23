import React, { useEffect, useState, useRef } from "react"
import './gender.css'
import Product from "./stripe";
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getGender, setSearch } from "./GenderSlice"
import { getCategory } from "./childcategory/CategorySlice"
import Man2Icon from '@mui/icons-material/Man2';
import WomanIcon from '@mui/icons-material/Woman';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getAssortment } from "./childcategory/assortment/AssortmentSlice"
import { delet, getFilter, getFilter2, getFilter3, getProduct } from "./childcategory/assortment/product/ProductSlice"

import logo from './img/Rectangle 1437.png'
import userimg from './img/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'

import diamondImg from './img/diamond.png'
import weightImg from './img/Group 2653.png'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Modal1 from "./components/modal1"
import Modal2 from "./components/modal2"
import Modal3 from "./components/Modal3"

import SearchIcon from '@mui/icons-material/Search'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// import Registration from "./akaunt/Register"
import Login from "./components/Login"
import Registration from "./components/Register"
// import ModalProduct from "./components/ModalProduct"
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import UploadImg from "../uploading/Uploading"
import { loadingUser, logaut, onChangeAccount } from "./components/RegisterSlice"



function Gender() {
    let dispatch = useDispatch()
    const { gender } = useSelector(state => state.gender)
    const { category } = useSelector(state => state.category)
    const { assortment } = useSelector(state => state.assortment)
    const { product } = useSelector(state => state.products)
    const search = useSelector(state => state.gender.search);
    const account = useSelector((state) => state.register.account)


    let [searchParams, setSearchParams] = useSearchParams()
    let genderQuery = searchParams.get("gender")
    let categoryQuery = searchParams.get("category")
    let assortmentQuery = searchParams.get("assortment")
    let productQuery = searchParams.get("products")
    let priceQuery = searchParams.get("price")
    let minQuery = searchParams.get('min')
    let maxQuery = searchParams.get('max')
    let searchQuery = searchParams.get('search')
    let loginDisplayQuery = searchParams.get('display')
    let loginQuery = searchParams.get("login")

    let [colorm, setColorm] = useState("black")///guyner
    let [colorw, setColorw] = useState("black")
    let [selassortment, setSelassortment] = useState(null)
    let [selcategory, setSelcategory] = useState(null)

    let [images, setImages] = useState([])

    let [modalgender, setModalgender] = useState("")
    let [text1, setText1] = useState("")
    let [name_ass, setName_ass] = useState("")
    let [price, setPrice] = useState("")
    let [item, setItem] = useState("")
    let [carat, setCarat] = useState("")
    let [weight, setWeight] = useState("")
    let [jeweler, setJeweler] = useState("")
    let [file, setFile] = useState("")
    let [itog, setItog] = useState(0)
    let [name, setName] = useState("")
    let [quantity, setQuantity] = useState("")
    let [comment, setComment] = useState("")
    let [type, setType] = useState("")
    let [diameter, setDiameter] = useState("")
    let [number, setNumber] = useState("")
    let [stone, setStone] = useState("")
    let [prob, setProb] = useState("")



    let [display, setDisplay] = useState(true)
    let [openAccount, setOpenAccount] = useState(false)
    let [currentImg, setCurrentImg] = useState("")
    let [newName, setNewName] = useState("")
    let [oldPassword, setOldPassword] = useState("")
    let [newPassword, setNewPassword] = useState("")


    const handleimgChange = (newimg) => {
        setCurrentImg(newimg.length > 0 ? newimg[0].data_url : "")
    }

    const handleChangeClick = () => {
        dispatch(onChangeAccount([account, [{ data_url: currentImg }], newName, oldPassword, newPassword]))
            .unwrap()
            .then((updateUser) => {
                if (updateUser) {
                    setOldPassword("")
                    setNewPassword("")
                }
            })
            .catch((error) => {
                console.error("Error", error)
                setOldPassword("")
                setNewPassword("")
            })
    }

    const handleDelete = () => {
        setCurrentImg("")
    }

    const handleExit = () => {
        dispatch(logaut())
        setOpenAccount(false)
    }

    const handleaccountSettings = () => {
        setOpenAccount(!openAccount)
        images.length = 0
    }

    useEffect(() => {
        if (account) {
            setCurrentImg(account.img || "")
            setNewName(account.name || "")
        }
    }, [account])




    let [usename, setUsename] = useState("")



    let [login, setLogin] = useState(false)

    let [name_text, setName_text] = useState("")


    let [show, setShow] = useState(true)
    let [user, setUser] = useState([])

    const [open1, setOpen1] = useState(false);//modal
    const handleOpen1 = () => setOpen1(true);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);

    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);

    const [openProduct, setOpenProduct] = useState(false);////modalProduct
    const handleOpenProduct = () => setOpenProduct(true);
    const handleCloseProduct = () => setOpenProduct(false);
    const styleProduct = {
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


    const [openReg, setOpenReg] = useState(false);
    const handleOpenReg = () => {
        setOpenReg(true)
        setSearchParams({
            gender: genderQuery,
            category: categoryQuery,
            assortment: assortmentQuery,
            min: minQuery,
            max: maxQuery,
            search: searchQuery,
            login: loginQuery
        })
    };
    const handleCloseReg = () => setOpenReg(false);
    const [openLog, setOpenLog] = useState(false);
    const handleOpenLog = () => {
        handleCloseReg()

        setOpenLog(true)
        setSearchParams({
            gender: genderQuery,
            category: categoryQuery,
            assortment: assortmentQuery,
            min: minQuery,
            max: maxQuery,
            search: searchQuery,
            login: loginQuery
        })
    };

    useEffect(() => {
        dispatch(getGender())
        dispatch(getCategory())
        dispatch(getAssortment())
        dispatch(getProduct())
        dispatch(setSearch())
        dispatch(loadingUser())
    }, [])

    function valuetext(value) {
        return `${value}°C`;
    }

    function valuetext2(value2) {
        return `${value2}°C`;
    }
    function valuetext3(value3) {
        return `${value3}°C`;
    }

    const minDistance = 100;

    const [value1, setValue1] = useState([minQuery || "100", maxQuery || "8000"]);
    const handleChange1 = (e, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        }
        else {
            setValue1([value1[0], Math.max(newValue[1], value1[0])]);
        }
        dispatch(getFilter([value1]))
        setSearchParams({
            min: value1[0],
            max: value1[1],
            gender: genderQuery,
            category: categoryQuery,
            assortment: assortmentQuery,
            search: searchQuery,
            login: loginQuery
        })
    };

    console.log(minQuery, maxQuery, "minquery1");



    const products = [
        { id: 1, name: "Ապրանք 1", price_id: "price_1RacmMRwg3lAwcbgJfpM0z3F", price_display: "$5" },
        // ......
    ];


//////////////////////////////////////////////////////////////////////////////////////////////////;
    //animatia

    const [animate, setAnimate] = useState(false);  //// animatie
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const elementRef = useRef(null);
    const [color1, setColor1] = useState("blue")
    const [color2, setColor2] = useState("#E6E6E6")



    const [showFilter, setShowFilter] = useState(false);
    const handleClick = () => {
        if (color1 == "blue" && color2 == "#E6E6E6") {
            setColor1("#E6E6E6")
            setColor2("blue")
        } else {
            setColor1("blue")
            setColor2("#E6E6E6")
        }
        if (animate) {
            setAnimate(false);
            setShowFilter(false);
        } else {
            setAnimate(true);
            setTimeout(() => {
                setShowFilter(true);
            }, 1500);
        }
    };

    const handleAnimationEnd = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setPosition({ top: rect.top, left: rect.left });
        }
    };


    return <div className="parent2">
        <div className="parent">
            <img src={logo} />
            <Paper
                style={{
                    backgroundColor: "#E8EAEB",
                    borderRadius: "20px",
                }}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    value={search || ''}
                    type='search'
                    onChange={(e) => {
                        dispatch(setSearch(e.target.value))
                    }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="поиск"
                    inputProps={{ 'aria-label': 'поиск' }}
                />

                <IconButton onClick={() => {
                    setSearchParams({
                        search: search,
                        gender: genderQuery,
                        category: categoryQuery,
                        assortment: assortmentQuery,
                        product: productQuery,
                        min: minQuery,
                        max: maxQuery,
                        login: loginQuery
                    })
                }}
                    style={{
                        backgroundColor: "#0008C1",
                        color: "white"
                    }} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>



            <div className="header_left">
                {
                    !account ? (
                        <div>
                            <Button onClick={handleOpenReg}>Регистрация </Button>
                            <Button onClick={handleOpenLog}>вход</Button>
                        </div>
                    ) :
                        (<div>
                            <div className="header_left_child">
                                <div className="header_left_change">
                                    <img className="imgUser" src={currentImg || userimg} onClick={handleaccountSettings} />
                                    <h2>{account.name}</h2>
                                </div>
                                <Button onClick={handleExit}>выход</Button>
                            </div>
                            {openAccount && (
                                <div className="changed" id="two">
                                    {
                                        !currentImg ? (
                                            <UploadImg images={[{ data_url: currentImg }]} setImages={handleimgChange} />
                                        ) : (
                                            <div className="changed_delet">
                                                <img className="changed_img" src={currentImg} />
                                                <p className="p_delet" onClick={handleDelete}>удалить фото</p>
                                            </div>
                                        )
                                    } <br />
                                    <h3>{account.name}</h3>   <br />
                                    <input className="inputchange" type="text" value={newName} placeholder=" New Name" onChange={(e) => setNewName(e.target.value)} />  <br />
                                    <input className="inputchange" type="password" value={oldPassword} placeholder=" Old password" onChange={(e) => setOldPassword(e.target.value)} /> <br />
                                    <input className="inputchange" type="password" value={newPassword} placeholder=" New password" onChange={(e) => setNewPassword(e.target.value)} />   <br />
                                    <button className="buttonchange" onClick={handleChangeClick}>сохранить</button>

                                </div>
                            )}

                        </div>

                        )}
            </div>
        </div>






        <div className="components" style={{
            display: !loginDisplayQuery
        }}  >
            {showFilter && <div className="slider">
                <p>цена</p>
                <Box sx={{ width: 160 }}>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        min={100}
                        max={8000}
                    />
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <span> от {value1[0]}</span>
                        <span> до {value1[1]}</span>
                    </div> <br />

                </Box>
            </div>}

            <div
                ref={elementRef}
                className={`div_filter ${animate ? 'filter-animation' : ''}`}
                style={{ backgroundColor: color1 }}>

                <p onClick={handleClick} style={{ cursor: "pointer", color: color2, transition: "0.3s" }} onAnimationEnd={handleAnimationEnd} >
                    <p style={{ marginLeft: "-8px" }}><FilterAltIcon style={{ width: "28px", height: "30px", color: color2 }} /></p>
                    <p>Ф</p>
                    <p>И</p>
                    <p>Л</p>
                    <p>Ь</p>
                    <p>Т</p>
                    <p>Р</p>
                </p>
            </div>
            {/* header */}

            <div className={`${animate ? 'right_bigDiv' : ''}`}>
                <div className="header">
                    <div className="gender">
                        {
                            gender.map(({ id }) => {
                                return (<h1 key={id} onClick={() => {
                                    setSearchParams({
                                        gender: id,
                                        min: 100,
                                        max: 6700,
                                        min2: "0",
                                        max2: "500",
                                        min3: "1",
                                        max3: "100",
                                        search: "",
                                        login: loginQuery
                                    })
                                }}>

                                    {(id == "1") ? <Man2Icon onClick={() => {//?????? guynery
                                        setColorm("blue")
                                        setColorw("black")


                                    }} style={{
                                        width: "50px", height: "50px", backgroundColor: "white", color: colorm, cursor: "pointer", borderRadius: "5px", boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                    }} /> :
                                        (id == "2") ? <WomanIcon onClick={() => {
                                            setColorw("blue")
                                            setColorm("black")
                                        }} style={{
                                            width: "50px", height: "50px", color: colorw, backgroundColor: "white", borderRadius: "5px", cursor: "pointer", boxShadow: "2px 2px 2px 2px rgba(128, 128, 128, 0.315)"
                                        }} /> : <div></div>
                                    }
                                </h1>)
                            })
                        }
                    </div>
                    <div className="category">

                        {
                            category.map(({ id, parentid, name, img }) => {
                                return (genderQuery === parentid && <div className="child_category" key={id} style={{
                                    border: selcategory == id && categoryQuery != null ? `2px solid black` : `0px`
                                }} onClick={() => {
                                    setSelcategory(id)
                                    setName_text(name)
                                    console.log(gender.id, "gender");

                                    if (genderQuery == "1" && id == 5) {
                                        setSelassortment("13")
                                        setSearchParams({
                                            gender: genderQuery,
                                            category: id,
                                            min: minQuery,
                                            max: maxQuery,
                                            assortment: "13",
                                            search: searchQuery,
                                            login: loginQuery
                                        })
                                    } else if (genderQuery == "2" && id == 1) {
                                        setSelassortment("1")
                                        setSearchParams({
                                            gender: genderQuery,
                                            category: id,
                                            min: minQuery,
                                            max: maxQuery,
                                            assortment: "1",
                                            search: searchQuery,
                                            login: loginQuery
                                        })
                                    } else {
                                        setSearchParams({
                                            gender: genderQuery,
                                            category: id,
                                            min: minQuery,
                                            max: maxQuery,
                                            search: searchQuery,
                                            login: loginQuery
                                        })
                                    }

                                }}
                                >
                                    <img className="img_category" src={img} />
                                    {name}
                                </div>)
                            })
                        }
                    </div>
                    {genderQuery != null && account ? <Button onClick={handleOpen1}>
                        <AddCircleIcon style={{ width: "50px", height: "50px" }} />
                    </Button> : <div></div>}

                </div>

                <div className="assortment">
                    {
                        assortment.map(({ id, parId, Name }) => {
                            return (categoryQuery === parId && <div key={id} className="assortment_div" style={{
                                borderBottom: selassortment == id && assortmentQuery != null ? `4px solid blue` : `4px solid white`,
                                borderBottomRightRadius: "3px",
                                cursor: "pointer",
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
                    {categoryQuery != null && account ? <Button onClick={handleOpen2}>
                        <AddCircleIcon style={{
                            width: "30px",
                            height: "30px",
                            opacity: 1
                        }} />

                    </Button> : <div></div>}
                </div>

                {/* <product> */}
                <div className='product'>
                    {
                        product.map(({ id, PID, price, item, img, weight, carat, }) => {
                            return (assortmentQuery === PID &&
                                (searchQuery == item || searchQuery == "") &&
                                (minQuery <= price && maxQuery >= price) &&

                                <div className="product_child" key={id} onClick={() => {
                                    setSearchParams({
                                        gender: genderQuery,
                                        category: categoryQuery,
                                        assortment: assortmentQuery,
                                        products: id,
                                        price: price,
                                        min: minQuery,
                                        max: maxQuery,
                                        search: searchQuery,
                                        login: loginQuery
                                    })
                                    // console.log(minQuery2, maxQuery2, "map");

                                }}>
                                    <img className="img_product" src={img} alt="" />
                                    {display == true ?
                                        <div className="product_info1" >
                                            <span>
                                                {item}
                                            </span>
                                            <span style={{ fontWeight: "730" }}  >
                                                {price}$
                                            </span>
                                        </div> :
                                        <div className="product_info2">
                                            <span>
                                                {item}
                                            </span>
                                            <span>
                                                <DeleteIcon style={{ color: "#F44336" }} onClick={() => {
                                                    dispatch(delet(id))
                                                }} />
                                            </span>
                                        </div>}

                                    <div className="pay">
                                        {products.map(p => <Product key={p.id} product={p} />)}

                                        <span className="MoreVertIcon">

                                            <MoreVertIcon onClick={() => {
                                                if (display == true) {
                                                    setDisplay(false)
                                                }
                                                else {
                                                    setDisplay(true)
                                                }
                                            }} />
                                        </span>
                                        <span className="ExpandMoreIcon">
                                            <ExpandMoreIcon onClick={handleOpenProduct} style={{ width: "20px" }} />
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    {assortmentQuery != null && account ? <Button onClick={handleOpen3}>
                        <AddCircleIcon style={{ width: "50px", height: "50px" }} />
                    </Button> : <div></div>}
                </div>
            </div>
        </div>


        <Modal1
            setSearchParams={setSearchParams}
            modalgender={modalgender}
            setModalgender={setModalgender}
            images={images}
            setImages={setImages}
            text1={text1}
            setText1={setText1}
            colorm={colorm}
            setColorm={setColorm}
            colorw={colorw}
            setColorw={setColorw}
            open1={open1}
            setOpen1={setOpen1}
            gender={gender}
            loginQuery={loginQuery}

        />
        <Modal2
            name_ass={name_ass}
            setName_ass={setName_ass}
            open2={open2}
            setOpen2={setOpen2}
            categoryQuery={categoryQuery}
            name_text={name_text}
            loginQuery={loginQuery}

        />
        <Modal3
            setSearchParams={setSearchParams}
            modalgender={modalgender}
            setModalgender={setModalgender}
            images={images}
            setImages={setImages}
            text1={text1}
            setText1={setText1}
            colorm={colorm}
            setColorm={setColorm}
            colorw={colorw}
            setColorw={setColorw}
            open3={open3}
            setOpen3={setOpen3}
            gender={gender}
            categoryQuery={categoryQuery}
            genderQuery={genderQuery}
            assortmentQuery={assortmentQuery}
            price={price}
            setPrice={setPrice}
            item={item}
            setItem={setItem}
            setSelcategory={setSelcategory}
            setSelassortment={setSelassortment}
            category={category}
            selcategory={selcategory}
            assortment={assortment}
            selassortment={selassortment}
            minQuery={minQuery}
            maxQuery={maxQuery}
            searchQuery={searchQuery}
            loginQuery={loginQuery}
            carat={carat}
            setCarat={setCarat}
            weight={weight}
            setWeight={setWeight}
            jeweler={jeweler}
            setJeweler={setJeweler}
            file={file}
            setFile={setFile}
            name={name}
            setName={setName}
            quantity={quantity}
            setQuantity={setQuantity}
            comment={comment}
            setComment={setComment}
            type={type}
            setType={setType}
            diameter={diameter}
            setDiameter={setDiameter}
            number={number}
            setNumber={setNumber}
            stone={stone}
            setStone={setStone}
            prob={prob}
            setProb={setProb}
        />


        <Registration
            handleCloseReg={handleCloseReg}
            user={user}
            setUser={setUser}
            openReg={openReg}
            setOpenReg={setOpenReg}
            categoryQuery={categoryQuery}
            openLog={openLog}
            setOpenLog={setOpenLog}
            handleOpenLog={handleOpenLog}
        />

        <Login
            user={user}
            setUser={setUser}
            setSearchParams={setSearchParams}
            loginDisplayQuery={loginDisplayQuery}
            genderQuery={genderQuery}
            categoryQuery={categoryQuery}
            assortmentQuery={assortmentQuery}
            productQuery={productQuery}
            minQuery={minQuery}
            maxQuery={maxQuery}
            // minQuery2={minQuery2}
            // maxQuery2={maxQuery2}
            // minQuery3={minQuery3}
            // maxQuery3={maxQuery3}
            searchQuery={searchQuery}
            openLog={openLog}
            setOpenLog={setOpenLog}
            login={login}
            setLogin={setLogin}
            setUsename={setUsename}
            usename={usename}
        />

        <Modal
            keepMounted
            open={openProduct}
            onClose={handleCloseProduct}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={styleProduct}>
                {
                    product.map(({ id, price, item, img, carat, weight, diameter, number, jeweler, file, itog, quantity, comment, name, type, stone, prob }) => {
                        return id == productQuery && <div className="product_child" key={id} onClick={() => {
                            setSearchParams({
                                gender: genderQuery,
                                category: categoryQuery,
                                assortment: assortmentQuery,
                                products: id,
                                price: price,
                                min: minQuery,
                                max: maxQuery,
                                search: searchQuery,
                                login: loginQuery
                            })

                        }}>
                            <img className="modal_img_product" src={img} alt="" />

                            <div className="modal_product_info1" >
                                <span>
                                    {item}
                                </span>
                                <span style={{ fontWeight: "730" }}  >
                                    {price}$
                                </span>
                            </div>
                            <div className="product_modal_probs">
                                <div>{name}</div>
                                <div style={{ width: "1px", height: "50px", border: "1px solid" }}></div>
                                <div className="modal_buton">
                                    <button className="modal_button_prob">{prob}</button>
                                    <img src={diamondImg} className="weightImg" alt="" />
                                </div>
                                <div className="product_modal_probs_child">
                                    <div>
                                        <img src={weightImg} className="weightImg" /> {weight}гр</div>
                                    <div>{diameter}mm</div>
                                </div>
                            </div>

                            <table className="table1">
                                <tr>
                                    <th>тип</th>
                                    <th>карат</th>
                                    <th>сертификат</th>
                                </tr>
                                <tr>
                                    <td>{type}</td>
                                    <td>{carat}</td>
                                    <td>{file}</td>

                                </tr>
                            </table>
                            <div className="modal_types">
                                <span>камень-{stone},</span>
                                <span>тип-{type},</span>
                                <span> Штук {quantity}</span>
                            </div>
                            <table className="table2">
                                <tr>
                                    <th>ювелир</th>
                                    <th className="table2_th2">Номер</th>
                                </tr>
                                <tr>
                                    <td>{jeweler}</td>
                                    <td>{number}</td>
                                </tr>
                            </table>
                            <div className="modal_comments">
                                <p>комментарий</p>
                                <div>{comment}</div>
                            </div>

                            <p style={{ fontSize: "20px", fontWeight: "700" }}>Сумма {itog}$</p>
                        </div>

                    })}
            </Box>
        </Modal>
    </div >
}
export default Gender