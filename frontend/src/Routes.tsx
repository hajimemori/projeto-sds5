import { 
    BrowserRouter, 
    Route, 
    Routes
} from "react-router-dom"; 
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const RoutesConfig = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesConfig;