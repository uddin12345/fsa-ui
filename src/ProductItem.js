const ProductItem = ({product,onAdd}) => {
   
  return<div className="col-md-3">
         <div style = {{margin:'30px'}}className="card">

             <div className="card-header">
             <span className="card-title">{product.brand}{product.model}</span>


             </div>

         <img className="card-img-top" src = {product.img}/>

         <div className="card-body">
             <hr/>
                
         
           <b>${product.price}</b>
           <hr/>

           <h6>
               <label>In stock?</label>
               <input disabled type="checkbox" checked = {product.inStock}/>
           </h6>

         </div>
         <div className="card-footer">
             <button disabled={!product.instock} className="btn btn-danger btn-sm" onClick={onAdd}>
                 Add to cart
                 
                 <i className="fa fa-shopping-cart"></i>
                 
                 
                 </button>

         </div>

     </div>

 </div>
} 
export default ProductItem;