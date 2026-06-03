import React from 'react'
import { FaGithub } from "react-icons/fa";

const Heading = () => {
  return (
    <div>
        <div>
            <span className='flex justify-between items-center px-20 py-2.5'>
                <h2 className='font-heading text-3xl text-smoky font-bold'>GitLook</h2>
                <span className='flex gap-4'>
                <h2 className='font-body text-sm text-olive'>Explore github profiles with ease.</h2>
                <FaGithub size={20} />
                </span>
                </span>
                <div className="border-t border-bone text-olive-400"></div>
        </div>
      
    </div>
  )
}

export default Heading
