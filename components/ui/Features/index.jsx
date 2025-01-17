import SectionWrapper from "../../SectionWrapper";
import { LiaObjectGroupSolid } from "react-icons/lia";
import { MdOutlineInsights, MdLockOutline, MdPerson } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
const Features = () => {
    const features = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                </svg>
            ),
            title: "Data-Driven Insights",
            desc: "Empower schools and educators with actionable analytics for attendance, grades, and performance metrics to foster student success."
        },
        {
            icon: (
                <MdLockOutline className="w-6 h-6" />
            ),
            title: "Advanced Security",
            desc: "Safeguard student and school data with industry-leading security practices, ensuring privacy and trust in every interaction."
        },
        {
            icon: (
                <LiaObjectGroupSolid className="w-6 h-6" />
            ),
            title: "Unified Course Data",
            desc: "Streamline data integration across leading LMS platforms like Canvas, Blackboard, and Google Classroom, ensuring seamless workflows."
        },
        {
            icon: (
                <MdPerson className="w-6 h-6" />
            ),
            title: "Personalized Learning",
            desc: "Provide students with tailored recommendations for courses, extracurricular activities, and career pathways to achieve their goals."
        },
        {
            icon: (
                <GiBrain className="w-6 h-6" />
            ),
            title: "AI-Powered Insights",
            desc: "Leverage advanced AI to predict student performance and recommend data-driven improvements for courses and teaching strategies."
        },
        {
            icon: (
                <MdOutlineInsights className="w-6 h-6" />
            ),
            title: "Comprehensive Dashboards",
            desc: "Track grades, attendance, and college readiness through intuitive dashboards for students, teachers, and administrators."
        }
    ];

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <li key={idx} className="space-y-3">
                            <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                            <p>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default Features;
