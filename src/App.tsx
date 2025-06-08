import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import themeSettings from './settings/theme';
import { Theme } from './settings/types';
import AIAgentsPlatformLandingPage from './components/generated/AIAgentsPlatformLandingPage.tsx';
import RowboatPage from './components/RowboatPage.tsx';

function AppContent() {
  const navigate = useNavigate();

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(themeSettings.theme);

  const landingPage = useMemo(() => {
    return <AIAgentsPlatformLandingPage />
  }, []);

  const rowboatPage = useMemo(() => {
    return <RowboatPage onBack={() => navigate('/')} />
  }, [navigate]);

  if (themeSettings.container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={landingPage} />
          <Route path="/rowboat" element={rowboatPage} />
        </Routes>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={landingPage} />
        <Route path="/rowboat" element={rowboatPage} />
      </Routes>
    );
  }
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
