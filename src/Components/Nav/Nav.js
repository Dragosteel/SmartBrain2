import React from "react";
import './Nav.css';
import logo from './images/logo.png';

const Nav = () => {
    return (
        <div className="flex justify-between">
            <div className="logo animate-pulse inline-block mx-5 my-5">
                <img className="inline" alt=" logo" src={logo} width="60px" height="auto" />
                <p className="inline px-1 text-2xl font-bold uppercase tracking-tighter drop-shadow-sm cursor-default">
                    smart brain
                </p>
            </div>
            <nav className="mx-5 my-8">
                <span className="mx-1 border-2 p-1.5 border-black rounded-full text-md font-medium uppercase cursor-pointer hover:text-slate-400 hover:border-slate-400">
                    sign out
                </span>
            </nav>
        </div>
    );
}

export default Nav;