import React, { useState, createContext } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./components/Menu";
import "./App.css";

export const CheckedItemsContext = createContext();

const AppLayout = () => {
    const [checkedItems, setCheckedItems] = useState({});

    return (
        <CheckedItemsContext.Provider value={checkedItems}>
            <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
            <Outlet />
        </CheckedItemsContext.Provider>
    );
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
