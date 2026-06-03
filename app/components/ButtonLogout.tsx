import { LogOut } from 'lucide-react';

interface ButtonLogoutProps {
  onClick: () => void;
  className?: string;
}

export default function ButtonLogout({ onClick, className = '' }: ButtonLogoutProps) {
  return (
    <button
      onClick={onClick}
      title="Sair da exposição"
      className={`absolute -top-6 right-0 md:-top-10 md:right-0 p-2.5 text-stone-500 hover:text-red-500 hover:bg-red-50 active:scale-95 border border-stone-200/60 rounded-full cursor-pointer transition-all duration-200 bg-white shadow-sm z-30 ${className}`}
    >
      <LogOut className="w-4 h-4" />
    </button>
  );
}
