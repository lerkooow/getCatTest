import { useEffect, useState, useCallback } from "react";

import { SettingPanel } from "./components /SettingPanel/SettingPanel";

const App = () => {
  const [enabled, setEnabled] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState("");

  const fetchCat = useCallback(async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      setCatUrl(data[0]?.url || "");
    } catch (error) {
      console.error("Failed", error);
    }
  }, []);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  useEffect(() => {
    if (!autoRefresh) return;

    const timer = setInterval(fetchCat, 5000);

    return () => clearInterval(timer);
  }, [autoRefresh, fetchCat]);

  const handleClick = () => {
    fetchCat();
  };

  return (
    <div>
      <SettingPanel
        enabled={enabled}
        catUrl={catUrl}
        handleClick={handleClick}
        toggleClickEnabled={() => setEnabled((prev) => !prev)}
        toggleClickAuto={() => setAutoRefresh((prev) => !prev)}
      />
    </div>
  );
};

export default App;
