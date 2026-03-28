import { useState } from "react";
import "./App.css";

import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import Orders from "./Components/orders";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTab = () => {
    if (activeTab === "profile") return <Profile />;
    if (activeTab === "settings") return <Settings />;
    if (activeTab === "orders") return <Orders />;
  };

  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>

        <button
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>

        <button
          className={activeTab === "orders" ? "active" : ""}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
      </div>

      {/* Content */}
      <div className="content">{renderTab()}</div>
    </div>
  );
}
export default App;
