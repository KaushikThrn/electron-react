import React, {Component} from 'react';
import ImagePreview from './ImagePreview';
import ImageThumbs from './ImageThumbs';

export default class Lattice extends Component {
  state = {
      index: 0
  }
  changeSelectedImage = (index) =>{
      this.props.files.length >= this.state.index ? this.setState({index}): this.setState({index: 0})
  };

  // increment is true for incrementing and false for decrementing 
  changeIndex = (increment) => {
    if(increment) {
        if(this.state.index+1 <= this.props.files.length-1) this.setState((prevState)=>({index: ++prevState.index}));
    }
    else {
        if(this.state.index-1>=0) this.setState((prevState)=>({index: --prevState.index}))
    }
  }

  render() {
      const { files } = this.props;
        return (
            <div className='gallery'>
                <ImagePreview files={files} selectedImage={this.state.index} incrementIndex={()=>this.changeIndex(true)} decrementIndex={()=>this.changeIndex(false)} />
                <ImageThumbs  files={files} onClickImage={this.changeSelectedImage}/>  
            </div> 
        );
  }
};


