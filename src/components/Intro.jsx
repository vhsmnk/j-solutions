import { useEffect, useState } from "react";
import JaguarLogo from "./JaguarLogo";
import "../styles/intro.css";

export default function Intro({ onFinish }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => {
      setExiting(true);
    }, 3800);

    const finish = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`intro-screen ${exiting ? "intro-exit" : ""}`}>
      <div className="intro-logo">
        <JaguarLogo />
      </div>
    </div>
  );
}