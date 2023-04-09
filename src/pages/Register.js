import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        gender: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    console.log('formData', formData)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{8, 10}$/;
        return re.test(String(phone));
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const validateConfirmPassword = (confirmPassword) => {
        return confirmPassword === formData.password;
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 my-5">
                <div className="flex flex-col items-center justify-center mx-auto  lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="register">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register
                                </h1>
                                <form onSubmit={handleSubmit}>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        First Name:
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            minLength={1}
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Last Name:
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            minLength={1}
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Address:
                                        <textarea
                                            name="address"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Country:
                                        <select
                                            name="country"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select a country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="MX">Mexico</option>
                                        </select>
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Gender:
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleInputChange}
                                                    required
                                                />{' '}
                                                Male
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleInputChange}
                                                    required
                                                />{' '}
                                                Female
                                            </label>
                                        </div>
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Phone Number:
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.phone}
                                            onChange={handleInputChange
                                            }
                                            required
                                            pattern="\d{8,10}"
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password:
                                        <input
                                            type="password"
                                            name="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                            minLength={8}
                                        />
                                    </label>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirm Password:
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                            minLength={8}
                                            pattern={formData.password}
                                        />
                                    </label>
                                    <button type="submit" className="w-full text-[#000000] bg-primary-600 font-medium rounded-lg text-xl px-5 py-2.5 text-center border border-primary-600">Register</button>
                                </form>
                                <p>
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default Register;

