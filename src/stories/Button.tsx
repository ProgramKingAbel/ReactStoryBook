type ButtonProps = {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button = ({label, primary=false, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{
      backgroundColor: primary ? "blue" : "gray",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",

    }}>{label}</button>
  )
}

export default Button