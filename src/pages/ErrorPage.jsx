import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const {error,status}=useRouteError();
  return (
    <div>ErrorPagebb</div>
  )
}
