import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import AppLayout from "../src/Layout/AppLayout";
import './App.css';
import FAQ from "./Components/FAQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Components/Cart";
//route layout;
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProductDetail />, //dynamic route;
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  }
])


const App = () => {
  const queryClient = new QueryClient();
  return (
    //this is a wrapper which provides the queryClient instance to all the components or complete react app's root(app.jsx);
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;