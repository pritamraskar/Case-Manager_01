'use client';

import {useRouter} from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  // For now we are making a redirection to the Logi page instead of the home page
  useEffect(() => {
    router.push('/login')
  }, [router])
  
  return (
    <main>
      Home Page
    </main>
  )
}
