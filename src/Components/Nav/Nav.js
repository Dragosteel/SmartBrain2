import React from "react";
import './Nav.css';
import logo from './images/logo.png';

const Nav = ({ routeChange, isSignedIn }) => {
    return (
        <div className="flex justify-between">
            <div className="logo animate-pulse mx-5 my-5 p-1 border-2 rounded-md border-slate-300">
                <img alt="logo" src={logo} width="150px" height="auto" />
                <p className="px-1 text-2xl font-bold uppercase tracking-tighter drop-shadow-sm cursor-default">
                    smart brain
                </p>
            </div>
            {(isSignedIn) ?
                <nav className="mx-5 my-8">
                    <span
                        onClick={() => routeChange('signout')}
                        className="mx-1 border-2 p-1.5 text-slate-300 border-slate-300 rounded-full text-md font-medium uppercase cursor-pointer hover:text-black hover:border-black"
                    >log out</span>
                </nav>
                :
                <nav className="mx-5 my-8">
                    <span
                        onClick={() => routeChange('signin')}
                        className="mx-1 border-2 p-1.5 text-slate-300 border-slate-300 rounded-full text-md font-medium uppercase cursor-pointer hover:text-black hover:border-black"
                    >log In</span>
                    <span
                        onClick={() => routeChange('register')}
                        className="mx-1 border-2 p-1.5 text-slate-300 border-slate-300 rounded-full text-md font-medium uppercase cursor-pointer hover:text-black hover:border-black"
                    >Register</span>
                </nav>
            }
        </div>
    );
}

export default Nav;