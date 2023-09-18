import React, { useState } from 'react'
import Header from './Header';
import Button from './Button';

const Counter = () => {
    const [count,setCount] = useState<number>(0);

    const handleClick =(value:number)=>{
            setCount(count+value);
    }

  return (
    <div>
      <Header label='Masai Counter' />
      <Header label={`${count}`} />
        <Button label='increment'  handleClick={()=>handleClick(1)}/>
        <Button label='decrement'  handleClick={()=>handleClick(-1)}/>

    </div>
  )
}

export default Counter
