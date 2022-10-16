import React from 'react';
import { FieldError } from 'react-hook-form';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';

interface SelectFieldProps {
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: FieldError;
  params?: any;
}

const SelectContainer = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: '';
    top: 22px;
    right: 15px;
    width: 10px;
    height: 6px;
    background-image: url(${arrow});
    transform: rotate(180deg);
  }

  ::-ms-expand {
    display: none;
  }
`;

const Select = styled.select`
  position: relative;
  width: 100%;
  padding: 13.5px 13px;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  border-radius: 8px;
  font-family: 'Open Sans', san-serif;
  font-weight: 400;
  font-size: 14px;
  color: #353238;
  outline: none;
  appearance: none;

  :focus {
    border-color: #0086a8;
  }

  :focus ~ label {
    top: -8px;
    left: 10px;
    padding: 0 5px;
    color: #0086a8 !important;
    font-size: 12px;
    background: #ffffff;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  font-family: 'Open Sans', san-serif;
  font-weight: 400;
  font-size: 14px;
  color: #353238;
  transition: font-size 0.1s ease-in-out, top 0.1s ease-in-out;
`;

const Option = styled.option`
  border: 1px solid #000;
`;

const activeSelect = {
  top: '-8px',
  left: '10px',
  padding: '0 5px',
  color: '#828282',
  fontSize: '12px',
  background: '#ffffff',
};

const Error = styled.span`
  font-family: 'Open Sans', san-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #eb5e55;
`;

const data = [
  {
    id: 1,
    name: 'Москва',
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
  },
  {
    id: 3,
    name: 'Казань',
  },
];

const SelectField = ({ placeholder, required, name, error, params }: SelectFieldProps) => {
  const [value, setValue] = React.useState<string>('');

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <SelectContainer>
      <Select
        {...params}
        style={error ? { borderColor: '#eb5e55' } : undefined}
        onChange={onChangeSelect}
        value={value}
        required={required}>
        <Option></Option>
        {data.map((item) => (
          <Option value={item.name} key={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
      <Label
        style={
          error || value
            ? error
              ? { ...activeSelect, color: '#eb5e55' }
              : activeSelect
            : undefined
        }>
        {placeholder} {required && '*'}
      </Label>
      {error && <Error>Это поле обязательное</Error>}
    </SelectContainer>
  );
};

export default SelectField;
