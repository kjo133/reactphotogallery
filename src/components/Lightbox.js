import React from "react";

class Lightbox extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }
    return (
      <div
        className="modal-overlay"
        isOpen={this.props.isOpen}
        onClick={this.props.onClick}
        name={this.props.name}
      >
        <div className="modal-body">
          <a className="modal-close" href="#" onClick={this.props.onClick}>
            <span className="fa fa-times" />
          </a>
          <img src={this.props.src} />
        </div>
      </div>
    );
  }
}

export default Lightbox;
