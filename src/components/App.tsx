import React from 'react';
import Datepicker from './Datepicker';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-pink-500 gap-6 p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-tight animate-pulse">
        hello KBTG
      </h1>
      <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-6">
        <Datepicker />
      </div>
    </div>
  );
};

export default App;