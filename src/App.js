import React, { Component } from "react";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
