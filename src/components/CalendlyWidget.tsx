import React, { useEffect, useState } from "react";

const CalendlyWidget = ({ dataUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component is rendered only on the client side
    setIsClient(true);

    // Create and append the script for the Calendly widget
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  return (
    <>
      {isClient ? (
        <div
          className="calendly-inline-widget w-full"
          // data-url="https://calendly.com/admission-shivshaktiinstitute/ssti-java-demo-class"
          data-url={`${dataUrl}`}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default CalendlyWidget;
