import React from 'react';
import logo from './logo.png';

function Form() {
    return (
        <div className="form flex h-screen">
            <div className="mx-auto my-auto ">
                <div className="logo w-64 mx-auto mb-10">
                    <img src={logo} alt="Forcefield logo"></img>
                </div>

                <h1 className="tagline text-gray-400 text-center text-5xl">Forcefield is up to something</h1>
                <h3 className="text-gray-400 text-center text-3xl">Sign up below to find out</h3>


                <div className="form-content">
                    <form className="pt-6 pb-8 mb-4" action="" method="post">
                        <div className="md:w-2/3 mx-auto">
                            <label className="block text-white text-sm font-bold mb-2" for="email" >
                                Email Address *
                            </label>
                            <input className="appearance-none block rounded w-full py-2 px-4 text-gray-500 bg-gray-900 leading-tight focus:border-yellow-500" type="email" id="email" placeholder="joe@example.com"/>
                        </div>

                        <div className="md:w-2/3 mx-auto mt-2">
                            <button class="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                            </button>
                        </div> 
                    </form>
                </div>
                
            </div>
        </div>
    )
};

export default Form;

