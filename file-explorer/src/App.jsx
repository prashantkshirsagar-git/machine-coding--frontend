import React, { useState } from "react";

import json from "./data.json";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.id]: !prev[node.id],
                }))
              }
            >
              {isExpanded?.[node.id] ? "- " : "+ "}
            </span>
          )}
          <span>{node.name}</span>
          {node?.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifCXrWUs6u9bei23xNFEhWnUQm_uk0ISHGl5lLPbyCw&s=10"
                alt="add"
                className="icon"
              />
            </span>
          )}
          <span onClick={() => deleteNodeFromList(node.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6543/6543488.png"
              alt="delete"
              className="icon"
            />
          </span>
          {isExpanded?.[node.id] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");
    if (!name) return;

    const updateTree = (list) =>
      list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: crypto.randomUUID(),
                name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const filterTree = (list) =>
      list
        .filter((node) => node.id !== itemId)
        .map((node) =>
          node.children
            ? { ...node, children: filterTree(node.children) }
            : node
        );

    setData((prev) => filterTree(prev));
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
};

export default App;