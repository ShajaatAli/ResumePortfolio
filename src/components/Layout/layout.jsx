import './layout.scss'; 
import Sidebar from '../Sidebar/sidebar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return ( 
    <>
    <div className="App">
        <Sidebar />
        <div className='page'>
            <Outlet />
        </div>
    </div>
    </>
    )
   
}

export default Layout