import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="text-2xl p-5 flex justify-between items-center bg-gray-100 shadow-md">
            <div className="font-black">LibraryManagementSystem</div>
            <div className="flex gap-4">
                <Link to="/login">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
}
