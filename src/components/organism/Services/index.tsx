import Carousel from "@/components/molecules/carousel";
import SectionWrapper from "../../SectionWrapper";
import { PageComponent } from "@/types";
import { getStyles } from "@/utils";

const Services: React.FC<PageComponent> = (services) => {
    const { settings } = services;
    const styles = settings?.styles;

    return (
        <SectionWrapper className={getStyles("wrapper", styles)}>
            <div>
                <Carousel {...services} />
            </div>
        </SectionWrapper>
    );
};

export default Services;
