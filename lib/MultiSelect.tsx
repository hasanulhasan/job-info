/* eslint-disable @typescript-eslint/no-unused-vars */
import Select from "react-dropdown-select";

const inputStyles = {
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid #e0e0e0",
  backgroundColor: "#ffffff",
  padding: "0.5rem 1.4rem",
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#6B7280",
  outline: "none",
};

interface Option {
  name: string;
  value: string;
}

export default function MultiSelect({
  initalValues = [],
  options = [] as Option[],
  onSetOptions = (values: Option[]) => {}, 
  placeholder = "Select",
}) {
  return (
    <>
      <Select
        multi
        values={initalValues}
        options={options}
        labelField="name"
        valueField="value"
        onChange={(values) => onSetOptions(values as Option[])}
        placeholder={placeholder}
        style={inputStyles}
      />
    </>
  );
}
