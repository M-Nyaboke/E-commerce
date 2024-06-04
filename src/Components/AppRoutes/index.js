
import Category from "../../Pages/Category";
import Home from "../../Pages/Home";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Category />}></Route>
            <Route path="/:categoryId" element={<Category />}></Route>
        </Routes>
    )
}
export default AppRoutes;