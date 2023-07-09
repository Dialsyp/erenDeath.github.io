import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Pages/Accueil/App";
import Error from "./Pages/Error";
import URN from "./Pages/URN";
import { gsap } from "gsap";

import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import "./Utils/Styles/Mouse.css";

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={`circle ${size}`} ref={el}></div>;
});

function Mouse() {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY - 35));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <React.Fragment>
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="sm" ref={addCircleRef} delay={0} />
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Mouse />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="URN" element={<URN />} />
        <Route path="EPSI" />
        <Route path="UMMTO" />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
