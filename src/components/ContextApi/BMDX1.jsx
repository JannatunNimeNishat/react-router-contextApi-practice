import React, { useContext } from 'react';
import { CarContext } from './ContextApi';

const BMDX1 = () => {
    const [carName,setCarName] = useContext(CarContext)
    return (
        <div>
            <h2>THis is BMW THE X1</h2>
            <button 
            onClick={()=>setCarName('BMW THE X1')}
            
            className=' btn bg-blue-600 '>Set car name</button>
        </div>
    );
};

export default BMDX1;