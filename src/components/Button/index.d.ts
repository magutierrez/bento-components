export interface ButtonProps {
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'large';
  tabIndex?: string;
  customHoverColor?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dangerPrimary' | 'dangerSecondary';
}

declare const Button: React.FunctionComponent<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export default Button;
