import React, { useEffect,useState } from "react";

const Product = (props) => {

    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            let url = `https://fakestoreapi.com/products/${props.id}`;
            let parsedData = await fetch(url);
            let data = await parsedData.json();
            return setData(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      return(
        <div className="flex flex-col ">
            <div> <img src={Data.image} alt="" /></div>
            <div> <button onClick={props.func}> Continue Shopping</button></div>
        </div>
      )
};

export default Product;
