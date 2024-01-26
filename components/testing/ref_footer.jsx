import React, { useRef, useEffect, useState } from "react";

function MyComponent() {
  const componentRef = useRef(null);
  const [componentHeight, setComponentHeight] = useState(null);

  useEffect(() => {
    function getHeight() {
      const height = componentRef.current.offsetHeight;
      setComponentHeight(height);
    }

    getHeight();

    function handleResize() {
      getHeight();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={componentRef}>
      {/* Your component content */}
      <p>Component height: {componentHeight}</p>
    </div>
  );
}
