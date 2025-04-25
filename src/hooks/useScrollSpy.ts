import { useEffect, useState } from "react";

const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + offset;
      let currentId = "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentId = id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handler);
    handler(); // set on mount
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
