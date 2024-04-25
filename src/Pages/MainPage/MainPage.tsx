import { Link } from "react-router-dom"

import './MainPage.css'

const MainPage = () => {
    return (
        <div className="flex">
            <h1>MainPage</h1>
            <Link className="link" to="/admin">Admin</Link>
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/sprint">Sprint</Link>
        </div>
    )
}


export default MainPage;