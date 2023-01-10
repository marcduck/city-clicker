import { gsap } from "gsap"
import { useEffect } from "react";


export function bounceInAndOut(condition, ref) {
    useEffect(() => {
        condition
            ? gsap.fromTo(ref.current, {y: 200, autoAlpha: 0}, { duration: 1, ease: "bounce.out", y: 0, autoAlpha: 1 })
            : gsap.to(ref.current, {y: 200, autoAlpha: 0 })          
    }, [condition]);
}