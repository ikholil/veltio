import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            <main>{children}</main>
       
            
        </>
    );
};

export default Layout;