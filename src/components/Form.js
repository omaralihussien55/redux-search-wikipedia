import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../redux/searchSlice'
import { search } from '../redux/searchSlice'
const Form = () => {
    const [search_input,setSearch_input] = useState("")
    const [find,setFind] = useState(false)
    const {lang} = useSelector((state)=> state.arr)
    const dispatch= useDispatch()

  useEffect(()=>{
    if(search_input.charCodeAt(0) <= 122){
        dispatch(changeLang(false))
       }else if (search_input.charCodeAt(0) >= 1400){
        dispatch(changeLang(true))
       }
      
  },[dispatch,search_input])  
const HandleStateSearch = (e)=>{
    setSearch_input(e.target.value)
    setFind(false)
}


    const HandleSubmitSearch=(e)=>{
        e.preventDefault()
if(search_input===""){
setFind(true)
}else{
    dispatch(search({ser:search_input,lang:lang}))
}
    }

  return (
    <div className='' >
        <div className='mt-4 col-11 col-md-8 mx-auto'>
             <form className='w-100 parent-input' onSubmit={HandleSubmitSearch}>
               <div className='warp-input'>
               <input type='text' style={{direction:lang?"rtl":"ltr"}} 
               value={search_input} placeholder={lang?"ابحث فى ويكيبديا":"search in wikipedia"}
                className='input-serach w-100 border-0'
               onChange={HandleStateSearch}
               />
               </div>
                <button type='submit' className='border-0 rounded-0  btn btn-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </button>
             </form>
        </div>

        <div className='text-center p-2 text-danger'>
            {find&&"input empty "}
        </div>
    </div>
  )
}

export default Form