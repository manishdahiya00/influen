import {useState} from "react";

function Brand(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        city: "",
        state: "",
        country: "",
        isPrivacyPolicyAccepted: false,
        appLink: "",

    });

    const handleChange = (event) => {
        // const {name, value, type} = event.target;
        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: type === "checkbox" ? value : value.trim(), // Trim whitespace for efficiency
        // }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation here (optional)
        // if () {
        //     // Send login data to your backend API for authentication
        //     console.log('Login data:', formData);
        //
        //     // Handle successful or failed login on the backend response
        // } else {
        //     // Display validation errors to the user
        // }
    };
    return (
        <form onSubmit={handleSubmit} className="md:w-1/2 mt-5 mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div className="md:w-full md:justify-between md:flex md:gap-3 md:flex-row xs:flex-col xs:flex">
                <div className="form-group mb-4 w-full">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First
                        Name(✶):</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="form-group mb-4 w-full">
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name(✶):</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email(✶):</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company
                    Name(✶):</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="md:w-full md:justify-between md:flex md:gap-3 md:flex-row xs:flex-col xs:flex">

                <div className="form-group mb-4 w-full">
                    <label htmlFor="password"
                           className="block text-gray-700 text-sm font-bold mb-2">Password(✶):</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="form-group mb-4 w-full">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm
                        Password(✶):</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone
                        Number(✶):</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City(✶):</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State(✶):</label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country(✶):</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="appLink" className="block text-gray-700 text-sm font-bold mb-2 mt-5 ">App Link(✶):</label>
                <input
                    type="url"
                    name="appLink"
                    id="appLink"
                    value={formData.appLink}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="form-group mb-4">  {/* Remove grid class for checkbox */}
                <input
                    type="checkbox"
                    name="isPrivacyPolicyAccepted"
                    id="isPrivacyPolicyAccepted"
                    checked={formData.isPrivacyPolicyAccepted}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label htmlFor="isPrivacyPolicyAccepted" className="text-gray-700 text-sm font-bold">I agree to the
                    Privacy Policy</label>
            </div>
            <button type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full">
                Submit
            </button>
        </form>
    );
}

export default Brand