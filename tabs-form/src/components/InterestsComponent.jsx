/* eslint-disable react/prop-types */
const InterestsComponent = ({ formData, setFormData }) => {
  const { interests } = formData;

  const handleInputChange = (e) => {
    const {name, checked} = e.target;

    setFormData({
        ...formData,
        interests: checked ? [...interests, name] : interests.filter((i) => i!== name)
    });

    console.log(interests);
    
  };

  return (
    <>
      <div className="input">
        <label htmlFor="coding">
          <input
            checked={interests.includes("coding")}
            onChange={handleInputChange}
            type="checkbox"
            name="coding"
          ></input>
          Coding
        </label>
      </div>

      <div className="input">
        <label htmlFor="dancing">
          <input
          onChange={handleInputChange}
            checked={interests.includes("dancing")}
            type="checkbox"
            name="dancing"
          ></input>
          Dancing
        </label>
      </div>

      <div className="input">
        <label htmlFor="playing">
          <input
          onChange={handleInputChange}
            checked={interests.includes("playing")}
            type="checkbox"
            name="playing"
          ></input>
          Playing
        </label>
      </div>
    </>
  );
};

export default InterestsComponent;
