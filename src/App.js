import react from "react";
import ParticlesJS from './Components/ParticlesJS/ParticlesJS';
import Nav from './Components/Nav/Nav';
import Userdata from './Components/Userdata/Userdata';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';

class App extends react.Component {
  render() {
    return (
      <>
        <Nav />
        <Userdata />
        <ImageLinkForm />
        <ParticlesJS />
      </>
    );
  }
}

export default App;