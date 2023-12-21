import React from "react";
import './Nav.css';

const Nav = () => {
    return (
        <div className="flex justify-between border-b-2 border-slate-400">
            <div>
                <p className="logo animate-bounce px-10 py-4 text-2xl font-bold uppercase tracking-tighter drop-shadow-sm cursor-default hover:text-slate-400">smart brain</p>
            </div>
            <nav className="px-10 py-5">
                <p className="text-md font-medium uppercase cursor-pointer hover:text-slate-400">sign out</p>
            </nav>
        </div>
    );
}

export default Nav;