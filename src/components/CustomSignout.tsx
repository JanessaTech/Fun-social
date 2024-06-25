"use client"
import { SignedOut } from '@clerk/nextjs'
import React from 'react'

const CustomSignout = ({children}: {children: React.ReactNode}) => {
  return (
    <SignedOut>
        {children}
    </SignedOut>
  )
}

export default CustomSignout