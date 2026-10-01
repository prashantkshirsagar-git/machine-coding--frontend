import React from "react";

function button({ label, onClick = () => {}, ...rest }) {
  return <button onClick={onClick} {...rest}>{label}</button>;
}

export default button;
