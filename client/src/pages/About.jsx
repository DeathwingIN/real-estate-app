import React, { useState } from 'react';

// Testimonials data
const testimonialsData = [
    {
        id: 1,
        text: "Real Estate helped us find our dream home. Their service was exceptional, and they were with us every step of the way. Highly recommended!",
        author: "John Doe",
    },
    {
        id: 2,
        text: "Selling our home was a breeze with Real Estate. Their team was professional, knowledgeable, and truly cared about our needs.",
        author: "Jane Smith",
    },
];

// Our values data
const valuesData = [
    {
        id: 1,
        title: "Integrity",
        description: "We uphold the highest standards of integrity in all our actions.",
    },
    {
        id: 2,
        title: "Customer Commitment",
        description: "We develop relationships that make a positive difference in our customers' lives.",
    },
    {
        id: 3,
        title: "Quality",
        description: "We provide outstanding products and unsurpassed service that deliver premium value to our customers.",
    },
    {
        id: 4,
        title: "Teamwork",
        description: "We work together, across boundaries, to meet the needs of our customers and to help our company win.",
    },
];

export default function About() {
    // State for testimonial carousel
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Function to handle next testimonial
    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    // Function to handle previous testimonial
    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    return (
        <div className='py-20 px-4 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Real Estate</h1>

            {/* Company Overview */}
            <p className='mb-4 text-slate-700'>
                Real Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
            </p>

            {/* Mission Statement */}
            <h2 className='text-2xl font-semibold mb-2 text-slate-800'>Our Mission</h2>
            <p className='mb-4 text-slate-700'>
                Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
            </p>

            {/* Our Values */}
            <h2 className='text-2xl font-semibold mb-2 text-slate-800'>Our Values</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {valuesData.map((value) => (
                    <div key={value.id} className='bg-white shadow-md p-6 rounded-lg'>
                        <h3 className='text-lg font-semibold text-slate-800 mb-2'>{value.title}</h3>
                        <p className='text-slate-700'>{value.description}</p>
                    </div>
                ))}
            </div>

            {/* Our Team */}
            <h2 className='text-2xl font-semibold mb-2 text-slate-800'>Our Team</h2>
            <p className='mb-4 text-slate-700'>
                Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
            </p>

            {/* Testimonials */}
            <h2 className='text-2xl font-semibold mb-2 text-slate-800'>Testimonials</h2>
            <div className='relative bg-gray-100 p-6 rounded-lg mb-6'>
                <p className='text-lg text-slate-700 italic'>" {testimonialsData[activeTestimonial].text} "</p>
                <div className='absolute bottom-0 right-0'>
                    <button onClick={prevTestimonial} className='text-slate-500 hover:text-slate-800'>
                        &#10094;
                    </button>
                    <button onClick={nextTestimonial} className='text-slate-500 hover:text-slate-800 ml-2'>
                        &#10095;
                    </button>
                </div>
                <p className='absolute bottom-0 left-0 text-slate-700 font-semibold'>
                    - {testimonialsData[activeTestimonial].author}
                </p>
            </div>

            {/* Contact Information */}
            <h2 className='text-2xl font-semibold mb-2 text-slate-800'>Contact Us</h2>
            <p className='mb-4 text-slate-700'>
                Ready to start your real estate journey with us? Get in touch today:
            </p>
            <ul className='mb-4 text-slate-700'>
                <li>Phone: (123) 456-7890</li>
                <li>Email: contact@realestate.com</li>
                <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
        </div>
    );
}
