import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accessing,
  Activation,
  Auth,
  BuyPage,
  Contact,
  Dashboard,
  FindRealtors,
  ForgotPasswordPage,
  Home,
  PropertyDetail,
  Rent,
} from "./Page";
import { AuthProvider } from "./context/auth";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";
import AgentDetailsPage from "./Page/AgentDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/realtor" element={<FindRealtors />} />
            <Route
              path="/realtor/:realtorslug"
              element={<AgentDetailsPage />}
            />
            <Route
              path="/property/:propertyslug"
              element={<PropertyDetail />}
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<PrivateRoute />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route
              path="/auth/activate/:verificationtoken"
              element={<Activation />}
            />
            <Route
              path="/auth/user/accessaccount/:accesscode"
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
