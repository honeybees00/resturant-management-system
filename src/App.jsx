import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { Menu } from './pages/Menu'
import './App.css'
import { OrderPage } from './pages/OrderPage'
import {menu} from './pages/Menu'
import {home} from './pages/Home'

    function App(){
        return (
            <>
            <nav>
                <link to="/">Home</link>
    <link to="/Menu">Menu</link>
    <link to="/order"className='btn btn-info'>Order Now</link>
    </nav>
    

            <HashRouter>

    
<Routes>
    <Route path='/home'element={<Home/>}/>
    <Route path='/menu'element={<Menu/>}/>
    <Route path='/order'element={<OrderPage/>}/>
</Routes>


</HashRouter>
            
           
     </>       
            
            
    
        
        )   
    }
 export default App


 