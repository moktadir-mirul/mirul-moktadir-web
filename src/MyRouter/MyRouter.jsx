import { Route, Routes } from "react-router"
import App from "../App"
import CuddlyPaws from "../Pages/CuddlyPaws/CuddlyPaws"
import RoyalBites from "../Pages/RoyalBites/RoyalBites"
import CareerCompass from "../Pages/CareerCompass/CareerCompass"
import Plant from "../Pages/Plant/Plant"

export const MyRouter = () => {
    return(
        <Routes>
            <Route path="/" Component={App}></Route>
            <Route path="/cuddly-paws" Component={CuddlyPaws}></Route>
            <Route path="/royal-bites" Component={RoyalBites}></Route>
            <Route path="/plant-companion" Component={Plant}></Route>
            <Route path="/career-compass" Component={CareerCompass}></Route>
        </Routes>
    )
}