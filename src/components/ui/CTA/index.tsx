import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import CTAImage from '../../../../public/cta-image.jpg';
import Image from "next/image";

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image
                            src={CTAImage}
                            className="rounded-lg md:max-w-lg"
                            alt="Empowering Schools with Data-Driven Education"
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Join the RevampEdu Community
                        </h2>
                        <p className="mt-3 text-gray-600">
                            At RevampEdu, we are on a mission to revolutionize education by leveraging the power of data to empower schools, teachers, and students.
                            Your insights and feedback are invaluable in shaping the future of educational technology. Join our community to collaborate and innovate together.
                        </p>
                        <p className="mt-3 text-gray-600">
                            <span className="font-bold">Take a moment to join our community and share your voice.</span> Together, we can create solutions that make a real impact in education.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <NavLink
                                href="/get-started"
                                className="inline-block font-medium text-sm text-white bg-primary hover:bg-primary-light active:bg-primary-dark px-6 py-2 rounded-lg"
                                onClick={() => {
                                    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
                                        window.gtag('event', 'button_click', {
                                            event_category: 'CTA Interaction',
                                            event_label: 'Join the Community',
                                        });
                                    }
                                }}
                            >
                                Join the Community
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA;
