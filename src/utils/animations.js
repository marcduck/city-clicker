import { gsap } from "gsap"
import { useEffect } from "react";


export function bounceInAndOut(condition, ref) {
    useEffect(() => {
        condition
            ? gsap.fromTo(ref.current, {y: 200, autoAlpha: 0}, { duration: 1, ease: "bounce.out", y: 0, autoAlpha: 1 })
            : gsap.to(ref.current, {y: 200, autoAlpha: 0 })          
    }, [condition]);
}

export function riseUp(condition, ref) {
    useEffect(() => {
        gsap.fromTo(ref.current, {y: 50, autoAlpha: 0}, { duration: 0.2, visibility: 'visible', y: 0, autoAlpha: 1 })
    }, [condition]);
}

export function drawText(condition, ref, text) {
    useEffect(() => {
        gsap.to(ref, {duration: 2, text: text, ease: "none"});
    }, [condition]);
}

