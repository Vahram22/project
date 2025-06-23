import React from 'react';
import ImageUploading from 'react-images-uploading';

const UploadImg = ({ images, setImages, }) => {

    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >

                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    dragProps,
                }) => (
                    <div className="upload__image-wrapper" >
                        {!imageList.length && <button

                            style={{
                                width: "120px",
                                height: "70px",
                                border: "none",
                                cursor:"pointer",
                                background: "#D3D3D3",
                                color: "white",
                                fontSize: "18px",
                                borderRadius: "5px"
                            }}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <p>загрузить</p>   <br />
                            <p> фото</p>
                        </button>}
                        &nbsp;


                        {imageList.map((image, index) => (
                            <div key={index} className="image-item" onClick={
                                imageList.length ? () => onImageUpdate(index) : undefined
                            }>
                                <img src={image['data_url']} alt="" style={{
                                    width: "120px",
                                    height: '80px'
                                }} />

                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
export default UploadImg