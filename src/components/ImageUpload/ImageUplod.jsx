import React, { useState } from "react";
import "./style.css";

const ImageUplod = ({ handleFileChange, setImages }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files;

    setImages([...file]);
  };
  return (
    <div
      className={`image-uploader ${dragOver ? "drag-over" : ""}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="placeholder">Drag &amp; Drop an image here</div>
      <div>or browse</div>
      <input
        multiple
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUplod;
