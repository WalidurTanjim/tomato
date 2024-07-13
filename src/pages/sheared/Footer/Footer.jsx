import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full text-gray-400 bg-[#111827]">
            {/*      <!-- Main footer --> */}
            <div className="border-t border-slate-200 pt-16 pb-12 text-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div
                            className="col-span-4 md:col-span-8 lg:col-span-4"
                            aria-labelledby="footer-header"
                        >
                            <Link
                                id="WindUI-5-logo"
                                aria-label="WindUI logo"
                                aria-current="page"
                                className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-white focus:outline-none"
                            >
                                <svg
                                    width="300"
                                    height="300"
                                    viewBox="0 0 300 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 bg-emerald-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                                        fill="#f1f5f9"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                                        fill="rgba(255, 255, 255, .2)"
                                    />
                                </svg>
                                Brand
                            </Link>
                            <p className='text-gray-300'>
                                Expertly made, responsive, accessible components in React and
                                HTML ready to be used on your website or app. Just copy and
                                paste them on your Tailwind CSS project.
                            </p>
                        </div>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-product-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-product-5-logo"
                            >
                                Product
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Customers
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Why us?
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-docs-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-docs-5-logo"
                            >
                                Docs & Help
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Documentation
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Training
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        System status
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        FAQ's
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-about-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-about-5-logo"
                            >
                                About us
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Leadership
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Events
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-get-in-touch-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-get-in-touch-5-logo"
                            >
                                Get in touch
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Support
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Partners
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link className="transition-colors duration-300 hover:text-gray-500 active:text-gray-400"
                                    >
                                        Join research
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <hr className='container mx-auto my-5' />

                <div className='container mx-auto px-6 py-3 flex justify-between items-center flex-col md:flex-row'>
                    <div>
                        <h3 className='text-white font-medium'>Subscribe to our newsletter</h3>
                        <p className='text-gray-400 mt-2'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    </div>

                    <div className='flex items-center mt-4 md:mt-0'>
                        <input type="email" name="email" id="email" placeholder='Enter your email' autoComplete='off' required className='me-2 p-2 rounded-md outline-none border border-gray-500 focus:border-gray-300 bg-[#1D2432]' />
                        <button className='border rounded-md py-2 px-4 text-white font-medium'>Subscribe</button>
                    </div>
                </div>

                <hr className='container mx-auto my-5' />

                <div className='container mx-auto px-6 flex justify-between items-center flex-col md:flex-row'>
                    <p className='text-sm'>&copy; 2020 Your Company, Inc. All rights reserved.</p>

                    <ul className='flex items-center mt-2 md:mt-0'>
                        <Link><li className='p-2 mx-1 hover:text-gray-500 active:text-gray-400'><ion-icon name="logo-facebook"></ion-icon></li></Link>
                        <Link><li className='p-2 mx-1 hover:text-gray-500 active:text-gray-400'><ion-icon name="logo-instagram"></ion-icon></li></Link>
                        <Link><li className='p-2 mx-1 hover:text-gray-500 active:text-gray-400'><ion-icon name="logo-twitter"></ion-icon></li></Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;