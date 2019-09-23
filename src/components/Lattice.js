import React, {Component} from 'react';
import ImagePreview from './ImagePreview';
import ImageThumbs from './ImageThumbs';

export default class Lattice extends Component {
  state = {
      index: 0
  }
  changeSelectedImage = (index) =>{
      this.props.files.length >= this.state.index ? this.setState({index}): this.setState({index: 0})
  }

  render() {
      const { files } = this.props;
        return (
            <div className='gallery'>
                <ImagePreview files={files} selectedImage={this.state.index} />
                <ImageThumbs  files={files} onClickImage={this.changeSelectedImage}/>  
            </div> 
        );
  }
};


