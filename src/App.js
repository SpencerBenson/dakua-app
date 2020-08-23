import React from "react";
// import './App.css';
import NavBar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import "./App.less";
import { Layout } from "antd";
const {  Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <>
    <NavBar />
      <Layout>
        <Content>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Content>
      </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
