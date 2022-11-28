import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black-600 sm:text-4xl md:mx-auto">
                                Our Famous Blogs
                            </h2>
                        </div>
                        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques: Difference between SQL and NoSQL</h6>
                                <p className="mb-3 text-m text-black-600">
                                    Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                </p>

                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques: What is JWT, and how does it work?
                                </h6>
                                <p className="mb-3 text-m text-black-600">
                                    Ans:JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                                </p>

                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques:What is the difference between javascript and NodeJS?
                                </h6>
                                <p className="mb-3 text-m text-black-600">

                                    Ans: 1. NodeJS :
                                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                                    2. JavaScript :
                                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                                </p>
                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">
                                    Ques:How does NodeJS handle multiple requests at the same time?


                                </h6>
                                <p className="mb-3 text-sm text-black-600">
                                    Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;