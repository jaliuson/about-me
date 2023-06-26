import './App.css';

import BusinessCard from './BusinessCard';
import ExperiencePanel from './ExperiencePanel'
import ProjectPanel from'./ProjectPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BusinessCard></BusinessCard>
      </header>
      <body className="App-body">
        <ExperiencePanel></ExperiencePanel>
        <ProjectPanel></ProjectPanel>
      </body>
    </div>
  );
}

export default App;
