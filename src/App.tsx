import { useEffect } from 'react';
import { getCoinList } from './utils/api';

function App() {
  useEffect(() => {
    getCoinList()
      .then((result) => console.log(result));
  }, []);

  return (
    <div className="App" />
  );
}

export default App;
