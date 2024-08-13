import React from 'react'
import Image from 'next/image';

interface IconeProps{
    params:{
             image: string ,
             onClick: () => void,
             width:number,
             height:number
    } 
  }
  const ClickableIcon: React.FC<IconeProps> = ({ params }) => {
    return (
    <button onClick={params.onClick}>
        <Image
           src={params.image}
           alt='icon'
           width={params.width}
           height={params.height}
           />
     </button>
  )
}

export default ClickableIcon


 
