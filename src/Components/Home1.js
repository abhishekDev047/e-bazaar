import React, { useEffect, useState, useMemo } from "react";
import Product from "./Product";
import Products from "./Products";


const Home1 = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://fakestoreapi.com/products/`;
        let parsedData = await fetch(url);
        let data = await parsedData.json();
        return setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [detailKey, setDetailKey] = useState("");

  const getData = async () => {
    let url = `https://fakestoreapi.com/products/category/${title}`;
    let parsedData = await fetch(url);
    let data = await parsedData.json();
    return setProduct(data);
  };

  const Detail = ({ id }) => {
    return <Product func={back} id={id} />;
  };

   
  const make = (key)=>{
    setOpen(true);
    setDetailKey(key)
  };

  const back = ()=>{
    setOpen(false)
  };

  if (isOpen === false) {
     return (
    <div className="flex flex-col p-2">
      <div className="my-2 flex flex-col items-center ">
        <span className="w-full  text-xs sm:text-base text-center">
          <button
            className="p-2 hover:bg-stone-400"
            onClick={() => {
              setTitle(`men's clothing`);
            }}
          >
            men's clothing
          </button>
          <button
            className="p-2 hover:bg-stone-400"
            onClick={() => {
              setTitle(`women's clothing`);
            }}
          >
            women's clothing
          </button>
          <button
            className="p-2 hover:bg-stone-400"
            onClick={() => {
              setTitle(`electronics`);
            }}
          >
            electronics
          </button>
          <button
            className="p-2 hover:bg-stone-400"
            onClick={() => {
              setTitle(`jewelery`);
            }}
          >
            jewellery
          </button>
        </span>
        <br />
        <button
          className=" border border-gray-500 p-1  rounded-md bg-lime-600"
          onClick={getData}
        >
          Search
        </button>
      </div>
      <div className="my-2 px-1 sm:flex sm:flex-row sm:flex-wrap">
        {product.map((element) => {
          return (
            <Products
              name={element.title}
              src={element.image}
              price={element.price}
              rating={element.rating.rate}
              rates={element.rating.count}
              id={element.id}
              func={() => make(element.id)}
            />
          );
        })}
      </div>
    </div>
  );
  } else {
    return(
        <Detail id={detailKey}/>
    )
  }
 
};

export default Home1;
