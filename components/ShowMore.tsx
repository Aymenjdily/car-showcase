"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

import { ShowMoreProps } from '@/types'

import CustomButton from './CustomButton'

import { updateSearchUrl } from '@/utils'

const ShowMore = ({
    pageNumber,
    isNext,
    setLimit
} : ShowMoreProps) => {

    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10

        // const newPathName = updateSearchUrl('limit', String(newLimit))

        // router.push(newPathName)

        setLimit(newLimit)
    }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
                title="Show More"
                btnType='button'
                containerStyles='bg-primary-blue rounded-full text-white'
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore