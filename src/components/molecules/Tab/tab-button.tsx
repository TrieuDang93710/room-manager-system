import { Button } from '@/components/ui/button';
interface TabButtonProps {
  label?: string;
  isActive?: boolean;
  onClick: () => void;
}
const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size='sm'
      variant='outline'
      className={`border-[2px] py-[12px] ${isActive ? 'border-green-500' : 'border-transparent'}`}
    >
      {label}
    </Button>
  );
};

export default TabButton;
