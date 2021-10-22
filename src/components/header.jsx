import ParticlesBg from "particles-bg";
import React from "react";
import ImageUploading from "react-images-uploading";
import Chatbot from "react-chatbot-kit";
import GetConfig from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import "react-chatbot-kit/build/main.css";
import axios from "axios";

export const Header = props => {
  const [images, setImages] = React.useState([]);

  const [diag, setdiag] = React.useState('');
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  var config = GetConfig(setdiag)
  const onImageSend = async index => {
    // data for submit
    console.log(images[index]);
    var res = await axios.post(
      "http://54.158.154.59/",
      JSON.stringify(images[index]),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(res);
    alert(res.data);
    setdiag(res.data)
    setImages([]);
  };

  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="circle"
          bg={{
            zIndex: 0,
            position: "absolute",
            top: 0
          }}
        />{" "}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {" "}
                  {props.data ? props.data.title : "Loading"} <span> </span>{" "}
                </h1>{" "}
                <p> {props.data ? props.data.paragraph : "Loading"} </p>{" "}
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        className="btn btn-custom btn-lg page-scroll"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload Image Now
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                            <button onClick={() => onImageSend(index)}>
                              Send
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                <div
                  style={{
                    position: "fixed",
                    bottom: 0,
                    right: 0
                  }}
                >
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};
