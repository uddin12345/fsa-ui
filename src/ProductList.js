import ProductItem from './ProductItem';
import './ProductList.css';
import ShouldRender from './utils/ShouldRender';

const ProductList = (id) => {
    const cart = [];

    const onAddCartClick = () =>{
        console.log('Added to cart',id);
    }
    
    const products = [
        { id: 1, brand: 'Apple',  model: 'Iphone 13',inStock: true, price: 10000, img : 'https://images.hindustantimes.com/tech/img/2021/09/24/original/iPhone_13_Pro_Max_(4)_1632469213724.jpg'},
        { id: 2, brand: 'Apple',  model: 'Iphone 12', inStock: false, price: 11000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKT1qXKRWROQrPPuarmah8D4sj3L2UXVSJGJ2s6dyuH6b-0Aenl_Tkf-acCp84JkW7usU&usqp=CAU'},
        { id: 3, brand: 'Apple',  model: 'Iphone 12 max', inStock: true, price: 13000,img: 'https://www.cnet.com/a/img/resize/c12b45a136d5beee23e94504d505f0a69e0dd146/hub/2020/11/09/d0f15941-5210-4a0b-ab66-78a2e58dd245/16-iphone-12-pro-max.jpg?auto=webp&width=1092'}
    ];

    

    return <div>
        <ShouldRender>
            <h1>Hello</h1>
            <h2>Hello 2</h2>
        </ShouldRender>
        {products.map(item => <ProductItem key={item.id} product={item} onAdd ={onAddCartClick}/>)}
    


</div>



}
export default ProductList;