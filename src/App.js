import "./style/Style.css";
import MainRouter from "./router/MainRouter";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./style/ESTYLE.scss"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
            <main>
              <Navbar />
              <MainRouter />
              <Footer/>
            </main>
          </AuthContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
