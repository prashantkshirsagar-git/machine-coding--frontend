
import { useState } from "react";
import Star from "../Star";
import "./style.css";

const NUMBER_OF_STARS = 5;

function StarRating({ value = 0, onChange, numberOfStars = NUMBER_OF_STARS }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-rating">
      {[...new Array(numberOfStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
          >
            <Star filled={starValue <= (hovered || value)} />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;