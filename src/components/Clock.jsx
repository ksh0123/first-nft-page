import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const getFormattedTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = "AM";
    let emoji = "☀️";

    if (+hours >= 12 && +hours < 24) {
      amPm = "PM";
      hours = hours %= 12;
      emoji = "🌙";
    }

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${emoji} ${hours}:${minutes}:${seconds} ${amPm}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="flex font-digi text-4xl">{currentTime}</div>;
};

export default Clock;
