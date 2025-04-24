/* eslint-disable @typescript-eslint/no-explicit-any */
interface CheckboxCardProps {
  title?: string;
  array?: any;
  checkedValue?: string[];
  checkedLabel?: string;
  setCheckedValue?: (checkedLabel: string, value: string[]) => void;
}

const CheckboxCard = ({ title, array, setCheckedValue, checkedLabel, checkedValue }: CheckboxCardProps) => {
  const n = array?.length;
  // const render = n! > 5 ? 4 : n;
  return (
    <div className='w-full px-2 flex flex-col justify-start items-start gap-2'>
      <p className='text-[14px] text-slate-800 dark:text-white font-bold'>{title}</p>
      <ul className='w-full py-1 list-none'>
        {array!.map((item: any, index: any) => (
          <li key={index} className='w-full flex flex-row items-center justify-start py-1 gap-2'>
            <input
              type='checkbox'
              checked={checkedValue?.includes(item.value)}
              value={item.value}
              onChange={(e) =>
                e.target.checked
                  ? setCheckedValue!(checkedLabel!, [...checkedValue!, e.target.value])
                  : setCheckedValue!(
                      checkedLabel!,
                      checkedValue!.filter((v: string) => v !== e.target.value)
                    )
              }
              className='size-4 text-green-500'
            />
            <p className='text-[13px] font-normal text-black dark:text-slate-200 dark:hover:text-white select-none'>
              {item.label}
            </p>
          </li>
        ))}
        {!(n! < 4) && (
          <li className='w-full flex flex-row items-center justify-start px-3 mt-2'>
            <p className='text-[13px] font-normal text-black dark:text-slate-200 dark:hover:text-white select-none'>
              Xem them
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CheckboxCard;
