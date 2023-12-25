import React from "react";

const Userdata = () => {
    return (
        <div className="mt-5">
            <div className="flex place-content-center">
                <p className="text-2xl text-white capitalize">
                    ahmed, your current score is ...
                </p>
            </div>
            <div className="flex place-content-center">
                <p className="text-4xl text-red-500 capitalize">
                    5
                </p>
            </div>
        </div>
    );
}

export default Userdata;