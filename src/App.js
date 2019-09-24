import React from 'react';
import './App.css';
import Lattice from './components/Lattice'

class App extends React.Component {
  
  state={
    files: []
  };

  fileUploadHandler = (event) =>{
    this.setState({files: []});
    const filesArray=[];
    Object.keys(event.target.files).forEach(file=>{
      filesArray.push(event.target.files[file])
    })
    this.setState({ files: filesArray})
  }

  render(){
      return(
        <div className="App">
        <input type="file"  multiple="multiple" accept="image/x-png,image/gif,image/jpeg" onChange={this.fileUploadHandler} />
        {this.state.files.length? <Lattice files={this.state.files} />:null}
      </div>
    );
}
    
}

export default App;
