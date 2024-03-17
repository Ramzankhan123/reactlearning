import { Route, Link, useParams, Routes} from 'react-router-dom'

const Products = () =>{
  const params = useParams();
  return(
    <p>{params.id}</p>
  )
} 

const Product = () => {
    return (
    <div>
      <h1>Product</h1>
      <strong>select a Product</strong>
      <ul>
        <li>
          <Link to ="/Product/Secret"> Books</Link>
        </li>
        <li>
          <Link to ="/Product/Addgel"> Pen</Link>
        </li>
      </ul>
      <Routes>
      <Route path= "/Product/:id" Component={Products} />
      </Routes>
     
      </div>
    )
}

export default Product