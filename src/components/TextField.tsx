import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: FieldError;
  params?: any;
}

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 13.5px 13px;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  border-radius: 8px;
  font-family: 'Open Sans', san-serif;
  font-size: 14px;
  font-weight: 400;
  color: #353238;
  outline: none;

  ::placeholder {
    color: #cdcad0;
  }

  :focus {
    border-color: #0086a8;
  }

  :focus ~ label {
    color: #0086a8;
  }

  :-internal-autofill-selected {
    background: #fff !important;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -8px;
  left: 10px;
  padding: 0 5px;
  font-family: 'Open Sans', san-serif;
  font-size: 12px;
  letter-spacing: 0.25px;
  color: #828282;
  background: #ffffff;
`;

const Error = styled.span`
  font-family: 'Open Sans', san-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #eb5e55;
`;

const TextField = ({ placeholder, label, required, name, error, params }: TextFieldProps) => {
  return (
    <InputBox>
      <Input
        {...params}
        style={error ? { borderColor: '#eb5e55' } : undefined}
        placeholder={placeholder}
        required={required}
      />
      <Label style={error ? { color: '#eb5e55' } : undefined}>
        {label} {required && '*'}
      </Label>
      {error && <Error>Это поле обязательное</Error>}
    </InputBox>
  );
};

export default TextField;
