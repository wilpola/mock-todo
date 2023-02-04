// @author: wilpola
// @desc: This file contains the settings page

// imports

// Import styles
import "./settings.scss";

// Settings component
const Settings = (params) => {
  // Functions
  const handleReset = () => {
    const mockData = params.mockData;
    const lS = window.localStorage;

    lS.setItem("wilp_todo", JSON.stringify(mockData));
  };

  // All rendered content
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-area theme">
        <h4>Select a color theme</h4>
        <p>
          {" "}
          You may choose between light and dark themes, and the theme will
          change instantly when you select the other theme.
        </p>
        <button className="light" onClick={() => params.setTheme("light")}>
          Set theme light
        </button>
        <button className="dark" onClick={() => params.setTheme("dark")}>
          Set theme dark
        </button>
      </div>
      <div className="settings-area data">
        <h4>Reset todo data</h4>
        <p>
          {" "}
          By clicking the reset button, all your todos will be lost, and the
          application will be reset to the initial demo data.
        </p>
        <button onClick={handleReset}>Reset Data</button>
      </div>
    </div>
  );
};

// Export settings page
export default Settings;
