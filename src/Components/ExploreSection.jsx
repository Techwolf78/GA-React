import React from 'react';

const ExploreSection = () => {
    // Array of unique card data
    const profileCards = [
        { id: 1, name: 'Alice Johnson', profession: 'Product Manager', message: 'I was able to switch my career from being an architect to a product designer.', logo: 'NewLogos/1.jpg', img: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Bob Smith', profession: 'Growth Hacker', message: 'Gryphon Academy helped me grow my startup exponentially.', logo: 'NewLogos/2.jpg', img: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Charlie Brown', profession: 'UX Designer', message: 'The design courses were top-notch and industry-relevant.', logo: 'NewLogos/3.jpg', img: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Diana Prince', profession: 'Data Scientist', message: 'I learned advanced data techniques that I use daily.', logo: 'NewLogos/4.jpg', img: 'https://via.placeholder.com/100' },
        { id: 5, name: 'Eve Adams', profession: 'Tech Lead', message: 'The tech courses were comprehensive and practical.', logo: 'NewLogos/5.jpg', img: 'https://via.placeholder.com/100' },
        { id: 6, name: 'Frank Wright', profession: 'Business Analyst', message: 'The business insights I gained are invaluable.', logo: 'NewLogos/6.jpg', img: 'https://via.placeholder.com/100' },
        { id: 7, name: 'Grace Hopper', profession: 'Software Engineer', message: 'The coding bootcamp was intense but rewarding.', logo: 'NewLogos/7.jpg', img: 'https://via.placeholder.com/100' },
        { id: 8, name: 'Hank Pym', profession: 'Project Manager', message: 'I improved my project management skills significantly.', logo: 'NewLogos/8.jpg', img: 'https://via.placeholder.com/100' },
        { id: 9, name: 'Ivy Lee', profession: 'Marketing Specialist', message: 'The marketing strategies I learned are cutting-edge.', logo: 'NewLogos/9.jpg', img: 'https://via.placeholder.com/100' },
        { id: 10, name: 'Jack Ryan', profession: 'Operations Manager', message: 'The operations management course was very detailed.', logo: 'NewLogos/10.jpg', img: 'https://via.placeholder.com/100' },
        { id: 11, name: 'Karen Hill', profession: 'HR Manager', message: 'The HR courses helped me streamline our processes.', logo: 'NewLogos/11.jpg', img: 'https://via.placeholder.com/100' },
        { id: 12, name: 'Leo King', profession: 'Financial Analyst', message: 'The financial analysis techniques were very useful.', logo: 'NewLogos/12.jpg', img: 'https://via.placeholder.com/100' },
        { id: 13, name: 'Mona Lisa', profession: 'Creative Director', message: 'The creative courses sparked new ideas for me.', logo: 'NewLogos/13.jpg', img: 'https://via.placeholder.com/100' },
        { id: 14, name: 'Nina Simone', profession: 'Content Strategist', message: 'The content strategy course was very insightful.', logo: 'NewLogos/14.jpg', img: 'https://via.placeholder.com/100' },
        { id: 15, name: 'Oscar Wilde', profession: 'Copywriter', message: 'The copywriting tips were practical and effective.', logo: 'NewLogos/15.jpg', img: 'https://via.placeholder.com/100' },
        { id: 16, name: 'Paul Allen', profession: 'Investor', message: 'The investment strategies I learned are top-notch.', logo: 'NewLogos/16.jpg', img: 'https://via.placeholder.com/100' },
    ];

    return (
        <div>
            {/* Inline CSS */}
            <style>
                {`
                .card__profile {
                    width: 100px;
                    height: 100px;
                    background-color: #d6bcf5; /* purple-100 */
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    border: 4px solid #e9d8fd; /* Slightly lighter purple */
                    transition: transform 0.4s, opacity 0.4s;
                    box-sizing: border-box;
                }

                .card__profile img {
                    width: 95px;
                }

                /* tooltip card css starts */
                .card__tooltip {
                    position: absolute;
                    transition: opacity 0.4s, bottom 0.4s, top 0.4s;
                    pointer-events: none;
                    opacity: 0;
                    background-color: #ffffff; /* white */
                    color: #4a4a4a; /* Dark gray for text */
                    border-radius: 1rem;
                    padding: 1rem;
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
                    width: 250px; /* Default width */
                    z-index: 10; /* Default z-index */
                    box-sizing: border-box;
                }

                .card__tooltip-down {
                    top: 100%; /* Tooltip opens downward */
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 20; /* Increased z-index for downward tooltips */
                }

                .card__tooltip-up {
                    bottom: 100%; /* Tooltip opens upward */
                    left: 50%;
                    transform: translateX(-50%);
                }

                /* Show tooltip card with animation on hover */
                .card__article:hover .card__tooltip {
                    opacity: 1;
                    pointer-events: auto;
                }

                /* Scale profile image */
                .card__article:hover .card__profile {
                    transform: scale(0.9);
                    opacity: 0.8;
                }

                /* Grid layout for profile cards */
                .profile-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive columns */
                    gap: 1rem; /* Space between cards */
                    margin-top: 1rem;
                    box-sizing: border-box;
                }

                /* Adjust tooltip width for smaller screens */
                @media (max-width: 500px) {
                    .card__tooltip {
                        width: 200px; /* Smaller width for screens below 500px */
                        padding: 0.5rem; /* Reduce padding */
                    }
                }

                @media (max-width: 700px) {
                    .card__tooltip {
                        width: 225px; /* Smaller width for screens below 700px */
                        padding: 0.5rem; /* Reduce padding */
                    }
                }

                /* Section background and text colors */
                .bg-purple {
                    background: linear-gradient(to bottom, #ffffff, #d6bcf5); /* Gradient from white to light purple */
                }
                .text-dark-gray {
                    color: #4a4a4a; /* Dark gray */
                }
                .button-bg {
                    background-color: #b583f1; /* Medium purple */
                }
                .button-bg-hover {
                    background-color: #9b4f9c; /* Darker purple for hover */
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    box-sizing: border-box;
                }

                .text-section {
                    padding: 1rem;
                    box-sizing: border-box;
                }

                .profile-cards {
                    padding: 1rem;
                    box-sizing: border-box;
                }
                `}
            </style>

            {/* Become the Top Section */}
            <section className="bg-purple text-dark-gray py-12 px-5">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 text-section">
                            <h1 className="text-4xl mb-5">Become the Top 1%</h1>
                            <p className="text-lg leading-6 mb-5">Whether it is Product, Growth, Design, Management, Business, Tech & Data, Gryphon Academy is the place to learn from top experts in the field.</p>
                            <button className="button-bg text-white py-3 px-6 text-lg rounded-md transition-colors duration-300 hover:button-bg-hover">
                                Explore Programs
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 profile-cards">
                            {profileCards.map((card, index) => {
                                // Determine row position
                                const rowIndex = Math.floor(index / 4);
                                const isFirstRow = rowIndex === 0;
                                const isLastRow = rowIndex === Math.floor((profileCards.length - 1) / 4);
                                const tooltipClass = isFirstRow
                                    ? 'card__tooltip-down'
                                    : (isLastRow ? 'card__tooltip-up' : 'card__tooltip-up');

                                return (
                                    <div key={card.id} className="card__article relative flex justify-center mb-6">
                                        <div className="card__profile">
                                            <img src={card.img} alt="Profile" />
                                        </div>
                                        <div className={`card__tooltip ${tooltipClass}`}>
                                            <header className="card__header font-semibold mb-2">
                                                {card.message}
                                            </header>
                                            <h2 className="card__name text-xl font-bold">{card.name}</h2>
                                            <h3 className="card__profession text-lg">{card.profession}</h3>
                                            <div className="mt-2">
                                                <img src={card.logo} alt="Company Logo" style={{ width: '50px' }} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ExploreSection;