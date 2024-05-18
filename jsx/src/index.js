import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

// function App(){

//     let message = 'Bye There';
//     if(Math.random()>0.5)
//     {
//         message="Hello There";
//     }
//     const name='jomin';
//     const age=23
//     const minValue =5;
//     return <textarea autoFocus={true} />
//     return <input type="number" min={minValue} list='[1,2,3,4]' />
//     return <h1>Hi , My Name is {name}  and age is {age}</h1>
//     return <h1>{new Date().toLocaleTimeString()}</h1>
//     return <h1>{message}</h1>;
// }

root.render(<App/>)
