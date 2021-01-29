// Used to do something with a component when it scrolls into view
import { useInView } from "react-intersection-observer";

// Used to trigger an animation, rather than as soon as component mounts
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();

  // Fire when element is %50 in view
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
