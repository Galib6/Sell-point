import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <progress className="progress w-56 "></progress>
                </div>
            </div>
        </div>
    );
};

export default Loading;