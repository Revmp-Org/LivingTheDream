import NavLink from "../NavLink";

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Empowering Education with Data-Driven Solutions
                </h1>
                <p className="max-w-xl mx-auto">
                    RevampEdu is transforming education by equipping schools, teachers, and students with actionable insights to improve academic outcomes, enhance course quality, and maximize college acceptance opportunities.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-primary hover:bg-primary-light active:bg-primary-dark"
                        onClick={() => {
                            if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
                                gtag('event', 'button_click', {
                                    event_category: 'Hero Interaction',
                                    event_label: 'Get Started',
                                });
                            }
                        }}
                    >
                        Get Started
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                        onClick={() => {
                            if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
                                gtag('event', 'button_click', {
                                    event_category: 'Hero Interaction',
                                    event_label: 'Learn More',
                                });
                            }
                        }}
                    >
                        Learn More
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
