import { createContext, useContext } from "react";
export const ZERO_SPOT = {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
};
export const SpotlightTourContext = createContext({
    changeSpot: () => undefined,
    goTo: () => undefined,
    next: () => undefined,
    previous: () => undefined,
    spot: ZERO_SPOT,
    start: () => undefined,
    steps: [],
    stop: () => undefined,
});
/**
 * React hook to access the {@link SpotlightTour} context.
 *
 * @returns the SpotlightTour context
 */
export function useSpotlightTour() {
    const { current, goTo, next, previous, start, stop, changeSpot, spot, steps, } = useContext(SpotlightTourContext);
    return {
        current,
        goTo,
        next,
        previous,
        start,
        stop,
        changeSpot,
        spot,
        steps,
    };
}
//# sourceMappingURL=SpotlightTour.context.js.map