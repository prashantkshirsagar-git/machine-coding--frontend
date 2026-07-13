import React from "react";

const Interests = ({ data, setData,errors }) => {
  const { Interests } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      Interests: e.target.checked
        ? [...prevState.Interests, e.target.name]
        : prevState.Interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={Interests.includes("coding")}
            onChange={handleDataChange}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={Interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={Interests.includes("javascript")}
            onChange={handleDataChange}
          />
          JavaScript
        </label>
      </div>
         {errors.interests&& <span className='error'>{errors.interests}</span>}
    </div>
  );
};

export default Interests;