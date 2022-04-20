import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./guards/ProtectedRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";
import MainRouter from "./router/MainRouter";
import AuthContextProvider from "./contexts/AuthContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div>
          <header>
            <h1>Navbar</h1>
          </header>
          <main>
            <MainRouter />
          </main>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;


