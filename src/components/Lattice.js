import React, {Component} from 'react';
import ImagePreview from './ImagePreview';
import ImageThumbs from './ImageThumbs';

export default class Lattice extends Component {

  render() {
      const { files } = this.props;
        return (
            <div className='gallery'>
                <ImagePreview />
                <ImageThumbs  />  
            </div> 
        );
  }
};


