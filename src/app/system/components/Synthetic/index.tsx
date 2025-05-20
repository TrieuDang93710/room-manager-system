interface SyntheticComponentProps {
  title: string;
  value: string;
}

const SyntheticComponent = ({ title, value }: SyntheticComponentProps) => {
  return (
    <div className='w-full h-[20vh] border-[1px] rounded-sm hover:translate-x-1 cursor-pointer px-4 py-2 border-blue-600 hover:border-blue-600 flex flex-col items-center justify-center gap-4'>
      <h3 className='text-2xl font-bold dark:text-blue-600 text-center'>{title}</h3>
      <p className='text-2xl font-medium dark:text-blue-600'>{value}</p>
    </div>
  );
};

export default SyntheticComponent;
