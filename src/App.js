import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Header } from './components/Layout/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscriber from './components/Payments/Subscriber';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFailed from './components/Payments/PaymentFailed';
import NotFound from './components/Layout/NotFound/NotFound';
import CourseDisplay from './components/CourseDetail/CourseDisplay';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsAndConditions from './components/Legal/TermsService';
import RefundPolicy from './components/Legal/RefundPolicy';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';

function App() {
  const { isAuthenticated, user, error, message, loading } = useSelector(
    state => state.user
  );
  // for displaying pop up
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* dashboard routes  */}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                  redirectAdmin="/profile"
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                  redirectAdmin="/profile"
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                  redirectAdmin="/profile"
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                  redirectAdmin="/profile"
                >
                  <Users />
                </ProtectedRoute>
              }
            />

            {/* profile Routes */}
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />{' '}
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />

            {/* payment Routes */}
            <Route path="/request" element={<Request />} />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscriber />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfailed" element={<PaymentFailed />} />

            {/* other routes  */}
            <Route path="/allcourses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDisplay />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />

            {/* legal routes */}
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termscondition" element={<TermsAndConditions />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-center" />
        </>
      )}
    </Router>
  );
}
export default App;
