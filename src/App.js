import './App.css';
import {Route, Routes} from "react-router-dom";
import Sign from "./components/Sign";
import Send from "./components/SendMessage";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Sign/>}/>
                <Route path={'/send'} element={<Send/>}/>
            </Routes>
        </div>
    );
}

export default App;
