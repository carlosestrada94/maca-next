import { gsap } from "gsap";

export const onLoadAnim = (elementRef) => {
  gsap.fromTo(elementRef, { opacity: 0 }, { opacity: 1 });
};
