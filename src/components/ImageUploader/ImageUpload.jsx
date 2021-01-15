import React from "react";


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
      {file && <ImageThumb  className='profilePicture' image={file} />}
        <input type="file" onChange={handleUpload} />
        {/* <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p> */}
       
      </div>
    );
  }
  
  /**
   * Component to display thumbnail of image.
   */
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
  




export default FileUpload;