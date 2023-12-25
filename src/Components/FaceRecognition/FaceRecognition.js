import React from "react";

const FaceRecognition = ({ imageUrl }) => {
    if (imageUrl) {
        return (
            <div className="flex place-content-center">
                <div className="w-auto h-96 mt-5 flex place-content-center">
                    <img alt="Faces" src={imageUrl} width="auto" height="100%" />
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