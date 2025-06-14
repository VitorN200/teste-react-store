import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import '../styles/RedirectArrow.css'

function RedirectArrow() {

return (
        <div className="redirect-arrow">
            <Link to="/">
                <FaArrowLeft size={30} />
            </Link>
        </div>
    )
}

export default RedirectArrow;
   