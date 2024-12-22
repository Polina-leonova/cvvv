import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Подключаем стили

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;