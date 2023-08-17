import { Link } from "react-router-dom";
<style>
    #ik{
        
    }

</style>


function Navigation(){
   
    
    return(
        <div>
   
        <Link to="/About">About</Link><br></br>
        <Link to="/Home">Home</Link>
        </div>
    )
}
export default Navigation;