import { useParams } from "react-router-dom";
const RestaurentMenu=()=>{
    const {id}=useParams();
    return(
        <div>
            <h1>Restaurant Id: {id}</h1>
        </div>
    )
}
export default RestaurentMenu;