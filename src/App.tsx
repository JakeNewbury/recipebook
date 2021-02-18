import React, { useState, useEffect } from 'react';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div>
      <header>
        <p> 
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;
