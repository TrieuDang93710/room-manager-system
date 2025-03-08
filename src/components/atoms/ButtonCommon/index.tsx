interface ButtonCommonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  title?: string;
  size?: string;
}

const ButtonCommon = ({ onClick, icon, title }: ButtonCommonProps) => {
  return (
    <button type='submit' onClick={onClick} className={`button_style `}>
      {icon} {title}
    </button>
  );
};

export default ButtonCommon;
