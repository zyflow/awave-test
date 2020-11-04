import './assets/scss/App.css';
import Layout from "./layouts/Layout";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/App.scss'
import './assets/scss/Menu.scss'
import './assets/scss/QuestionForm.scss'


function App() {
  return (
    <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <Layout />
    </div>
  );
}

export default App;
