import React from 'react';

import Canvas from 'app/components/canvas';
import mkdiravatar from'./mkdir-avatar.png';

function App() {
    return (
        <div className="App">
            <div className="header-info">
				<img src={mkdiravatar} width="177px" height="177px"/>
                <h1 className="app-title">Mkdir</h1>
                <p className="project-source">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/mkdir01/site"
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
