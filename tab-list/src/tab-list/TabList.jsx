import { useState } from "react";
import Button from "./button/button";
import "./style.css";

const TabList = ({ tabs, defaultSection= 3, onChange = ()=>{} }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSection);

  function handleTabChange(index) {
    return () => {
      setSelectedIndex(index);
      onChange(index)
    };
  }

  const SelectedComponent = tabs[selectedIndex].Component;

  return (
    <div role="tabList">
      <div>
        {tabs.map((tab, index) => {
          return (
            <Button
              onClick={handleTabChange(index)}
              label={tab.label}
              key={tab.id}
              role="tab"
              aria-selected ={index === selectedIndex}
              data-selected ={index === selectedIndex}
            />
          );
        })}
      </div>
      <div role="tabpanel">
      <SelectedComponent />
      </div>
    </div>
  );
};

export default TabList;