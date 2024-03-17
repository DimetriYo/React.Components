import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="w-24 h-24 bg-red-700" />} />
    </Routes>
  );
}

export default App;
