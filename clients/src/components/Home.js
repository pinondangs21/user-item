import React,{useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

  const [items, setItems] = useState([])
  const getItems = async ()=> {
    const result= await axios({
      method:"GET",
      url:"http://localhost:3000/items"
    })
    // console.log(result.data)
    setItems(result.data)
  }
  
  useEffect(() => {
    getItems()
        //console.log(sessionStorage.getItem('token'));
        // dispatch(getPosting(localStorage.getItem('token')));
        //console.log(getPostItemResult); 
      }, []);
 
  return (
    <div className="container">
      <h1>Home Page</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Categories</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>user_id</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item)=>{
              const{id,name,categories,price,stock,image,user_id}=item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{categories}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{image}</td>
                  <td>{user_id}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
