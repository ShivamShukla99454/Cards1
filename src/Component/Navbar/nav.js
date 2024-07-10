// import react from 'react'
// import Dropdown from './dropdown'
import Dropdown from "./dropdown";
function Table(){
    return(
        <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Content</li>
            <li><Dropdown/></li>
        </ul>
        </div>
    )

}
export default Table;