import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import PageContainer from "./components/pageContainer";
import { Suspense, lazy } from "react";
import Lottie from "lottie-react";
import loader from "./assets/json/loader.json";
const Login = lazy(() => import("./pages/login"));

function AuthLayout() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      {isLoggedIn === "0" || isLoggedIn === undefined ? (
        <AuthLayout />
      ) : (
        <PageContainer>
          <Suspense fallback={<Lottie animationData={loader} />}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  element={<route.element />}
                  path={route.path}
                  index={route.index}
                />
              ))}
            </Routes>
          </Suspense>
        </PageContainer>
      )}
    </BrowserRouter>
  );
}

export default App;
