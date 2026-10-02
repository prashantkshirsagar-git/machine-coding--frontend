import React, { useEffect, useState } from "react";
import "./style.css";
const TrafficLight = ({ data }) => {
  const dataToShow = getSortedDisplayOrder(data);
  const dataInOrder = getSortedLightOrder(data);

  const [lightsInDisplayOrder, setLightsInDisplayOrder] = useState(dataToShow);

  const [lightInOrder, setLightInOrder] = useState(data);

  const [activeLight, setActiveLight] = useState(dataInOrder[0]);

  function getSortedDisplayOrder(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.displayOrder - b.displayOrder;
    });
  }
  function getSortedLightOrder(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.order - b.order;
    });
  }

  useEffect(()=> {
    setTimeout(()=>{
   const currentLightIndex = lightInOrder.findIndex((l) => l.color === activeLight.color);
   const nextLightIndex = currentLightIndex + 1;

   const nexLight = lightInOrder[nextLightIndex] ?? lightInOrder[0];
   setActiveLight(nexLight)
    }, activeLight.time)
  },[activeLight])

  return (
    <div className="traffic-light">
      {lightsInDisplayOrder.map((light) => {
        return (
          <Light
            key={light.color}
            color={light.color}
            activeColor={activeLight.color}
          />
        );
      })}
    </div>
  );
};
function Light({ color, activeColor }) {
    const opacity = color === activeColor ? 1: 0.5;
  return (
    <div
      style={{ backgroundColor: color , opacity }}
      className="light"
    />
  );
}

export default TrafficLight;