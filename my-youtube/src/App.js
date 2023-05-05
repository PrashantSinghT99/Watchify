import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
        errorElement: <Error />,
      },
      {
        path: "/watch",
        element: <WatchPage/>,
        errorElement: <Error/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
