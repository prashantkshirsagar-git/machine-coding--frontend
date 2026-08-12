import { useState } from "react";
import "./App.css";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        });
      };

      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const childStates = node.children.map((child) => verifyChecked(child));
        const allChildrenChecked = childStates.every(Boolean);

        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      CheckboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };
  console.log(checked);
  return (
    <div>
      {data.map((node) => {
        return (
          <div className="parent" key={node.id}>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.label}</span>
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
