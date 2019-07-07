import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Models
import { ButtonTheme } from 'model';
import { IButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button: React.FC<IButtonProps> = ({
  to,
  theme = ButtonTheme.primary,
  className,
  type = 'button',
  size,
  children,
  disabled,
  onClick
}: IButtonProps): JSX.Element => {
  const buttonClassNames: string = classNames('btn', `btn-${theme}`, styles.button, styles[theme], className, {
    [`btn-${size}`]: !!size
  });

  if (to) {
    return (
      <Link to={to} className={buttonClassNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={!disabled ? onClick : undefined} disabled={disabled} className={buttonClassNames}>
      {children}
    </button>
  );
};
