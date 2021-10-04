import React from "react";

export const Sort = ({ defaultValue, options, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
