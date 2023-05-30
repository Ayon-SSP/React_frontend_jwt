import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import Layout from './hocs/Layout';

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/reset-password' element={<ResetPassword />} />
                <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                <Route exact path='/activate/:uid/:token' element={<Activate />} />
            </Routes>
        </Layout>
    </Router>
);



// working
// const App = () => (
//     <Router>
//         <Routes>
//             <Route path='/' element={<Home/>} />
//         </Routes>
//     </Router>
// );


export default App;