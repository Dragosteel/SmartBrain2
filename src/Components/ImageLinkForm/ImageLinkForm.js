import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="mt-5 flex place-content-center">
            <div className="palete w-2/3 p-10 flex place-content-center border-2 border-slate-300 rounded-xl">
                <input className="w-5/6 h-auto rounded-md bg-gray-200" type="text" />
                <button className="ml-3 px-5 text-2xl uppercase text-white bg-slate-800 rounded-md hover:scale-110">
                    submit
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;