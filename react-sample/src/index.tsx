import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/ContainerSample';
import Header from './components/ContentSample';
import StateCounter from './components/StateCounter';
import ReducerCounter from './components/ReducerCounter';
 
const Hello = () => {
  const onClick = () => { alert('hello') }
  const text = 'hello, React'

  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Hello />
    <Parent />
    <StateCounter initialValue={10} />
    <ReducerCounter initialValue={10} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
