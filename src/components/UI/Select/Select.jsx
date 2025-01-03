import React from "react";

const Select = ({ options, defaultValue, onChange }) => {
  return (
    <div>
      <select name="Sort" defaultValue="" onChange={onChange}>
        <option disabled value="">
          {defaultValue}
        </option>
        {/*{options.map((option) => (*/}
        {/*  <option key={option.value} value={option.value}>*/}
        {/*    {option.name}*/}
        {/*  </option>*/}
        {/*))}*/}
      </select>
    </div>
  );
};

export default Select;
