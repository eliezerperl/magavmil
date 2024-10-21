import HomePage from './homePage/HomePage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <HomePage></HomePage>
    </>
  );
}

export default App;
