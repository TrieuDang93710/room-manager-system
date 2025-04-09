
import SystemLayout from './system/layout';
import SystemPage from './system/page';

export default function Home() {
  return (
    <main className='w-full font-[family-name:var(--font-geist-sans)] bg-[#fff] dark:bg-slate-900'>
      <SystemLayout>
        <SystemPage />
      </SystemLayout>
    </main>
  );
}
