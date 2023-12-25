import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="mt-5 flex justify-center content-center">
            <div className="palete w-4/5 p-10 flex justify-center content-center border-2 border-slate-500 rounded-xl">
                <input className="w-3/4 h-auto rounded-md bg-gray-200" type="text" />
                <button className="w-1/4 ml-2 text-2xl uppercase text-white bg-slate-900 rounded-md hover:scale-110">
                    submit
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;