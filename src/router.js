// router.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import TextForm from "./components/TextForm";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: (
            <TextForm
              showAlert={() => {}} // You can pass real props via context or layout later
              heading="Try TexUtils - Word Counter, Character Counter, Remove extra spaces"
              mode="light"
            />
          ),
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],);

export default router;