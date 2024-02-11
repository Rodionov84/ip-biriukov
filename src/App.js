import './App.css';
import { HeadMenu } from './components/headMenu';
import { useState } from "react";

function App() {

  const [selectedRow, setSelectedRow] = useState([null]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <a href='https://rodionov.moscow/' title='https://rodionov.moscow/' target="_blank" rel="noreferrer"> Родинов Илья </a>
          <a href='https://docs.google.com/document/d/1F7KI2-0Eiq3Hrrlz9XWHzORa9g7jempQ6nW2e5xckAQ/edit' 
          title='Задание' 
          target="_blank" 
          rel="noreferrer">Тестовое задание (Js разработчик):</a>

        </h2>
      </header>
      <article>
        <HeadMenu selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
      </article>
    </div>
  );
}

export default App;
