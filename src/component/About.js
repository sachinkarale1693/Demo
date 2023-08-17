import axios from "axios";
import { useEffect } from "react";
import base_url from "../api/bootfile";

function About(){

     
    useEffect(()=>{
        document.title= "All Employee"
       
        getmy();
      }, []);

    const getmy=()=>{
        axios.get(`${base_url}`).then(
          (response)=>
          {
            console.log(response);
          },
          (error) => {
            console.log(error);
      
          }
        );
        }
   
    

    return(
        <h1>hi this is about page</h1>
    )
}
export default About;