import { HandHeart } from 'lucide-react';

type Screen = 'landing' | 'find-tutor' | 'pay-forward';

interface HeaderProps {
  screen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Header({ screen, onNavigate }: HeaderProps) {
  const navItems: { label: string; value: Screen }[] = [
    { label: 'Home', value: 'landing' },
    { label: 'Find Help', value: 'find-tutor' },
    { label: 'Pay It Forward', value: 'pay-forward' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 group transition-transform hover:scale-[1.02]"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-sm">
            <HandHeart className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-extrabold text-gray-800 tracking-tight">
            Peer<span className="text-primary-500">Up</span>
          </span>
        </button>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                screen === item.value
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
