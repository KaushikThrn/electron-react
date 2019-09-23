import React, {Component} from 'react';
import LeftArrow from '../assets/left-arrow-angle.svg';
import RightArrow from '../assets/right-arrow-angle.svg'

export default class ImagePreview extends Component {
 
  render() {
        const { selectedImage } = this.props; 
        console.log("state is", selectedImage)
        return (
        <div className='image-preview-container'>
            <img src={LeftArrow} className='thumbs navigation-arrow' onClick={(e)=>this.props.decrementIndex()} />
            <img src={URL.createObjectURL(this.props.files[selectedImage])} className='image-preview' />
            <img src={RightArrow} className='thumbs navigation-arrow' onClick={(e)=>this.props.incrementIndex()}/>
        </div>
        );
  }
};


