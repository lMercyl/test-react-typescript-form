import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClickButton?: () => void;
}

const FormButton = styled.button`
  width: 100%;
  padding: 18px 0;
  font-family: 'Open Sans', san-serif;
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  background: #0086a8;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    background: #007693;
  }

  :active {
    background: #00657e;
  }

  :disabled {
    color: #828282;
    background: #e3e3e3;
  }
`;

const Button = ({ children, disabled, onClickButton }: ButtonProps) => {
  return (
    <FormButton type="submit" onClick={onClickButton} disabled={disabled}>
      {children}
    </FormButton>
  );
};

export default Button;
