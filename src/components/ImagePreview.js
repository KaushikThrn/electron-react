import React, {Component} from 'react';

export default class ImagePreview extends Component {
 
  render() {
        const { selectedImage } = this.props; 
        return (
        <div className='image-preview'>
            <img src={URL.createObjectURL(this.props.files[selectedImage])} />
        </div>
        );
  }
};


