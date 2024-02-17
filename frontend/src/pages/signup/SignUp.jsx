import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import image from "../../assets/Phones.png";
import "animate.css";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    profilePic: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const compressedImageData = canvas.toDataURL("image/jpeg", 0.8);
        setInputs({ ...inputs, profilePic: compressedImageData });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="w-full h-full p-2 flex flex-col sm:flex-col-reverse">
	
      <div className="w-full sm:w-1/2 p-6 animate__animated animate__fadeInRight rounded-lg shadow-md mb-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
	  <br />
	  <br />
	  <br />
	    <h2 className="text-white text-2xl mb-4">Signup to Continue</h2>
		<br />
		<br />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePictureInput" className="browse-button">
              Choose Profile Picture*
            </label>
            <input
              id="profilePictureInput"
              className="choose"
              type="file"
              required
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-[#7de7eb] mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div className="mt-4">
            <button
              className="btn btn-block btn-sm border border-slate-700" id="button"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="sm:block w-full sm:w-1/2 auth__form-container_image animate__animated animate__bounce">
	  <br />
		<br />
        <h2>Neuron Messenger</h2>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default SignUp;
