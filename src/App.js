import React from 'react';
import './App.css';


 const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png" alt=""/>
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="http://h2.hqtexture.com/98/9735/1457619934-1.jpg" alt=""/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
