"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/contacts');
  }, []);  
  
  return null;
}