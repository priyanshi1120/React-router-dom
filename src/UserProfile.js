import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const params = useParams();
  const{name} = params;
  return (
    <>
      <h1> Hello {name}</h1>
    </>
  )
}
