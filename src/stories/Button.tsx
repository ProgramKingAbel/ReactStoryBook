import React from "react";
import "./style.css";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
  loading?: boolean;
  size?: 'medium' | 'small' | 'large';
  color?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;

}

const Button = ({label, primary=false, onClick, loading=false, size='medium', color, icon, iconPosition, fullWidth, ariaLabel }: ButtonProps) => {
  const buttonClass = `
  button
  ${primary ? 'button--primary' : 'button--secondary'}
  ${size ? `button--${size}` : 'button--medium'}
  ${color ? 'button--custom-color' : ''}
  ${fullWidth ? 'button--fullWidth' : ''}
  ${loading ? 'button--loading' : ''}

  `
  return (
    <button className={buttonClass} onClick={onClick} aria-label={ariaLabel} 
    style={color ? {backgroundColor: color, color: "white"} : {}}>
      {loading && <span className="button__loading-spinner">Loading ...</span>}
      {icon && iconPosition === 'left'  && (
        <span className="button_icon">{icon}</span>
      )}
      <span className="button__label">{label}</span>

      {icon && iconPosition === 'right' && (
        <span className="button__icon">{icon}</span>
      )}
    </button>
  )
}

export default Button