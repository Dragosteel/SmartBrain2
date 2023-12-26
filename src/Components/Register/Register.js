import React from "react";
import logo from '../Nav/images/logo.png';

const Register = ({ routeChange }) => {
    return (
        <div className="flex">
            <div className="w-full shadow-md max-w-xs m-auto bg-slate-100 rounded p-5">
                <header>
                    <img alt="" className="w-20 mx-auto mb-5" src={logo} />
                </header>
                <div>
                    <div>
                        <label className="block mb-2 text-slate-500" htmlFor="name">Name</label>
                        <input className="w-full p-2 mb-6 text-slate-700 border-b-2 border-slate-500 outline-none focus:bg-gray-300" type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label className="block mb-2 text-slate-500" htmlFor="email">Email</label>
                        <input className="w-full p-2 mb-6 text-slate-700 border-b-2 border-slate-500 outline-none focus:bg-gray-300" type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label className="block mb-2 text-slate-500" htmlFor="password">Password</label>
                        <input className="w-full p-2 mb-6 text-slate-700 border-b-2 border-slate-500 outline-none focus:bg-gray-300" type="password" name="password" id="password" />
                    </div>
                    <div>
                        <input
                            onClick={() => routeChange('home')}
                            className="w-full bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer" type="submit" value="Register"
                        />
                    </div>
                </div>
                <footer className="flex place-content-center">
                    <p
                        onClick={() => routeChange('signin')}
                        className="text-slate-500 hover:text-slate-800 text-sm float-right cursor-pointer"
                    >Log In</p>
                </footer>
            </div>
        </div>
    );
}

export default Register;