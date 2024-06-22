import Navbar from "./Navbar.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Link} from "react-router-dom";

const Home = () => {
    const blogs = [
        {
            id: 1,
            title: "Blog Title 1",
            image: "/step1.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "/blog1"
        },
        {
            id: 2,
            title: "Blog Title 2",
            image: "/step2.jpg",
            body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "/blog2"
        },
        {
            id: 3,
            title: "Blog Title 3",
            image: "/step3.jpg",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            link: "/blog3"
        }  ,{
            id: 1,
            title: "Blog Title 1",
            image: "/step1.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "/blog1"
        },
        {
            id: 2,
            title: "Blog Title 2",
            image: "/step2.jpg",
            body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "/blog2"
        },
        {
            id: 3,
            title: "Blog Title 3",
            image: "/step3.jpg",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            link: "/blog3"
        } , {
            id: 1,
            title: "Blog Title 1",
            image: "/step1.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "/blog1"
        },
        {
            id: 2,
            title: "Blog Title 2",
            image: "/step2.jpg",
            body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "/blog2"
        },
        {
            id: 3,
            title: "Blog Title 3",
            image: "/step3.jpg",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            link: "/blog3"
        } , {
            id: 1,
            title: "Blog Title 1",
            image: "/step1.png",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "/blog1"
        },
        {
            id: 2,
            title: "Blog Title 2",
            image: "/step2.jpg",
            body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "/blog2"
        },
        {
            id: 3,
            title: "Blog Title 3",
            image: "/step3.jpg",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            link: "/blog3"
        }
    ];

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }
    return(
        <>
            <div className="w-screen text-white flex flex-col justify-center items-center py-20 md:py-40 hero">
                <p className="text-3xl md:text-6xl font-bold text-center">Influencer Marketing</p>
                <p className="text-xl md:text-3xl mt-5 md:mt-10 text-center">Made easy</p>
                <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-5 md:gap-10">
                    <Link to="/register/influencer"
                       className="font-bold text-white text-lg md:text-2xl bg-green-700 px-5 py-2 rounded-full hover:bg-green-800 text-center">I
                        am an Influencer</Link>
                    <Link to="/register/influencer"
                       className="font-bold text-white text-lg md:text-2xl bg-blue-700 px-5 py-2 rounded-full hover:bg-blue-800 text-center">I
                        am a brand</Link>
                </div>
            </div>
            <div className="w-screen px-10 md:px-0">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col mt-10 md:mt-20 w-full md:w-2/3">
                        <div className="step-1 flex flex-col md:flex-row px-0 md:px-20 gap-10">
                            <img src="/step1.png" alt="Step 1" className="w-full md:w-2/3"/>
                            <div className="flex justify-center flex-col">
                                <p className="text-xl md:text-3xl text-blue-700 font-bold">
                                    1 - CREATE A CAMPAIGN
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    It&apos;s free, no subscription fee
                                </p>
                                <p className="mt-3">
                                    You only pay when you confirm post proposals
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    It&apos;s fast
                                </p>
                                <p className="mt-3">
                                    Setting up a campaign takes about 10 minutes. <br/> Manage hundreds of influencers
                                    in the time it took to manage one
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    It&apos;s convenient
                                </p>
                                <p className="mt-3">
                                    Scale your influencer marketing and manage everything under one roof
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    It&apos;s tailor-made
                                </p>
                                <p className="mt-3">
                                    You can define every aspect of your campaign
                                </p>
                            </div>
                        </div>
                        <div className="step-2 flex flex-col md:flex-row px-0 md:px-20 gap-10 mt-10 md:mt-20">
                            <div className="flex justify-center flex-col">
                                <p className="text-xl md:text-3xl text-blue-700 font-bold">
                                    2 - RECEIVE PROPOSALS FROM INFLUENCERS
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    Discover the best matching influencers
                                </p>
                                <p className="mt-3 md:mt-10 font-bold">
                                    Receive creative content from influencers
                                </p>
                                <p className="mt-3 md:mt-10 font-bold">
                                    Preview, accept, negotiate or deny proposals
                                </p>
                            </div>
                            <img src="/step2.jpg" alt="Step 2" className="w-full md:w-2/3"/>
                        </div>
                        <div className="step-3 flex flex-col md:flex-row px-0 md:px-20 gap-10 mt-10 md:mt-20">
                            <img src="/step3.jpg" alt="Step 3" className="w-full md:w-2/3"/>
                            <div className="flex justify-center flex-col">
                                <p className="text-xl md:text-3xl text-blue-700 font-bold">
                                    3 - GO LIVE
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    Your campaign gets published by the approved influencers
                                </p>
                                <p className="mt-3 md:mt-10 font-bold">
                                    Track the campaign performance in real time
                                </p>
                                <p className="mt-3 md:mt-10 font-bold">
                                    Review the influencers
                                </p>
                                <p className="mt-3 md:mt-10 font-bold">
                                    You can also decide to only buy the content
                                </p>
                            </div>
                        </div>
                        <div className="step-4 flex flex-col md:flex-row px-0 md:px-20 gap-10 mt-10 md:mt-20">
                            <div className="flex justify-center flex-col">
                                <p className="text-xl md:text-3xl text-blue-700 font-bold">
                                    4 - REPURPOSE PURCHASED INFLUENCER-CONTENT
                                </p>
                                <p className="mt-5 md:mt-20 font-bold">
                                    Use beautiful content created by influencers to feed your Instagram page
                                </p>
                            </div>
                            <img src="/step4.jpg" alt="Step 4" className="w-full md:w-2/3"/>
                        </div>
                        <div className="w-full flex flex-row px-0 md:px-20 justify-center mt-10 md:mt-20">
                            <a href="/"
                               className="flex justify-center text-xl rounded-full bg-black hover:bg-gray-800 px-4 py-2 w-full md:w-1/2 text-white">Create
                                A Campaign</a>
                        </div>
                        <div
                            className="bg-gray-100 md:me-20 md:ms-20 flex items-center flex-col mt-10 md:mt-20 px-5 md:px-20 py-10 md:py-20">
                            <p className="text-3xl md:text-5xl">KEY NUMBERS</p>
                            <p className="text-xl md:text-2xl text-gray-500 mt-10 md:mt-20">Influencer marketing is what
                                we do and we do it well!</p>
                            <div className="w-full max-w-4xl mx-auto mt-10">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    pagination={{clickable: true}}
                                    autoplay={{delay: 2000, disableOnInteraction: false}}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="grid grid-cols-2 gap-4 items-center">
                                            <img src="/img1.jpg" alt="Main Slide" className="rounded-lg h-full"/>
                                            <div className="grid grid-cols-2 gap-2">
                                                <img src="/img2.jpg" alt="Slide 2-1" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-2" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-3" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-4" className="rounded-lg"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="grid grid-cols-2 gap-4 items-center">
                                            <img src="/img1.jpg" alt="Main Slide" className="rounded-lg h-full"/>
                                            <div className="grid grid-cols-2 gap-2">
                                                <img src="/img2.jpg" alt="Slide 2-1" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-2" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-3" className="rounded-lg"/>
                                                <img src="/img2.jpg" alt="Slide 2-4" className="rounded-lg"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <p className="text-2xl md:text-4xl mt-10 md:mt-20">CASE STUDIES</p>
                            <p className="text-xl md:text-3xl mt-10 md:mt-20 shadow-2xl rounded-full p-10 md:p-20 w-20 md:w-40 h-20 md:h-40 flex items-center justify-center">AZZARO</p>
                            <p className="text-gray-500 mt-10 md:mt-20 text-center text-lg md:text-xl tracking-widest leading-10">Clarins,
                                one of the largest beauty companies in
                                the world owns Azzaro, a well-known perfume brand. In order to get the word out about
                                the launch of its new chic and sporty fragrance Azzaro Wanted Tonic, a pool of
                                influencers with highly engaged audience was put together and managed with Ifluenz.</p>
                            <div className="text-center mt-4 text-gray-500 text-lg md:text-xl">
                                Influencers ... <a href="#" className="underline">[Read more]</a>
                            </div>
                            <div
                                className="grid mt-10 md:mt-20 grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 text-center text-gray-800">
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">9</p>
                                    <p className="text-gray-500">Creator posts</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">4</p>
                                    <p className="text-gray-500">Creator stories</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">1.06M</p>
                                    <p className="text-gray-500">Total audience</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">61,349</p>
                                    <p className="text-gray-500">Likes & Comments</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">5.7%</p>
                                    <p className="text-gray-500">Engagement</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-4xl font-bold">$0.37</p>
                                    <p className="text-gray-500">Cost per engagement</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-10 md:p-20 mt-10 md:mt-20">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-widest">WHO ARE OUR
                                    INFLUENCERS?</h2>
                                <p className="text-center mt-5 md:mt-10 text-gray-700 text-lg md:text-xl tracking-widest leading-10 ">
                                    Our thousands of influencers have a highly engaged audience. They have more than
                                    just large followings, they generate action, and are influential in a wide range of
                                    interests and demographics. Our influencers screening process ensures that your
                                    campaign
                                    reaches the right audience for best results.
                                </p>
                                <div className="text-center mt-10 md:mt-20">
                                    <p className="text-4xl md:text-7xl font-bold">20,000+</p>
                                    <p className="text-blue-500 mt-5 md:mt-10">Registered influencers worldwide and
                                        counting...</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-col p-10 md:p-20">
                            <p className="text-3xl md:text-5xl text-center">BRANDS WE WORK WITH</p>
                            <p className="text-gray-500 mt-10 md:mt-20 text-center text-lg md:text-xl tracking-widest leading-8 px-5 md:px-20">
                                Thousands of brands and agencies are already using Ifluenz. Do influencer marketing
                                right, join them!
                            </p>
                        </div>

                        <div className="w-full max-w-4xl mx-auto mt-10 md:mt-10 mb-10 md:mb-20">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="flex flex-row gap-10 md:gap-20">
                                        <img src="/logo1.jpg" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo2.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo3.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo4.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo5.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo6.jpg" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-row gap-10 md:gap-20">
                                        <img src="/logo1.jpg" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo2.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo3.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo4.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo5.png" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                        <img src="/logo6.jpg" alt="Main Slide" className="rounded-lg w-10 md:w-20"/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex md:me-20 md:ms-20 items-center flex-col p-10 md:p-20 bg-gray-100">
                            <p className="text-3xl md:text-5xl">FEATURED ON</p>
                            <div className="w-full max-w-4xl mx-auto mt-10 md:mt-20 mb-10 md:mb-20">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                                    <img src="/logo1.jpg" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                    <img src="/logo2.png" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                    <img src="/logo3.png" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                    <img src="/logo4.png" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                    <img src="/logo5.png" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                    <img src="/logo6.jpg" alt="Main Slide" className="rounded-lg w-20 md:w-32 mx-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto mt-10 md:mt-20 p-6 md:p-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Blogs</h2>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3
                                    }
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {blogs.map((blog) => (
                                    <SwiperSlide key={blog.id}>
                                        <div className="blog-item bg-white rounded-lg shadow-md overflow-hidden m-5">
                                            <img src={blog.image} alt={blog.title}
                                                 className="w-full h-48 md:h-64 object-cover object-center"/>
                                            <div className="p-4">
                                                <h3 className="text-xl md:text-2xl font-semibold mb-2">{blog.title}</h3>
                                                <p className="text-gray-600 mb-4">{truncateText(blog.body, 100)}</p>
                                                <a href={blog.link} className="text-blue-500 hover:underline">Read
                                                    more</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="w-full flex flex-row px-0 md:px-20 justify-center mt-10 md:mt-20 mb-20">
                            <a href="/"
                               className="flex justify-center text-xl rounded-full bg-black hover:bg-gray-800 px-4 py-2 w-full md:w-1/2 text-white">Create
                                A Campaign</a>
                        </div>
                    </div>
                    <img src="/home.png" className="w-0 md:w-1/3" alt="Home Image"/>
                </div>
            </div>
            <footer className="bg-gray-800 text-white py-6">
                <div className="flex flex-col items-center justify-center">
                    <div
                        className="flex flex-col justify-center items-center py-5 gap-5 md:flex-row">
                        <a href="#" className="hover:text-gray-400 underline">About</a>
                        <a href="#" className="hover:text-gray-400 underline">Contact</a>
                        <a href="#" className="hover:text-gray-400 underline">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col items-center md:flex-row mt-6 md:mt-10">
                        <p className="text-lg mt-4 md:mt-0">© 2014 - 2024 &nbsp; Ifluenz.</p>
                        <p className="text-lg mt-2 md:mt-0 md:ml-4">All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;