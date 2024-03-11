import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import SingUp from "./components/SingUp";
import List from "./components/List";
import MoviePage from "./components/MoviePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomeBanner />

            </>
          } />
          <Route path="/login" element={
            <>
              <Header />
              <Login />
            </>
          } />
          <Route path="/SingUp" element={
            <>
              <Header />
              <SingUp />
            </>
          } />
          <Route path="/poster" element={
            <>
              <Header />
              <Banner />
              <List title="Netflix Originals" param="originals" />
              <List title="Trending Now" param="trending" />
              <List title="Now Playing" param="now_playing" />
              <List title="popular" param="popular" />
              <List title="Top Rated" param="top_rated" />
              <List title="Upcoming" param="upcoming" />
            </>
          } />
        <Route path="/dashboard" element={
          <>
            <Header />
            <Banner />
            <List title="Netflix Originals" param="originals" />
            <List title="Trending Now" param="trending" />
            <List title="Now Playing" param="now_playing" />
            <List title="popular" param="popular" />
            <List title="Top Rated" param="top_rated" />
            <List title="Upcoming" param="upcoming" />
          </>
        } />
      </Routes>
    </BrowserRouter >



    </>
  );
}

export default App;
