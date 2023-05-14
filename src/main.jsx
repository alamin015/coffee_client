import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Card from './Pages/Card/Card.jsx';
import Home from './Pages/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import Login from './Components/Login/Login.jsx';
import MyProvider from './Firebase/MyProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/card',
        element: <Card></Card>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </React.StrictMode>,
)