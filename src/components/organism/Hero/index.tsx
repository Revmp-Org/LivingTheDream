import DesktopHero from '@/components/molecules/hero/desktop';
import MobileHero from '@/components/molecules/hero/mobile';
import { HeroSettings } from '@/types';
import { useEffect, useState } from 'react';
import { ComponentConfig } from '@/types';
const Hero: React.FC<ComponentConfig<HeroSettings>> = (hero) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile ? <MobileHero {...hero} /> : <DesktopHero {...hero} />;
};

export default Hero;