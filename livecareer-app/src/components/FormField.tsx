import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Input, Label, Checkbox as StyledCheckbox, CheckboxLabel as StyledCheckboxLabel } from '../styles/styles';

type FormFieldProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autoComplete?: string;
  minLength?: number;
  checkboxLabel?: React.ReactNode;
};

const FormFieldContainer = styled.div<{ isCheckbox?: boolean }>`
  ${({ isCheckbox }) => isCheckbox && 'display: flex; align-items: flex-start;'}
`;

const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

const RequiredIndicator = styled.span`
  color: #ef4444;
  margin-left: 0.25rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
  autoComplete,
  minLength,
  checkboxLabel,
}) => {
  const isCheckbox = type === 'checkbox';
  
  return (
    <FormFieldContainer isCheckbox={isCheckbox}>
      {!isCheckbox ? (
        <FieldContainer>
          <Label htmlFor={id}>
            {label}
            {required && <RequiredIndicator>*</RequiredIndicator>}
          </Label>
          <Input
            id={id}
            name={name}
            type={type}
            value={value as string}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            minLength={minLength}
            aria-label={label}
            className={className}
          />
        </FieldContainer>
      ) : (
        <CheckboxContainer>
          <StyledCheckbox
            id={id}
            name={name}
            type="checkbox"
            checked={value as boolean}
            onChange={onChange}
            required={required}
            aria-label={label}
          />
          <StyledCheckboxLabel htmlFor={id}>
            <span>{label} </span>
            {checkboxLabel && (
              <span>
                {checkboxLabel}
              </span>
            )}
          </StyledCheckboxLabel>
        </CheckboxContainer>
      )}
    </FormFieldContainer>
  );
};
