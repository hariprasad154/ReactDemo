import { Link } from "react-router-dom";
function UserProfile() {
    return(
        <div>
            <h1>Profile</h1>
            {/* <button type="botton">GoBacktoHome </button> */}
            <Link to="/home"><button type="btn">Home</button></Link>
        </div>
    )
}export default UserProfile;