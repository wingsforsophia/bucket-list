import React from "react";
import "./ImageUploader.css"

function FileUpload() {
    // State to store uploaded file
    const [file, setFile] = React.useState("");
  
    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
  
    return (
      <div id="upload-box"> 
      {file && <Image  className='profilePicture' image={file} />}
        <input type="file" onChange={handleUpload} />
      </div>
    );
  }
  
  /**
   * Component to display thumbnail of image.
   */
  const Image = ({ image }) => {
    return <img  className='profilePicture' src={URL.createObjectURL(image)} alt={image.name} />;
  };





export default FileUpload;