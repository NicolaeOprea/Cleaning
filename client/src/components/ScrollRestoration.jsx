import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (scrollPositions[path] !== undefined) {
      window.scrollTo(0, scrollPositions[path]);
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      scrollPositions[path] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      scrollPositions[path] = window.scrollY;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return null;
}