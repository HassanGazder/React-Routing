import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Root from './routes/root';
import ErrorPage from './errorpage';
import Contact from "./routes/contact";
import Hello from './routes/hello';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[{
      path: "contacts/",
      element: <Contact />,
    }]
    // path: "contacts/",
    // element: <Contact />,
  },
  {
    path:"Hello/",
    element:<Hello />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
