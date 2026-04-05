import { DesktopTimeline } from './DesktopTimeline';
import { MobileTimeline } from './MobileTimeline';
import { useIsDesktop } from '../../../hooks/useMediaQuery';

export const TimelineExperience = () => {
    const isDesktop = useIsDesktop();

    return (
        <section id="experience" className="pt-12 pb-6 md:py-24 bg-bg px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                {isDesktop ? (
                    <DesktopTimeline />
                ) : (
                    <MobileTimeline />
                )}
            </div>
        </section>
    );
};
