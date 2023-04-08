import React, { useContext } from 'react';
import { CarContext } from './ContextApi';

const LambarginiGolardho = () => {
    const [carName,setCarName] = useContext(CarContext)
    return (
        <div>
            <h2>This is a child of lambergini called golardho</h2>
            <button 
            onClick={()=>setCarName('golardho')}
            
            className='btn bg-red-600'>Set car name</button>
        </div>
    );
};

export default LambarginiGolardho;