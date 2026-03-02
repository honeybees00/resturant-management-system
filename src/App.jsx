
import './App.css'
import { OrderPage } from './pages/OrderPage'

    function App(){
        return (
            <BrowserRouter>
<nav>
    <link to="/">Home</link>
    <link to="/Menu">Menu</link>
    <link to="/order"className='btn btn-info'>Order Now</link>
</nav>
<Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/'element={<Menu/>}/>
    <Route path="/order"element={<OrderPage/>}/>
</Routes>



            </BrowserRouter>
            
            
            
            
            
        )
        
        
    }
 export default App

 