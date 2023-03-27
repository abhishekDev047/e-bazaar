import React, { useEffect,useState } from "react";

const Product = (props) => {
let id = props.id
    const [Data, setData] = useState([]);
    const [cls, setCls] = useState('hidden');
    const [cls2, setCls2] = useState('hidden');
    useEffect(() => {
        const fetchData = async () => {
          try {
            let url = `https://fakestoreapi.com/products/${id}`;
            let parsedData = await fetch(url);
            let data = await parsedData.json();
            return setData(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const placed = ()=>{
          setCls('')
      };
      const done = ()=>{
          setCls2('')
      };
       const handleChange = ()=>{

       }
      return(
        <div className="flex flex-col" >
        <div className="text-center text-xl md:text-2xl bg-lime-300"> {Data.title}</div><hr /> 
            <div className=" "> <img src={Data.image} alt="" className="mx-auto" /></div><hr />
            <div><p className="text-2xl bg-lime-200 px-2 md:text-4xl">${Data.price}</p></div><hr />
            <div className="bg-lime-100 px-2">{Data.description}</div>

            <div className="ml-4" ><p><button onClick={placed}>Tap to  Place Order</button></p>
              <p className={cls}>
                <p> choose your payment option </p>
                <p><input type="radio" name="payment-method" /> Cash on delivery </p>
                <p><input type="radio" name="payment-method" /> UPI </p>
                <p><input type="radio"  name="payment-method" /> Net banking </p>
                <p> <button className="p-2 bg-lime-600 text-black rounded-lg" onClick={done}> Order now</button> 
                <p className={cls2}> <i className="text-lg"> Thanks for ordering . keep shopping</i></p></p>
              </p>
            </div>
           
            <div className="flex flex-col items-center"> <button onClick={props.func}> Continue Shopping</button></div>
        </div>
      )
};

export default Product;
