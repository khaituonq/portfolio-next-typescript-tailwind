'use client'

import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect'

interface ReadMoreProps {
  children: React.ReactNode
}

const ReadMore: React.FC<ReadMoreProps> = ({
  children
}) => {
  const text: any = children
  const [isReadMore, setIsReadMore] = useState(true)

  useEffect(() => {
    setIsReadMore(!isMobile)
  }, [isMobile]);

  const handleToggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <div className="text-lg text-color2">
      {isReadMore ? `${text.slice(0, 300)}...` : text}
      <div 
        onClick={handleToggleReadMore}
        className="font-bold text-color1 inline cursor-pointer"
      >
        {isReadMore ? ' Read more' : ' Show less'}
      </div>
    </div>
  );
}

export default ReadMore;