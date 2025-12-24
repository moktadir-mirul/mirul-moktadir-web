import { Route, Routes } from "react-router"
import App from "../App"
import CuddlyPaws from "../Pages/CuddlyPaws"

export const MyRouter = () => {
    return(
        <Routes>
            <Route path="/" Component={App}></Route>
            <Route path="/cudlly-paws" Component={CuddlyPaws}></Route>
        </Routes>
    )
}