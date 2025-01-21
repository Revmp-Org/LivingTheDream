import Carousel from "@/components/molecules/carousel";
import SectionWrapper from "../../SectionWrapper";
import { ComponentConfig,ServiceCardSettings } from "@/types";
import { buildTailwindClass } from "@/utils";

const Services: React.FC<ComponentConfig<ServiceCardSettings>> = (services) => {
    const styles = services.config?.styles;

    const defaultStyles = {
        wrapper: {
            background: "bg-gray-50"
        }
    }
    return (
        <SectionWrapper className={buildTailwindClass(styles?.wrapper, defaultStyles.wrapper)}>
            <div>
                <Carousel {...services} />
            </div>
        </SectionWrapper>
    );
};

export default Services;
