// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import App from "./App";
import "./index.css";
import Home from "./components/Home/Home";
import { AboutUs } from "./components/About us/About  us";
import { OurServices } from "./components/Our services/Our services";
import { OurProjects } from "./components/Our projects/Our projects";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Faq } from "./components/Faq/Faq";
import { Blog } from "./components/Blog/Blog";
import { SinglePost } from "./components/Single post/Single post";
import { Project2 } from "./components/Project 2/project2";
import ContactUs from "./components/Contact us/Contact us";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>} />
      <Route path="about-us" element={<AboutUs/>} />
      <Route path="our-services" element={<OurServices/>} />
      <Route path="our-projects" element={<OurProjects/>} />
      <Route path="our-projects/project1" element={<OurProjects/>} />
      <Route path="our-projects/project2" element={<Project2/>} />
      <Route path="portfolio" element={<Portfolio/>} />
      <Route path="pages" element={<Faq/>} />
      <Route path="pages/faq" element={<Faq/>} />
      <Route path="pages/blog" element={<Blog/>} />
      <Route path="pages/post" element={<SinglePost/>} />
      <Route path="contact-us" element={<ContactUs/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <RouterProvider router={router} />    
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
