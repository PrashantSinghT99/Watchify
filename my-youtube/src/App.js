import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Error from "./Components/Error";
import Header from "./Components/Header";
const AppLayout = () => (
  <>
    <Header />
    <Body />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <Error />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Error />} />
      </Provider>
    </>
  );
}

export default App;
