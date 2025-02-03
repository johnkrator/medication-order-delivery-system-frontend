import {FC} from "react";
import {RouterProvider} from "react-router-dom";
import Routes from "./components/Routes.tsx";

const App: FC = () => {
    return (
        <RouterProvider router={Routes()}/>
    );
};

export default App;
