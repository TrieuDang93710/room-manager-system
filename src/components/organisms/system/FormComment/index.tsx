interface FormCommentProps {
  error?: boolean | false;
  type?: string | 'text';
}
const FormComment = ({ error, type }: FormCommentProps) => {
  return (
    <form className='w-1/3' action='' method='post'>
      <label
        className={
          false
            ? 'font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]'
            : "after:relative after:content-['*'] after:top-[-30px] after:left-[50px] after:text-red-500 font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]"
        }
      >
        <input
          className={`w-full border text-[13px] truncate text-[#1c1c1c] dark:placeholder:text-slate-200 dark:text-slate-100 rounded-sm py-2 px-3 placeholder:text-[#1c1c1c] outline-[#3a3a3a] focus:outline-blue-600 dark:focus:outline-blue-600 ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-white'
          }`}
          type={type}
          name=''
          id=''
          placeholder='Name'
          required={true}
        />
      </label>
      <label
        className={
          false
            ? 'font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]'
            : "after:relative after:content-['*'] after:top-[-30px] after:left-[50px] after:text-red-500 font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]"
        }
      >
        <input
          className={`w-full border text-[13px] truncate text-[#1c1c1c] dark:placeholder:text-slate-200 dark:text-slate-100 rounded-sm py-2 px-3 placeholder:text-[#1c1c1c] outline-[#3a3a3a] focus:outline-blue-600 dark:focus:outline-blue-600 ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-white'
          }`}
          type={type}
          name=''
          id=''
          placeholder='Email'
          required={true}
        />
      </label>
      <label
        className={
          false
            ? 'font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]'
            : "after:relative after:content-['*'] after:top-[-30px] after:left-[50px] after:text-red-500 font-bold text-[14px] text-[#252525] dark:text-[#e6e6e6]"
        }
      >
        <input
          className={`w-full border text-[13px] truncate text-[#1c1c1c] dark:placeholder:text-slate-200 dark:text-slate-100 rounded-sm py-2 px-3 placeholder:text-[#1c1c1c] outline-[#3a3a3a] focus:outline-blue-600 dark:focus:outline-blue-600 ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-white'
          }`}
          type={type}
          name=''
          id=''
          placeholder='Comment'
          required={true}
        />
      </label>
      <button
        className='w-full py-2 px-3 bg-green-500 text-slate-100 shadow-md shadow-slate-200 dark:shadow-slate-700 rounded-sm active:shadow-slate-300 dark:active:shadow-slate-300'
        type='submit'
      >
        Post
      </button>
    </form>
  );
};

export default FormComment;
