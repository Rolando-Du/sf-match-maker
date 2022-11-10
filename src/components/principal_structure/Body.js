import { Route, Routes } from 'react-router-dom';

import '../../assets/stylesheets/principal_structure/Body.css'

import ArmarGrupos from '../active_components/ArmarGrupos';
import CargarEstudiante from '../active_components/CargarEstudiante';
import CargarHabilidades from '../active_components/CargarHabilidades';
import Home from '../active_components/Home';
import Login from '../active_components/login_components/Login';
import Register from '../active_components/login_components/Register';
import VerEstudiantes from '../active_components/VerEstudiantes';
import VerGrupos from '../active_components/VerGrupos';

import { useState } from 'react';

import firebaseApp from '../../Firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const Body = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (userFromFirebase) => {
        userFromFirebase ? setUser(userFromFirebase) : setUser(null);
        console.log(userFromFirebase);
    })
    
    return (
        <div className="body-cont">
          {/*   Con esta disposición condicional de rutas hago que cuando el hook Login
            esta en true se acceda a ciertas rutas, cuando esta en false a otras. */}
            <Routes>
                {user ?
                    <>
                        <Route path='/' element={<Home />} />
                        <Route path='/cargar-estudiantes' element={<CargarEstudiante />} />
                        <Route path='/cargar-habilidades' element={<CargarHabilidades />} />
                        <Route path='/armar-grupos' element={<ArmarGrupos />} />
                        <Route path='/ver-estudiantes' element={<VerEstudiantes />} />
                        <Route path='/ver-grupos' element={<VerGrupos />} />
                        <Route path='*' element={<Home />} />


                    </>
                    :
                    <>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<Register />} />
                        <Route path='/' element={<Login />} />
                    </>
                }
            </Routes>

        </div>
    )
}
export default Body;