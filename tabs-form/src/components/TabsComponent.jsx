import ProfileComponent from "./ProfileComponent";
import InterestsComponent from "./InterestsComponent";
import SettingsComponent from "./SettingsComponent";
import { useState } from "react";

const TabsComponent = () => {
  const [activetab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Profile", component: ProfileComponent },
    { name: "Interests", component: InterestsComponent },
    { name: "Settings", component: SettingsComponent },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: null,
    interests: ['coding', 'dancing', 'playing'],
    theme: 'dark'
  })

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };

  const ActiveTabComponent = tabs[activetab].component;

  return (
    <>
      <div className="tabs">
        {tabs.map((tab, index) => {
          return (
            <div
              onClick={() => tabClickHandler(index)}
              className={`tab-heading ${activetab == index ? "active" : ""}`}
              key={index}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <main className="tab-body">
        <ActiveTabComponent formData={formData} setFormData={setFormData} />
      </main>
    </>
  );
};

export default TabsComponent;
