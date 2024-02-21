import React, { useRef, useEffect, useState } from 'react';

function OutsideClickDetector() {
  const ref = useRef(null);
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideClicked(true);
      } else {
        setIsOutsideClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

}