import Carousel from "@/components/molecules/carousel";
import SectionWrapper from "../../SectionWrapper";
import { PageComponent } from "@/types";

const Services: React.FC<PageComponent> = (services) => {
    return (
        <SectionWrapper className="bg-[#F3E5E5]"> {/* Adjust the bg color */}
            <div>
                <Carousel {...services} />
            </div>
        </SectionWrapper>
    );
};

export default Services;
