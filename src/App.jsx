import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
