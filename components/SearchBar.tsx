"use client"

import React, { useState } from 'react'

import SearchManufacturer from './SearchManufacturer'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import SearchButton from './SearchButton'

const SearchBar = ({
  setManufacturer, setModel
}: any) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')

    const [searchModel, setSearchModel] = useState('')

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if(searchManufacturer === '' && searchModel === ''){
        return alert('Please fill in the sear')
      }

      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }

    // const updateSearchUrl = (model: string, manufacturer: string) => {
    //   const searchParams = new URLSearchParams(window.location.search)

    //   if(model) {
    //     searchParams.set('model',model)
    //   }
    //   else{
    //     searchParams.delete('model')
    //   }

    //   if(manufacturer) {
    //     searchParams.set('manufacturer',manufacturer)
    //   }
    //   else{
    //     searchParams.delete('manufacturer')
    //   }

    //   const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    //   router.push(newPathName)
    // }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                selected={searchManufacturer}
                setSelected={setSearchManufacturer}
            />
            <SearchButton
              otherClasses="sm:hidden"
            />
        </div>
        <div className='searchbar__item'>
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car model'
          />
          <input type="text" name="model" value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
          <SearchButton
            otherClasses="sm:hidden"
          />
        </div>
        <SearchButton
          otherClasses="max-sm:hidden"
        />
    </form>
  )
}

export default SearchBar