"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import ArenaList from "./_components/ArenaList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [arenaList,setArenaList]=useState([]);
  useEffect(()=>{
    getArenaList();
  },[])
  const getArenaList=()=>{
    GlobalApi.getArenaList().then(resp=>{
      console.log(resp.data.data);
      setArenaList(resp.data.data);
    })
  }
  return (
    <div>
        {/* Hero Section  */}
        <Hero/>

        {/* Search bar + Categories  */}
        <CategorySearch/>

        {/* Popular Arena List  */}
        <ArenaList arenaList={arenaList}/>
    </div>
  );
}
