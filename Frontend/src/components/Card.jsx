import { useState } from "react";
import  "../css/Style.css"
import Food from "../assets/Palakkad.avif"
export default function Card() {
    const [quantity,setQuantity]=useState(0);
    const IncrementQuantity=()=>{
        setQuantity(quantity+1);
    }

    const DecrementQuantity=()=>{
        if (quantity==0){
            return;
        }
        setQuantity(quantity-1);
    }
  return (
    <>
   <div>
   <div className="card m-3" style={{ width: "18rem",maxHeight:"560px" }}>
          <img src={Food} className="card-img-top" alt="..."  style={{maxHeight:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est cum adipisci beatae, iure, iste excepturi consectetur dolor illum labore, unde perspiciatis vitae esse dolores molestiae provident aut? Adipisci, pariatur.
            </p>
             <div className="container">
                <div className="quantity">
                    <span>Quantity :</span>
                    <button className="Btn" onClick={DecrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className="Btn" onClick={IncrementQuantity}>+</button>
                </div>
                <div className="Size">
                <span>Size : </span>
                <select className="bg-white rounded m-2 p-2">
                    <option value="" selected disabled>Select Size</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                </select>
                </div>
             </div>
          </div>
        </div>
   </div>
    </>
  )
}
