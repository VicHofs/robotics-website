import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";
import Home from "@pages/Home";
import Leadership from "@pages/Leadership";
import Header from "@components/Header";
import Footer from "@components/Footer";
import OurGroup from "@pages/OurGroup";
import Sponsors from "@pages/Sponsors";
import Lunabotics from "@pages/Projects/Lunabotics";
import RoboMaster from "@pages/Projects/RoboMaster";
import VEXU from "@pages/Projects/VEXU";
import Ri3D from "@pages/Projects/Ri3D";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const Layout = () => {
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    if (lenis) lenis.scrollTo(0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            }
          />
          <Route
            path="leadership"
            element={
              <AnimatedRoute>
                <Leadership />
              </AnimatedRoute>
            }
          />
          <Route
            path="our-group"
            element={
              <AnimatedRoute>
                <OurGroup />
              </AnimatedRoute>
            }
          />
          <Route
            path="sponsors"
            element={
              <AnimatedRoute>
                <Sponsors />
              </AnimatedRoute>
            }
          />
          <Route
            path="projects/lunabotics"
            element={
              <AnimatedRoute>
                <Lunabotics />
              </AnimatedRoute>
            }
          />
          <Route
            path="projects/robomaster"
            element={
              <AnimatedRoute>
                <RoboMaster />
              </AnimatedRoute>
            }
          />
          <Route
            path="projects/vexu"
            element={
              <AnimatedRoute>
                <VEXU />
              </AnimatedRoute>
            }
          />
          <Route
            path="projects/ri3d"
            element={
              <AnimatedRoute>
                <Ri3D />
              </AnimatedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
