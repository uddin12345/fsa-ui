// function App(){
//     return <h1>hello react</h1>
// }

import React from 'react';

import Header from './Header';
import Footer from './Footer';

import Name from './Name';
import Counter from './utils/Counter';
import AutoCounter from './utils/AutoCounter';
import List from './utils/List';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.css';

import AppRoutes from './AppRoutes';



function App() {

    // const h1 = React.createElement('h1', {}, 'Hello React');
    // const img = React.createElement('img', { width: 100, height: 100, src:'./utils/download.jpg'  });
    // const div = React.createElement('div', {}, [h1]);

    // return div;
    return <div>
          
             <AppRoutes/>
            
             
             

        {/* <h1>Hello React</h1><img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'></img> */}
      
        
        
        
       
    </div>
}

export default App;