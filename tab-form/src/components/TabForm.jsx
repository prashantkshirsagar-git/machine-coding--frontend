import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Setting from "./Setting";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Prashant",
    age: "18",
    email: "prashant@gmail.com",
    Interests: ["coding", "music", "javascript"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.Interests.length < 1) {
          err.Interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.Interests ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleprevClick = () => {
    setErrors({});
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    if (tabs[activeTab].validate()) {
      console.log(data);
    }
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => tabs[activeTab].validate()&&setActiveTab(index)}
            className="heading"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handleprevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;