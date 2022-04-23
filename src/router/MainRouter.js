import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTE } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../views/Home/Home";
import Search from "../views/search/Search";
import Login from "../views/Login/Login.jsx";
import Register from "../views/Register/Register";
import Profile from "../views/Profile/Profile.jsx";
import ActorDetail from "../views/detail/actorDetail/ActorDetail";
import MovieDetail from "../views/detail/movieDetail/MovieDetail";
import SerieDetail from "../views/detail/serieDetail/SerieDetail";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
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
        <Route path={ROUTE.DETAIL.ACTOR} element={<ActorDetail />} />
        <Route path={ROUTE.DETAIL.MOVIE} element={<MovieDetail />} />
        <Route path={ROUTE.DETAIL.SERIE} element={<SerieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
