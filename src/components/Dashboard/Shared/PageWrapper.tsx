
import React from 'react';
import Profile from './Profile';

export default function PageWrapper({
    title,
}: Readonly<{
    title?: string;
}>) {
    
    return (
        <header className=" w-full   ">
            <div className="flex items-center justify-between gap-2  w-full">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div>
                    <Profile/>
                </div>
            </div>
        </header>
    );
}
