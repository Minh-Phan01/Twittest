import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { HomePage } from "./components/HomePage/HomePage";
import ProfilePage from './components/ProfilePageComponents/ProfilePage/ProfilePage'
import EditPostForm from "./components/PostComponents/EditPostForm/EditPostForm";
import MessagesPage from "./components/MessagesComponents/MessagesPage/MessagesPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/posts/:postId/edit'>
            <EditPostForm />
          </Route>
          <Route exact path='/users/:userId'>
            <ProfilePage />
          </Route>
          <Route exact path='/messages/:userId'>
            <MessagesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
            <ProfilePage />
        </Switch>
      )}
    </>
  );
}

export default App;
