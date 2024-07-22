"use client";
import React from "react";
import ImageUploading from "react-images-uploading";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageUpload = ({ maxNumber, images, setImages }) => {
  const onUploadImage = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="form-image-input">
      <ImageUploading
        multiple
        value={images}
        onChange={onUploadImage}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["webp", "jpg", "png"]}
      >
        {({ onImageUpload, dragProps, onImageRemove, isDragging }) => (
          <>
            {/* <div
            className={`form-image-input-box ${
              images.length > 0 ? "display-none" : "flex"
            }`}
            onClick={onImageUpload}
            {...dragProps}
          >
            <div className="first-icon-image">
              <img src="/assets/images/icon-box/truck-front.png" />
            </div>
            <p>* Upload Front Image</p>
          </div>
          <div
            onClick={onImageUpload}
            {...dragProps}
            className={`form-image-input-box ${
              images.length > 0 ? "display-none" : "flex"
            }`}
          >
            <img src="/assets/images/icon-box/truck-back.svg" />
            <p>* Upload Back Image</p>
          </div> 
          <div
            onClick={onImageUpload}
            {...dragProps}
            className={`form-image-input-box ${
              images.length > 0 ? "display-none" : "flex"
            }`}
          >
            <img src="/assets/images/icon-box/truck-interior.svg" />

            <p>* Upload interior Image</p>
          </div>*/}
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="uploaded-remove-btn">
                  <div onClick={() => onImageRemove(index)}>X</div>
                </div>
              </div>
            ))}
            <div
              className="form-image-input-box"
              onClick={onImageUpload}
              {...dragProps}
            >
              <AddPhotoAlternateIcon />
              <p>Upload Image</p>
            </div>
          </>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
