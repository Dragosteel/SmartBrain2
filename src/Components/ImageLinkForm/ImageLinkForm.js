import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className="mt-2 text-xl text-amber-400 capitalize flex place-content-center">
                this smart brain will detect the faces in your picture
            </div>
            <div className="text-xl text-amber-400 capitalize flex place-content-center">
                just give it a try
            </div>
            <div className="mt-2 flex place-content-center">
                <div className="palete w-2/3 p-10 flex place-content-center border-2 border-slate-300 rounded-xl">
                    <input
                        onChange={onInputChange}
                        className="w-5/6 p-1 text-center h-auto rounded-md bg-gray-200 hover:border-slate-500"
                        type="text"
                        placeholder="Please Add Your Picture's Link"
                    />
                    <button
                        className="ml-3 px-5 text-2xl uppercase text-white bg-slate-800 rounded-md hover:scale-110"
                        onClick={onButtonSubmit}
                    >detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;