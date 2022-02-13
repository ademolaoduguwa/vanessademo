import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup2 from '../components/Signup2';
// import Signin from '../components/Signin';
import Playspace from '../components/Playspace';
import Cuspace from '../components/Cuspace';
import Register from '../components/Register';

import 'antd/dist/antd.css';


const Applicationroute = () => {
    
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Signup2/>}/>
            <Route exact path="/Signup2" element={<Signup2/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/Playspace" element={<Playspace/>}/>
            <Route exact path="/myplacespace" element={<Cuspace/>}/>
            {/* <Route exact path="/fide/:fideId" element ={<Fide/>} render={props => (<Fide {...props} author="Ademola"/>)} />  */}
        </Routes>
    </Router>
    );

}
export default Applicationroute;

