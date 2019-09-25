import React, {Component} from 'react';
import ImagePreview from './ImagePreview';
import ImageThumbs from './ImageThumbs';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

export default class Lattice extends Component {
  state = {
      index: 0,
      listening: false
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

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  };
  
  handleListen = () =>{
        // handle speech recognition here 
        
        if (this.state.listening) recognition.start()

        let finalTranscript = ''
        recognition.onresult = event => {
        let interimTranscript = ''
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interimTranscript += transcript;
        }
        
        if(finalTranscript.includes('next') && event.results[0].isFinal){
            this.changeIndex(true);
        }
        else if ((finalTranscript.includes('previous') || finalTranscript.includes('back')) && event.results[0].isFinal){
            this.changeIndex(false);
        }

    }
}

  render() {
      const { files } = this.props;
        return (
            <div className='gallery'>
                <ImagePreview files={files} selectedImage={this.state.index} incrementIndex={()=>this.changeIndex(true)} decrementIndex={()=>this.changeIndex(false)} />
                <ImageThumbs  files={files} onClickImage={this.changeSelectedImage} selectedImage={this.state.index}/>
                <button id='microphone-btn' style={button} onClick={this.toggleListen} />  
            </div> 
        );
  }
};

const styles = {
    button: {
      width: '60px',
      height: '60px',
      background: 'lightblue',
      borderRadius: '50%',
      margin: '6em 0 2em 0',
      position: 'absolute'
    }
  }
  
  const { button } = styles


