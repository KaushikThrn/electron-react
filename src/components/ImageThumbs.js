import React, {Component} from 'react';

export default class ImageThumbs extends Component {

  handleClick= (index, event) =>{
    this.props.onClickImage(index);
  }

  render() {
      const { files } = this.props
        return (
        <div className='image-thumbs-container'>
           {files.map((image, index)=>{
               return (<img key={index} className={'thumbs '+ (this.props.selectedImage === index? 'selected-thumb': '')} src={URL.createObjectURL(image)} onClick={this.handleClick.bind(this, index)}/>)
           })}
        </div>
        );
  }
};


