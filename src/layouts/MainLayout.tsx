import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from "../components/Header/Header"
import {fetchGenres} from "../api/movie.api"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useDispatch} from "react-redux"
import {setGenres} from "../store/actionCreators/genres"
import CustomBreadcrumbs from "../components/Breadcrumbs/CustomBreadcrumbs"

const MainLayout = () => {
  const {genres} = useTypedSelector(state => state.genres)
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(() => {
    if (!genres.length)
      fetchGenres().then(data => dispatch(setGenres(data)))
  }, [])

  return (
    <>
      <Header/>
      <CustomBreadcrumbs rawBreadcrumbs={(pathname !== '/') ? pathname.split('/').filter(el => !parseInt(el)) : ['']}/>
      <Outlet/>
    </>
  );
};

export default MainLayout;
