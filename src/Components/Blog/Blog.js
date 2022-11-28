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

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques: What are the different ways to manage a state in a React application</h6>
                                <p className="mb-3 text-m text-black-600">
                                    Ans: There are four main types of state you need to properly manage in your React apps: <br />

                                    Local state
                                    Global state
                                    Server state
                                    URL state
                                    Let's cover each of these in detail: <br />

                                    Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. <br />

                                    Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />

                                    Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />

                                    URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. <br />
                                </p>

                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques: How does prototypical inheritance work?
                                </h6>
                                <p className="mb-3 text-m text-black-600">
                                    Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using
                                </p>

                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">Ques:What is a unit test? Why should we write unit tests?
                                </h6>
                                <p className="mb-3 text-m text-black-600">

                                    Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                </p>
                            </div>
                            <div className="max-w-md sm:mx-auto sm:text-center">

                                <h6 className="mb-3 text-xl text-black-600 font-bold leading-5">
                                    Ques:How does NodeJS handle multiple requests at the same time?


                                </h6>
                                <p className="mb-3 text-sm text-black-600">
                                    Ans: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
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