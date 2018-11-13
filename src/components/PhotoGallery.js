import React from "react";
import GalleryImage from "./GalleryImage";
import Lightbox from "./Lightbox";
import RandomNumber from "./RandomNumber";

const photos = [
  "https://source.unsplash.com/3Z70SDuYs5g/800x600",
  "https://source.unsplash.com/01vFmYAOqQ0/800x600",
  "https://source.unsplash.com/2Bjq3A7rGn4/800x600",
  "https://source.unsplash.com/t20pc32VbrU/800x600",
  "https://source.unsplash.com/pHANr-CpbYM/800x600"
];

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      image: ""
    };

    this.closeImage = this.closeImage.bind(this);
    this.openImage = this.openImage.bind(this);
  }

  openImage(image, e) {
    this.setState({
      showLightbox: true,
      image: image
    });
  }

  closeImage() {
    this.setState({
      showLightbox: false,
      image: ""
    });
  }
  render() {
    return (
      <div
        refs="gallery-container"
        className="container-fluid gallery-container"
      >
        <div className="row">
          {photos.map((url, index) => {
            return (
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="gallery-card">
                  <GalleryImage
                    className="gallery-thumbnail"
                    src={url}
                    alt={"Image number " + (index + 1)}
                  />
                  <span
                    className="card-icon-open fa fa-expand"
                    value={url}
                    onClick={e => this.openImage(url, e)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Lightbox
          isOpen={this.state.showLightbox}
          onClick={this.closeImage}
          src={this.state.image}
        />

        <RandomNumber />
      </div>
    );
  }
}

export default PhotoGallery;
