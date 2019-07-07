import React from 'react';
import { get } from 'lodash';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import { Label } from '../Label/Label';

// Models
import { IInputProps } from './Input.types';

export const Input: React.FC<IInputProps & FieldProps> = ({
  field,
  form: { touched, setFieldTouched },
  label,
  type = 'text',
  required = false,
  className,
  placeholder,
  ...props
}): JSX.Element => {
  const isTouched: boolean = !!get(touched, field.name);
  const inputClassName: string = classNames('form-control', className);

  const input: JSX.Element = (
    <>
      <input
        {...field}
        {...props}
        placeholder={placeholder ? placeholder : undefined}
        className={inputClassName}
        type={type}
        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
          if (!isTouched) {
            setFieldTouched(field.name, true, true);
          }
          field.onChange(e);
        }}
        id={field.name}
      />
    </>
  );

  return (
    <div className="form-group">
      {!!label && (
        <Label id={field.name}>
          {label}
          {required && <span className="text-danger"> *</span>}
        </Label>
      )}
      {input}
    </div>
  );
};
