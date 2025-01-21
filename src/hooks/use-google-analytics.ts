

export const useGoogleAnalytics = () => {
    const trackClick = (eventLabel: string, eventCategory: string = 'Navbar Interaction', eventAction: string = 'link_click', eventValue: string = '') => {
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
            window.gtag('event', eventAction, {
                event_category: eventCategory,
                event_label: eventLabel,
                event_value: eventValue,
            });
        }
    };

    return {
        trackClick,
    };
};

export default useGoogleAnalytics;