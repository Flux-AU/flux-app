import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import * as ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// function handleExpressRequest(req, res) {
//   // Handle redirects *before* you render and save yourself some time.
//   // Bonus: Send a HTTP 302 Found status code so crawlers don't index
//   // this page!
//   if (req.url === "/") {
//     return res.redirect("/application/");
//   }

//   // If there aren't any redirects to process, go ahead and render...
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>
//   );

//   // ...and send a HTTP 200 OK status code so crawlers index the page.
//   res.end(html);
// }