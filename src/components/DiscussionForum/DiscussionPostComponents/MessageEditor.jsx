import React, { Component } from 'react';


class MessagesEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: []
  }

  this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
  this.createPost = this.createPost.bind(this);
}

handlePostEditorInputChange(ev) {
  this.setState({
    newPostBody: ev.target.value
  });
}

createPost() {
  this.props.addPost(this.state.newPostBody);
  this.setState({
    newPostBody: '',
  });
}

render() {
  return (
    <div className="panel panel-default post-editor">
      <div className="panel-body"><label className='postMessage'>Title:</label>
        <input className='form-control post-editor' value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
        <br/>
        <label className='postMessage'>Comment:</label>
        <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
        <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
      </div>
    </div>
  )
}
}

export default MessagesEditor