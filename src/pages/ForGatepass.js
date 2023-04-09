import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../actions/AuthActions';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleResetPassword = () => {
        dispatch(resetPassword(email))
            .then(() => {
                setIsEmailSent(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const isButtonDisabled = !email;

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Forgot Password
                            </h1>
                            {isEmailSent ? (
                                <p className="text-lg text-center text-primary-600 dark:text-primary-500">
                                    An email has been sent to your email address with instructions on how to reset your password.
                                </p>
                            ) : (
                                <div>
                                    <p className="text-lg text-center text-gray-900 dark:text-white">
                                        Enter your email address and we'll send you instructions on how to reset your password.
                                    </p>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={handleEmailChange} required />
                                        </div>
                                        <button type="submit" className="w-full text-[#000000] bg-primary-600 font-medium rounded-lg text-xl px-5 py-2.5 text-center border border-primary-600" onClick={handleResetPassword} disabled={isButtonDisabled}>Reset Password</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;
