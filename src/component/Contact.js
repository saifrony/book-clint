import React from 'react';

const Contact = () => {
    return (
        <div className='mt-10 flex justify-center align-center'>
            <div className=" w-96 bg-green-300  rounded">
        <div className="card-body">
            <h2 className="text-center text-4xl">Contact us</h2>
            <h2 className=" text-xl">Send Massage</h2>
            <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-xl">Full Name</span>
        </label>
        <input type="text" placeholder="John Abraham" className="input input-bordered w-full max-w-xs " />
        
        <label className="label">
            <span className="label-text text-xl">Email</span>
        </label>
        <input type="email" placeholder="john@gmail.com" className="input input-bordered w-full max-w-xs" />
        </div>
        <label className="label">
            <span className="label-text text-xl">Type Your Massage</span>
        </label>
        <textarea className="textarea textarea-accent" placeholder="Anything about our book world"></textarea>
            <div className="card-actions justify-center">
            <button className="btn ">Send</button>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Contact;