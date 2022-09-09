import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class BootstrapEx extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/products`).then((res) => {
      let products = res.data;
      console.log(res.data);
      this.setState({ products: products });
    });
  }

  render() {
    let product = this.state.products.map((product,index)=>{
        if(product.image){
            return(
                <div className="col-md-3 col-12 text-center bg-secondary rounded-2 m-5 flex-warp align-items-center justify-content-center text-white">
                    <img className="col-8 mt-3 rounded-3" src={product.image} key={index}/>
                    <p>{product.title}</p>
                    <p>{product.company}</p>
                    <p>{product.price}$</p>
                </div>
            )
        }
    })
    return (
      <div className="row bg-dark">  
        {product}    
      </div>
    );
  }
}
