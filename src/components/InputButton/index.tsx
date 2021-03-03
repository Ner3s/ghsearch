import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  InputHTMLAttributes,
} from 'react';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholderColor?: string;
  width: number;
}

const InputButton: React.FC<InputProps> = ({
  name,
  placeholderColor,
  type = 'text',
  width,
  children,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      hidden={type === 'hidden'}
      isErrored={!!error}
      isFocused={isFocused}
      placeholderColor={placeholderColor}
      width={width}
    >
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
      <input
        {...{ name, type, defaultValue }}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      {children}
    </Container>
  );
};

export default InputButton;
