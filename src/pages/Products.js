import { Link } from "react-router-dom";
import TableData from "../componants/TableData";


function Products () {

    return(
        <>

        <h1>Products Page</h1>
        <Link to={"/products/addNProduct"} className="btn btn-success mt-3">Add New Product</Link>
        <table className="table mt-5">
            <TableData />
         </table>
        
        </>
    )
}

export default Products;