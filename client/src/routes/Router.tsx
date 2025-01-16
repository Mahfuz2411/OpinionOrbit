import { BrowserRouter, Routes, Route } from "react-router";
import App from "@/App";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;



