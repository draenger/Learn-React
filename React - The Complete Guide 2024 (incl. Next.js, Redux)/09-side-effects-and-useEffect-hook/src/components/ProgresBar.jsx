import { useEffect, useState } from "react";

export default function ProgresBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timer} value={remainingTime} />;
}
