import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import LoginScreen from "./user/Login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer }
});

function Tuiter() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/login"    element={<LoginScreen    />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile"  element={<ProfileScreen  />} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList />
          </div>
        </div>
      </Provider>
    </div>
  );
}
export default Tuiter;
