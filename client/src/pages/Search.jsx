import React from 'react'

export default function Search(){
    return(
        <div className="flex flex-col md:flex-row">
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form className='flex flex-col gap-8'>
                    <div className="flex item-center gap-2">
                    <label className="whitespace-nowrap font-semibold">Search Term:

                    </label>
                    <input type="text"
                    id="searchTerm"
                    placeholder="Search..."
                    className="border rounded-lg p-3 w-full"></input>

                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Type:</label>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='all' className='w-5' />
                            <span>Rent & Sale</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='rent' className='w-5' />
                            <span>Rent</span>
                        </div>                   
                        <div className='flex gap-2'>
                            <input type='checkbox' id='Sale' className='w-5' />
                            <span>Sale</span>
                        </div>                    
                        <div className='flex gap-2'>
                            <input type='checkbox' id='Offer' className='w-5' />
                            <span>Offer</span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Amenities:</label>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='Parking' className='w-5' />
                            <span>Parking</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='Finished' className='w-5' />
                            <span>Finished</span>
                        </div>                      
                    </div>
                    <div className='flex items-center gap-2'>
                        <label className='font-semibold'>Sort:</label>
                        <select id='sort_order' className='border rounded-lg p-3'>
                            <option>Price high to low</option>
                            <option>Price low to high</option>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'> SEARCH </button>
                </form>
            </div>
            <div className="">
                <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listing result:</h1>
            </div>
        </div>
    )
}