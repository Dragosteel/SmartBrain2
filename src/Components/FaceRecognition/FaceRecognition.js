import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
    if (imageUrl) {
        return (
            <div className="flex place-content-center">
                <div className="absolute mt-2">
                    <img id="inputimage" className="max-h-96" alt="Faces" src={imageUrl} width="auto" />
                    <div className="boundarybox" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default FaceRecognition;