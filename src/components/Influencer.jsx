import {useState} from "react";

function Influencer() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        city: "",
        state: "",
        country: "",
        isPrivacyPolicyAccepted: true,
        // Add new fields for platform and region
        platform: "",
        platformOptions: ["Select Platform", "Facebook",
            "YouTube",
            "WhatsApp",
            "Instagram",
            "TikTok",
            "WeChat",
            "QQ",
            "Telegram",
            "Snapchat",
            "Twitter",
            "Pinterest",
            "Reddit",
            "LinkedIn",
            "Nextdoor",
            "Discord",],
        region: "",
        regionOptions: ["Select Region", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"],
        category: "",
        categoryOptions: ["Select Category", "Art & Entertainment",
            "Auto",
            "Business",
            "Education",
            "DIY",
            "Family",
            "Fashion",
            "Fitness",
            "Food & Drink",
            "Gadgets & Tech",
            "Gaming",
            "Health & Beauty",
            "Home & Garden",
            "Jewelry & Accessories",
            "Lifestyle",
            "Music",
            "Pets & Animals",
            "Photography",
            "Politics",
            "Sport",
            "Travel",
            "TV, Film & Radio",
            "Charity & Social Causes",
            "Mature"],
        audienceAge: {
            under13: false,
            "14-17": false,
            "18-21": false,
            "22-27": false,
            "28-35": false,
            "36-45": false,
            "46-55": false,
            "56-65": false,
            "65+": false,
        },
        monetizationOptions: {
            "sponsored-blog-posts": false,
            "sponsored-social-media-posts": false,
            "cost-per-action-ads": false,
            "cost-per-click-ads": false,
            "affiliate-programs": false,
            "not-currently-monetizing": false,
        },
    });

    const handleChange = (event) => {
        // const {name, value, type} = event.target;
        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: type === "checkbox" ? value : value.trim(),
        //
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
            <div className="md:w-full md:justify-between md:flex md:gap-3 md:flex-row xs:flex-col xs:flex">

                <div className="form-group mb-4 w-full">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password(✶):</label>
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

            <div className="form-group mb-4 mt-4">
                <label htmlFor="platform" className="block text-gray-700 text-sm font-bold mb-2">Which Do You
                    Consider
                    Your Main Platform of Influence?(✶)</label>
                <select
                    name="platform"
                    id="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    {formData.platformOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group mb-4 mt-4">
                <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">Which Do You Consider
                    Your Main Region(s) of Influence?(✶)</label>
                <select
                    name="region"
                    id="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    {formData.regionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group mb-4 mt-4">
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Select Your Main
                    Content Category(✶):</label>
                <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    {formData.categoryOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
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
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full">
                Submit
            </button>
        </form>
    );
}

export default Influencer;
