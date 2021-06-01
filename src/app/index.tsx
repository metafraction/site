import React from 'react';

import Canvas from 'app/components/canvas';

function App() {
    return (
        <div className="App">
            <div className="header-info">
                <h1 className="app-title">Name</h1>
                <p className="project-source">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/mkdir01"
                    >
                        [ Find project on GitHub ]
                    </a>
                </p>
            </div>

            <Canvas />
        </div>
    );
}

export default App;
