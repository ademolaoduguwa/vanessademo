import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Signup2 from '../components/Signup2';
import Signup2quick from '../components/Signup2quick';
// import Signin from '../components/Signin';
import Playspace from '../components/Playspace';
import Cuspace from '../components/Cuspace';
// import Register from '../components/Register';
import Registerquick from '../components/Registerquick';

import 'antd/dist/antd.css';


const Applicationroute = () => {
    
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Registerquick/>}/>
            <Route exact path="/registerquick" element={<Registerquick/>}/>
            <Route exact path="/signup2quick" element={<Signup2quick/>}/>
            <Route exact path="/playspace" element={<Playspace/>}/>
            <Route exact path="/myplacespace" element={<Cuspace/>}/>
            {/* <Route exact path="/fide/:fideId" element ={<Fide/>} render={props => (<Fide {...props} author="Ademola"/>)} />  */}
        </Routes>
    </Router>
    );

}
export default Applicationroute;



// const Applicationroute = () => {
    
//     return (
//     <Router>
//         <Routes>
//             <Route exact path="/" element={<Signup2/>}/>
//             <Route exact path="/Signup2" element={<Signup2/>}/>
//             <Route exact path="/Register" element={<Registerquick/>}/>
//             <Route exact path="/Playspace" element={<Playspace/>}/>
//             <Route exact path="/myplacespace" element={<Cuspace/>}/>
//             {/* <Route exact path="/fide/:fideId" element ={<Fide/>} render={props => (<Fide {...props} author="Ademola"/>)} />  */}
//         </Routes>
//     </Router>
//     );

// }
// export default Applicationroute;

