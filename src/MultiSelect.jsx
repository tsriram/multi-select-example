import React from "react";

export default function MultiSelect({
  selectedOptions,
  options,
  id,
  onChange
}) {
  const optionsSelectedInOtherDropdowns = [];
  // get all selected dropdown values from all dropdown elements except this one
  Object.keys(selectedOptions).forEach(multiSelectId => {
    if (id !== multiSelectId) {
      optionsSelectedInOtherDropdowns.push(...selectedOptions[multiSelectId]);
    }
  });

  return (
    <select
      onChange={e => onChange(id, e.target.options)}
      id={id}
      multiple
      size={10}
      style={{ width: 100, marginRight: 20 }}
    >
      {options.map(option => {
        const disabled = optionsSelectedInOtherDropdowns.includes(option);
        return (
          <option key={option} value={option} disabled={disabled}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
