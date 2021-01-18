import React from 'react';
import './CardProfile.css'

const ImgUpload =({
  onChange,
  src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img className='userProfile' for="photo-upload" src={src}/>
    </div>
    <br/>
     <input className='chooseFile' id="photo-upload" type="file" onChange={onChange}/> 
    
  </label>


const Name =({
  onChange,
  value
})=>
  <div className="field">
    <label className= 'cardProfile' htmlFor="name">
      name:
    </label>
    <input 
      id="name" 
      type="text" 
      onChange={onChange} 
      maxlength="25" 
      value={value} 
      placeholder="Alexa" 
      required/>
  </div>

  
const Status =({
  onChange,
  value
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="status">
      status:
    </label>
    <input 
      id="status" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="It's a nice day!" 
      required/>
  </div>

const Dream =({
  onChange,
  value
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="dream">
      dream destination:
    </label>
    <input 
      id="dream" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="Bora Bora!" 
      required/>
  </div>

const Favorite =({
  onChange,
  value
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="favorite">
      favorite destination:
    </label>
    <input 
      id="favorite" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="Africa!" 
      required/>
  </div>
const Profile =({
  onSubmit,
  src,
  name,
  status,
  dream,
  favorite
})=>
  <div className="profilePic">
    <form className='cardProfile'onSubmit={onSubmit}>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img className='userProfile' for="photo-upload" src={src}/>
        </div>
      </label>
      <div className='inputProfile'>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <div className='dream'>{dream}</div>
        <div className='favorite'>{favorite}</div>
      <button type="submit" className="edit">Edit Profile </button>
      </div>
    </form>
  </div>
     
      
const Edit =({
  onSubmit,
  children,
})=>
  <div className="profilePic">
    <form onSubmit={onSubmit}>
        {children}
      <button type="submit" className="save">Save </button>
    </form>
  </div>

class CardProfile extends React.Component {
  state = {
    file: '',
    imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name:'',
    status:'',
    dream: '',
    favorite: '',
    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName = e =>{
    const name = e.target.value;
    this.setState({
      name,
    });
  }
  
  editStatus = e => {
    const status = e.target.value;
    this.setState({
      status,
    });
  }
  
  handleSubmit= e =>{
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }
  
  render() {
    const {imagePreviewUrl, 
           name, 
           status, 
           dream,
           favorite,
           active} = this.state;
    return (
      <div>

       
        {(active === 'edit')?(
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
            <Name onChange={this.editName} value={name}/>
            <Status onChange={this.editStatus} value={status}/>
            <Dream onChange={this.editDream} value={dream}/>
            <Favorite onChange={this.editFavorite} value={favorite}/>
          </Edit>
        ):(
          <Profile 
            onSubmit={this.handleSubmit} 
            src={imagePreviewUrl} 
            name={name} 
            status={status}
            dream={dream}
            favorite={favorite}/>)}
        
      </div>
    )
  }
}

export default CardProfile