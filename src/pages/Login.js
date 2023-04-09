import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/AuthActions';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        dispatch(loginUser(email, password))
            .then(() => {
                navigator('/dashboard')
                toast.success('Login successful!');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Login failed. Please check your credentials.');
            });
    };


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const isButtonDisabled = !(email && password);

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={handleEmailChange} required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className='flex'>
                                        <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} required name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        <button type="button" onClick={handleTogglePassword}>{showPassword ? "Hide" : "Show"}</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <p className="text-sm font-medium text-primary-600 dark:text-primary-500 text-[#000000]">Don't have an account? <span><Link to="/register">Register</Link></span></p>
                                    </div>
                                    <p className="text-sm font-medium text-primary-600 dark:text-primary-500"><Link to="/forgotPassword">Forgot password?</Link>.</p>
                                </div>
                                <button type="submit" className="w-full text-[#000000] bg-primary-600 font-medium rounded-lg text-xl px-5 py-2.5 text-center border border-primary-600" onClick={handleLogin} disabled={isButtonDisabled}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
