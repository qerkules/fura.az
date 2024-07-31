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
