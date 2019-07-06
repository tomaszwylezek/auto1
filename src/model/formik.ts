import React from 'react';

export interface FormikField {
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: any;
  name: string;
}
