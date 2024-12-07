import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "../layout/Home"


const AppRoute=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home/>}>

        </Route>
    )
)

export default AppRoute