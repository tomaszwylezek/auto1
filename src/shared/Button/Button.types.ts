import { ReactNode } from 'react';
import { ButtonTheme, Size } from 'model';

export interface IButtonOwnProps {
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  theme?: ButtonTheme;
  className?: string;
  size?: Size;
  disabled?: boolean;
  onClick?: () => any;
  children?: ReactNode;
}

export interface IButtonProps extends IButtonOwnProps {}
