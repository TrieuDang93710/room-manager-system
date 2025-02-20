interface ButtonCommonProps {
  onClick: () => void;
  icon: React.ReactNode;
  title?: string
}

const ButtonCommon = ({ onClick, icon, title }: ButtonCommonProps) => {
  return (
    <button
      onClick={onClick}
      className='text-slate-50 bg-green-500 dark:bg-green-500 font-bold text-[13px] dark:text-slate-100 dark:border-green-700 dark:border-[1px] rounded-sm px-4 py-2 hover:border hover:border-green-700 hover:bg-transparent hover:text-slate-900 dark:hover:bg-transparent'
    >
      {icon} {title}
    </button>
  );
};

export default ButtonCommon;
