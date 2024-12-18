import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import {Layout} from "./../components/layouts/Layout";
import {Prices} from "./../components/Prices"
import { useCart } from "../context/cart";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked]=useState([])
  const [radio, setRadio]=useState([])
  const [total, setTotal]=useState(0)
  const [page, setPage]=useState(1)
  const [loading, setLoading] = useState(false)

  const [cart,setCart]=useCart();
  

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);


  //getTotal count
  const getTotal = async () => {
    try {
      const {data}= await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/product/product-count`)
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  }

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data?.products);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  useEffect(()=>{
 if(!checked.length || !radio.length)getAllProducts();
  },[checked.length, radio.length]);

  useEffect(()=>{
    if(checked.length || radio.length)filterProduct();
  },[checked,radio])



  //get filtered product
  const filterProduct = async ()=> {
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/product/product-filters`,{checked,radio})
      setProducts(data?.products)
    } catch (error) {
      console.log(error);
    }
  }

   // filter by cat
   const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);  
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(()=>{
    if (page === 1) return;
    loadMore();
  },[page])

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts([...products,...data?.products]);
      console.log(data?.products)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  return (
    <Layout title={"All Services - Best offers "}>
       <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
          {categories?.map(c=>(
            <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>
              {c.name}
            </Checkbox>
          ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Prices</h4>
          <div className="d-flex flex-column">
          <Radio.Group onChange={(e)=>setRadio(e.target.value)}>
            {Prices?.map(p=>(
              <div key={p._id}>
              <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
          </div>
          <div className="d-flex flex-column">
             <button className="btn btn-sm btn-danger" onClick={()=>window.location.reload()}>RESET FILTERS</button>
          </div>
        </div>
        
        <div className="col-md-9 ">
          <h1 className="text-center">All Services</h1>
          <div className="d-flex flex-wrap">
            {products?.map(p => (
              <div className="card m-2" style={{width:"16rem"}} key={p._id}>
                <img
                  src={`${import.meta.env.VITE_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                  <p className="card-text ">
                    {p.description.substring(0,30)}...
                  </p>
                  <p className="card-text fw-bold">
                   ${p.price}
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1 btn-sm" onClick={()=>navigate(`/product/${p.slug}`)}
                    >
                      MORE DETAILS
                    </button>
                    <button className="btn btn-dark ms-1 btn-sm" onClick={() => {
                      setCart([...cart,p])
                      localStorage.setItem("cart",JSON.stringify([...cart,p]))
                      toast.success('Item Added to Cart')
                    }}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-2">
            {products && products.length<total && (
              <button className="btn btn-warning" onClick={(e) => {
                
                setPage(page+1);
              }}>
                {loading ? "Loading..." : "Loadmore"}
              </button>
            )}

          </div>
        </div>
      </div>   
    </Layout>
  )
};

export default HomePage;
