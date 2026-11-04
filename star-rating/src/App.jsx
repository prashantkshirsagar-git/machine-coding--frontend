import { useState } from "react";
import StarRating from "./star-rating";

const App = () => {
  const [rating, setRating] = useState(0);

  function handleChange(value) {
    console.log(value);
    setRating(value);
  }

  return (
    <div>
      <StarRating value={rating} onChange={handleChange} />
    </div>
  );
};

export default App;