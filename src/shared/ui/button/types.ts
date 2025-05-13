export type ButtonProps = {
  className?: string,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
  icon?: React.ReactNode,
  iconPosition?: "left" | "right"
  type?: "button" | "submit"
  style?: React.CSSProperties
}