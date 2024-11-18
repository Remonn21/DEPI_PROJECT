import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.js";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
               <App />
            </ReduxProvider>
            <Toaster
               richColors
               position="top-right"
               visibleToasts={1}
               duration={4000}
            />
         </QueryClientProvider>
      </BrowserRouter>
      <SpeedInsights />
   </StrictMode>,
);
