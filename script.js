/* 

// ReactDOM.render('Welcome to React', document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

function MainContent() {
    return (
     <h2>this is a react practice</h2>
    )
}




ReactDOM.render(
  <MainContent />
,document.getElementById('root'));










*/
// script.js

/* 
function Testing() {
  return <h1>Is it work!?</h1>
}

let text = document.createElement('h2');
text.textContent = 'this is h2'
console.log(text);
let rootEle = document.getElementById('root');
rootEle.appendChild(text);
*/

/* 

let nav = (
  <nav>
    <img src="./React.jpg"/>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>was first released in 2013</li>
      <li>was originaly created by jordan walke</li>
      <li>has well over 100k stars on github </li>      
      <li>it's maintaned by facebook </li>
      <li>powers thousends of entreprise app, including mobile app</li>
    </ul>
  </nav>
)
ReactDOM.render(nav,document.getElementById('root')
);

*/
// Header component
function Header() {
    return (
      <header className="header">
          <nav className="navbar">
              <img className="img" src="./react-logo-24.png"/>
              <ul className="ul-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
          </nav>
      </header>
    )
}
// Section component
function Section() {
  return(
    <div className="section">
      <h1 className="title">i am exited to Learn React</h1>
      <ol className="order-list">
           <li>It's Declarative</li>
           <li>It's componabale</li>
           <li>It's populaer and Required in the labor market</li>
           <li>Modern technologies offer good performance</li>
      </ol>
    </div>
  )
}
// Footer component
function Footer() {
  return (
     <footer className="footer"><small>&copy; 20xx siradj development.All right reserved</small></footer>
  )
}
// Custom component
function CustomComponent() {
  return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
  )
}

ReactDOM.render(<CustomComponent />,document.getElementById('root'))