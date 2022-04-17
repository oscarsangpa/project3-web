import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {ROUTE} from './routes';
import Home from '../views/home/Home';
import Search from '../views/search/Search';
import Login from '../views/login/Login';
import Register from '../views/register/Register';
import Profile from '../views/profile/Profile';
import ActorDetail from '../views/detail/actorDetail/ActorDetail';
import MovieDetail from '../views/detail/movieDetail/MovieDetail';
import SerieDetail from '../views/detail/serieDetail/SerieDetail';

export default function MainRouter() {
  return (
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
        <Route path={ROUTE.PROFILE} element={<Profile />} />
        <Route path={ROUTE.DETAIL.ACTOR} element={<ActorDetail />} />
        <Route path={ROUTE.DETAIL.MOVIE} element={<MovieDetail />} />
        <Route path={ROUTE.DETAIL.SERIE} element={<SerieDetail />} />
      </Routes>
  );
}