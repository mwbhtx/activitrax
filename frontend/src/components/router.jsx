import * as React from "react";
import Dashboard from "../pages/private/dashboard";
import Login, {Oauth, StravaLoginButton, SignInForm, CreateAccountForm} from "../pages/public/login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default function ReactRouterHome() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>
        <Route index element={<SignInForm/>}></Route>
        <Route path="/register" element={<CreateAccountForm/>}></Route>
      </Route>
      
      <Route path="/dashboard" element={<Dashboard/>}/>

      {/* 404 Page Not Found Route */}
      <Route path="*" element={<h1 style={{color:"white", margin: "5rem"}}> Error: 404 <br/> Whoopsies...looks like you're lost. <br/>I'm not sure how to help.</h1>}/>
    </Routes>
  </BrowserRouter>

  );
}
