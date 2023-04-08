import React, { createContext, useState } from 'react';
import Toyota from './Toyota';
import Mishubishi from './Mishubishi';
import Lambargini from './Lambargini';
import BMW from './BMW';
//1
export const CarContext = createContext('black')
const ContextApi = () => {
    const [carName, setCarName] = useState('')
    return (
        <div className='my-container  mx-auto mt-8 border border-yellow-600 p-5'>
            <h3 className='text-3xl text-center mb-5'>All the best cars available</h3>
            <p className='text-xl mb-3'>Car Name: {carName}</p>
            <div className=' grid grid-cols-2 gap-3 '>
                {/* //2 */}
                <CarContext.Provider value={[carName,setCarName]}>
                    <Toyota></Toyota>
                    <Mishubishi></Mishubishi>
                    <Lambargini></Lambargini>
                    <BMW></BMW>

                </CarContext.Provider>


            </div>
        </div>
    );
};

export default ContextApi;