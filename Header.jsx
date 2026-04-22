import React from 'react';

function Header() {
  return (
    <header className="terminal-header">
      <div className="terminal-top">
        <span className="terminal-label">ACADEMIC TERMINAL V2.0</span>
      </div>
      <h1 className="terminal-title">
        STUDENT <span className="highlight">SCOREBOARD</span>
      </h1>
      <div className="terminal-divider"></div>
    </header>
  );
}

export default Header;
