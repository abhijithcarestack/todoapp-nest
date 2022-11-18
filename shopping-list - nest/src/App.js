import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Shopping from "./pages/Shopping";
import SignIn from "./pages/SignInForm";
import ProtectedRoute from "./Utils/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/signupForm";
import UserContextProvider from "./store/user-context";
function App() {
  const [editState, setEditState] = useState();
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  return (
    <UserContextProvider>
      <Context.Provider
        value={{
          editState,
          setEditState,
          spinnerFlag,
          setSpinnerFlag,
          apiResponse,
          setApiResponse,
        }}
      >
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Shopping />
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/shoppinglist"
                element={
                  <ProtectedRoute>
                    <Shopping />
                  </ProtectedRoute>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Context.Provider>
    </UserContextProvider>
  );
}

export default App;
