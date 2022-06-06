import React from 'react';

import { Container } from './styles';

interface IInput {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate?: boolean;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  type = 'text',
  required,
  onChange,
  validate,
}) => {
  return (
    <Container
      placeholder={placeholder}
      type={type}
      required={required}
      onChange={onChange}
      validate={validate}
    />
  );
};
