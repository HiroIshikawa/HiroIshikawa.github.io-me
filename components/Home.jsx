import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';

  return (
    <div>
      <p>
      To build thoughtful AI.
      </p>
      <div><Link to="/HiroIshikawa.github.io-aihub/note">ML Note</Link></div>
    </div>
  );
}

export default Home;
