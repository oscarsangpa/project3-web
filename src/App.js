import MainRouter from "./router/MainRouter";
import AuthContextProvider from "./contexts/AuthContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div>
          <BrowserRouter>
            <header>
              <Navbar/>
            </header>
            <main>
              <MainRouter />
            </main>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;


