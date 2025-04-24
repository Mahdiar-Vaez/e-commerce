import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SortOption() {
  const [searchParams,setSearchParams]=useSearchParams()
  function handleSelect(e){
    const sortBy=e.target.value
    searchParams.set('sortby',sortBy)
    setSearchParams(searchParams)
    
  }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select
        name="sort"
        onChange={handleSelect}
        value={searchParams.get('sortby')}
        className='border text-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition'
        defaultValue="date-oldest"
      >
        <option value="" hidden disabled>مرتب‌سازی بر اساس...</option>
        <option value="price-asc">قیمت (کم به زیاد)</option>
        <option value="price-desc">قیمت (زیاد به کم)</option>
        <option value="name-asc">نام (A-Z)</option>
        <option value="name-desc">نام (Z-A)</option>
        <option value="date-newest">جدیدترین</option>
        <option value="date-oldest">قدیمی‌ترین</option>
        <option value="popularity">محبوب‌ترین</option>
      </select>
    </div>
  )
}