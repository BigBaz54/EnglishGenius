import React from 'react'
import ReactDOM from 'react-dom/client'

// Pages & Components
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

// Router
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function router() {
    const BrowserRouter = createBrowserRouter([
        {path: "/", element: <HomePage />},
        {path: "/about", element: <AboutPage />},
    ])
    return (
        <RouterProvider router={BrowserRouter}/>
    )
}