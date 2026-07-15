import { Route, Routes } from "react-router";
import Home from "./routes/home";
import Gallery from "./routes/gallery";
import Register from "./routes/register";
import AdminDashboard from "./routes/admin";

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    );
}