import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import image from "../../assets/Phones.png"
import "animate.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-full">
            <div className="w-full md:w-1/2 p-6 animate__animated animate__fadeInRight rounded-lg shadow-md mb-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <br />
                <br />
                <h2 className="text-white text-2xl mb-4">Login to Continue</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-12" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-18" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>
                    <div className="mt-4">
                        <button className="btn btn-block btn-sm mt-2" id="button" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
            <div className="hidden md:block md:w-1/2 auth__form-container_image animate__animated animate__bounce">
                <h2>Neuron Messenger</h2>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Login;

