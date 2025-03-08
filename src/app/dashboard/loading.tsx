import './style.css'

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='lds-ripple w-full flex flex-col items-end gap-6 snap-y mt-20 md:px-3'>
      <div></div>
      <div></div>
    </div>
  );
}
