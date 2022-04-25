import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../views/Home/Home.jsx";
// import Search from "../views/Search/Search.jsx";
import Login from "../views/Login/Login.jsx";
import Register from "../views/Register/Register";
import Profile from "../views/Profile/Profile.jsx";
import PersonDetail from "../views/detail/PersonDetail/PersonDetail"; 
import MovieDetail from "../views/detail/MovieDetail/MovieDetail";
import TvShowDetail from "../views/detail/TvShowDetail/SerieDetail";
import CastCredit from "../components/CastCredit/CastCredit";

export default function MainRouter() {
  return (
  <Routes>
    <Route path={ROUTE.HOME} element={<Home />} />
    {/* <Route path={ROUTE.SEARCH} element={<Search />} /> */}
    <Route path={ROUTE.LOGIN} element={<Login />} />
    <Route path={ROUTE.REGISTER} element={<Register />} />
    <Route
      path={ROUTE.PROFILE}
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route path={ROUTE.DETAIL.PERSON} element={<PersonDetail />} />
    <Route path={ROUTE.DETAIL.MOVIE} element={<MovieDetail />} />
    <Route path={ROUTE.DETAIL.TVSHOW} element={<TvShowDetail />} />
    {/* <Route path={ROUTE.CREDIT} element={<CastCredit />} /> */}
  </Routes>
  );
}
