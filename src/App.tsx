import { useState } from 'react';
import Header from '@/components/Header';
import LandingScreen from '@/screens/LandingScreen';
import FindTutorScreen from '@/screens/FindTutorScreen';
import PayItForwardScreen from '@/screens/PayItForwardScreen';
import type { Tutor } from '@/types';

type Screen = 'landing' | 'find-tutor' | 'pay-forward';

function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [selectedSubject, setSelectedSubject] = useState<string>('math');

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setScreen('find-tutor');
  };

  const handleChat = (_tutor: Tutor) => {
    // In a real app, this would open a chat view.
    // For the mockup, FindTutorScreen shows a confirmation inline.
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header screen={screen} onNavigate={setScreen} />
      {screen === 'landing' && (
        <LandingScreen
          onFindHelp={() => setScreen('find-tutor')}
          onSelectSubject={handleSelectSubject}
        />
      )}
      {screen === 'find-tutor' && (
        <FindTutorScreen
          selectedSubject={selectedSubject}
          onBack={() => setScreen('landing')}
          onChat={handleChat}
        />
      )}
      {screen === 'pay-forward' && (
        <PayItForwardScreen onBack={() => setScreen('landing')} />
      )}
    </div>
  );
}

export default App;
