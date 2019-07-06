import React from 'react';

// Components
import { Label } from '../Label/Label';

// Models
import { FieldProps } from 'formik';
import { ICheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<ICheckboxProps & FieldProps> = ({ field, form, label, ...props }): JSX.Element => {
  // { name, value, onChange, onBlur }
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        {...field}
        {...props}
        checked={field.value}
        id={field.name}
        className={'custom-control-input'}
      />
      {!!label && (
        <Label id={field.name} className="custom-control-label">
          {label}
        </Label>
      )}
    </div>
  );
};
