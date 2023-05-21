import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accessing,
  Activation,
  Auth,
  Buy,
  Contact,
  FindRealtors,
  Home,
  PropertyDetail,
  Rent,
  Sell,
} from "./Page";
import Dashboard from "./Page/Dashboard";
import EditProfile from "./Page/EditProfile";
import { AuthProvider } from "./context/auth";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/find-realtor" element={<FindRealtors />} />
            <Route path="/property/:propertyid" element={<PropertyDetail />} />
            {/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}
            <Route path="/sell" element={<Sell />} />
            <Route path="/auth" element={<Auth />} />

            {/* <Route path="/" element={<PrivateRoute />} > */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            {/* <Route /> */}

            <Route path="/auth/activate/:token" element={<Activation />} />
            <Route
              path="/auth/forgot-password/:token"
              element={<Accessing />}
            />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
