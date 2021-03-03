import React from "react";
import Select, { components } from "react-select";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelPositioner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-size: 0.9rem;
  text-align: left;
  width: 40%;
  padding-left: 14px;
`;

const ControlContainer = styled.div`
  display: flex;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.1rem;
  width: 100%;
`;

// eslint-disable-next-line react/prop-types
const Control = ({ children, ...props }) => {
  // eslint-disable-next-line react/prop-types
  const { label } = props.selectProps;

  return (
    <components.Control {...props}>
      <LabelPositioner>
        <Label>{label}</Label>
        <ControlContainer>{children}</ControlContainer>
      </LabelPositioner>
    </components.Control>
  );
};

const colourStyles = {
  container: (provided) => ({
    ...provided,
    float: "left",
    marginRight: "1rem",
    marginBottom: "1rem",
    width: "100%",
    maxWidth: 300
  }),
  control: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    backgroundColor: "white",
    borderRadius: 20
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),
  input: (provided) => ({ ...provided }),
  placeholder: (provided, state) => ({ ...provided, width: state.selectProps.width }),
  singleValue: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    color: "#45486d",
    fontSize: "1rem",
    textAlign: "right",
    maxWidth: `calc(${provided.maxWidth} - 4px)`
  })
};

export const CustomSelect = ({ options, width = 280, label, selectedOption, ...restProps }) => {
  return (
    <Select
      {...restProps}
      defaultValue={options[options.length - 1]}
      value={selectedOption}
      components={{ Control, IndicatorSeparator: () => null }}
      label={label}
      width={width}
      options={options}
      styles={colourStyles}
    />
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })),
  label: PropTypes.string,
  width: PropTypes.number,
  selectedOption: PropTypes.any
};

export default CustomSelect;
