import { Layout } from './Layout';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/Auth-opertions';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Register = lazy(() => import('../Pages/Register'));
const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Pages/Login'));
const Phonebook = lazy(() => import('../Pages/Phonebook'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />}/>}/>
        <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />}/>}/>
        <Route path="contacts" element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}/>
        {/* <Route path="profile" element={<PrivateRoute redirectTo="/" component={<ProfileView />} />}/>
        <Route path="profile/edit" element={<PrivateRoute redirectTo="/" component={<EditProfileView />} />}/> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
};
