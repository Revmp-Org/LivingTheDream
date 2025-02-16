import Carousel from "@/components/molecules/carousel";
import SectionWrapper from "../../SectionWrapper";
import { PageComponent, ServicesProps } from "@/types";

const Services: React.FC<{ services: ServicesProps }> = ({ services }) => {
    return (
        <SectionWrapper className="bg-[#F3E5E5]"> {/* Adjust the bg color */}
            <div>
                <Carousel services={services} />
            </div>
        </SectionWrapper>
    );
};

export default Services;
