import React, { Component } from 'react';
// import Particles from 'react-particles-js';
//import ParticlesBg from 'particles-bg'
//import Clarifai from 'clarifai';
//import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/navigation/navigation';
//import Signin from './components/Signin/Signin';
//import Register from './components/Register/Register';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

/*You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: 'YOUR API KEY HERE'
});
*/

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App;