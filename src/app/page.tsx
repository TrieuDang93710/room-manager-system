import SystemLayout from './system/layout';
import SystemPage from './system/page';

export default function Home() {
  return (
    <main className='w-full font-[family-name:var(--font-geist-sans)]'>
      <SystemLayout>
        <SystemPage />
      </SystemLayout>
    </main>
  );
}
