import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Use navigator.onLine for initial state

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    // Add event listeners
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
