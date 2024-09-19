"use client";
// import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from 'next/navigation';



function reload () {
    const router = useRouter()
  return (
    router.push('../')
  );
}

export default reload;

