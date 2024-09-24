import { useEffect, useState } from "react";
import CalendlyWidget from "../components/CalendlyWidget";

const BookDemo = () => {
const [calendarlyUrl, setCalendarlyUrl] = useState("")
  useEffect(() => {
    const data = localStorage.getItem("calendarlyLink");
    setCalendarlyUrl(data);
  },[])
  return (
    <div className="min-h-screen grid place-items-center">
      <CalendlyWidget dataUrl={calendarlyUrl} />
    </div>
  );
};

export default BookDemo;
