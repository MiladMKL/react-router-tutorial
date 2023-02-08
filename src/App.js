import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import About from "./pages/About.js";
import Home from "./pages/Home.js";

// layouts
import RootLayout from "./layouts/RootLayout.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
