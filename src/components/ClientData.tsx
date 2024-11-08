'use client'

export default function ClientData( { userData }) {
  console.log('Loaded client page static data', userData)
  return (
    <div className='p-2 flex flex-col'>
      <span>First name: { userData.name }</span>
      <span>Last name: { userData.lastName }</span>
      <span>ID: { userData.id }</span>
    </div>
  )
}
