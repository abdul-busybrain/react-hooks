import { useEffect, useState } from "react";
import WeekPicker from "./WeekPicker";

export default function BookingsPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 600) document.title = "Small";
    else if (windowWidth < 900) document.title = "Medium";
    else document.title = "Large";
  }, [windowWidth]);

  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()} />
    </main>
  );
}
