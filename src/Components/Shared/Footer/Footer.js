import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h2 className='text-xl font-bold'> <img src="1.png" alt="" className='h-10 w-10' /><Link to="/">Selling Point</Link></h2>
                    <p className='Text-center'> <small>Copyright reserved @2022 | Selling Point</small></p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Services</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">E-Commerce</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>

            </footer>

        </div>
    );
};

export default Footer;