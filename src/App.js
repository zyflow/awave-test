import './assets/scss/App.css';
import Layout from "./layouts/Layout";
import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/App.scss'
import './assets/scss/Menu.scss'
import './assets/scss/QuestionForm.scss'
import './assets/scss/QuestionList.scss'
import {
    BrowserRouter as Router, Route,
    Switch,
} from "react-router-dom";
import QuestionList from "./components/QuestionList";
import Header from "./layouts/Header";
import {ToastContainer} from "react-toastify";

function App() {
    useEffect(() => {
        document.title = 'Lauris - Awave test';
    });

    return (
        <Router>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
            <Header/>
            <div className='wrapper'>
                <div className="custom-container-image">
                    <div className='content'>
                        <Switch>
                            <Route exact path="/" component={Layout}/>
                            <Route exact path="/submissions" component={QuestionList} />
                        </Switch>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-left" />
        </Router>
   );

  // return (
  //   <div className="App">
  //       <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
  //       <Layout />
  //       <ToastContainer position="bottom-left" />
  //   </div>
  // );
}



export default App;
