'use client'
import { useFormStatus } from 'react-dom'



export default function SearchButton() {


  const status = useFormStatus();
  return (
    <button type="submit" className="w-16 bg-sky-800 text-slate-50 rounded py-0.5 px-1 text-sm ">{status.pending ? '검색중' : '검색'}</button>
  )
}