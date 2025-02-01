import React from "react";

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <form>
                    <input type="text" placeholder="Full Name" className="border p-2 w-full mb-3"/>
                    <input type="email" placeholder="Email" className="border p-2 w-full mb-3"/>
                    <input type="password" placeholder="Password" className="border p-2 w-full mb-3"/>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
