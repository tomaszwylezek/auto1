import React from 'react';

// Models
import { ILabelProps } from './Label.types';

export const Label: React.FC<ILabelProps> = ({ children, id, className }): JSX.Element => (
  <label htmlFor={id} className={className}>
    {children}
  </label>
);
