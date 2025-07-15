import { useEffect, useRef } from 'react';

export const usePrev = (value) =>{
    const ref = useRef();
    console.log("ref1", ref.current);

    //it called after return statement
    //it will not cause re-render
    useEffect(()=>{
    console.log("ref2", ref.current);

        ref.current = value;
    },[value]);

    //return the previous value first then call useEffect
    console.log("ref3", ref.current);

    return ref.current;
}
