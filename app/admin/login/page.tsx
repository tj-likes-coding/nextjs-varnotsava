"use client";

import { useState } from 'react';

export default function LoginButton() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = async () => {
        setIsClicked(true);

        // Trigger serverless function to handle server-side logic
        await fetch('/api/sendcred', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // You can pass any necessary data here
            body: JSON.stringify({}),
        });
    };

    return (
        <div className='p-5 lg:pb-20 pb-40 flex justify-center items-center'>
            <button onClick={handleClick} className="btn bg-pink-red text-slate-900 hover:text-white">
                {isClicked ? 'Credentials Sent' : 'Send Credentials'}
            </button>
        </div>
    );
}
