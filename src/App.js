import React from "react";
import "./styles.css";
import MultiSelect from "./MultiSelect";

// global set of options for all multi select
const options = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
  "option7",
  "option8",
  "option9",
  "option10"
];

export default function App() {
  // initialize the state with empty array for each multi select
  const initialState = {
    multiselect1: [],
    multiselect2: [],
    multiselect3: [],
    multiselect4: [],
    multiselect5: []
  };
  const [selectedOptions, setSelectedOptions] = React.useState(initialState);

  const onChange = (id, options) => {
    // update state with selected options using the given dropdown id
    const userSelectedOptions = Array.from(options)
      .filter(option => option.selected)
      .map(selectedOption => selectedOption.value);
    setSelectedOptions({
      ...selectedOptions,
      [id]: userSelectedOptions
    });
  };

  return (
    <div>
      <h1>Multiselect Example</h1>
      <MultiSelect
        id="multiselect1"
        onChange={onChange}
        selectedOptions={selectedOptions}
        options={options}
      />
      <MultiSelect
        id="multiselect2"
        onChange={onChange}
        selectedOptions={selectedOptions}
        options={options}
      />
      <MultiSelect
        id="multiselect3"
        onChange={onChange}
        selectedOptions={selectedOptions}
        options={options}
      />
      <MultiSelect
        id="multiselect4"
        onChange={onChange}
        selectedOptions={selectedOptions}
        options={options}
      />
      <MultiSelect
        id="multiselect5"
        onChange={onChange}
        selectedOptions={selectedOptions}
        options={options}
      />
    </div>
  );
}
