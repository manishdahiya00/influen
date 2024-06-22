import '../index.css';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="bg-white p-6 rounded-lg shadow-lg w-2/6">
                <p className="text-2xl font-semibold text-center text-black">Sign in to your account</p>
                <div className="relative my-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full p-4 pr-12 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                    />
                </div>
                <div className="relative my-4">
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full p-4 pr-12 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 mt-4 font-medium text-white uppercase bg-green-500 rounded-lg hover:bg-green-600"
                >
                    Sign in
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don&apos;t have account? <Link to="/register" className="underline">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
