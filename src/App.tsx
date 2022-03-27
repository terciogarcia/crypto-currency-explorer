import { Routes, Route } from 'react-router-dom';
import Page from './component/Page';
import CoinDetails from './pages/CoinDetails';
import Home from './pages/Home';

function App() {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<CoinDetails />} />
      </Routes>
    </Page>
  );
}

export default App;
