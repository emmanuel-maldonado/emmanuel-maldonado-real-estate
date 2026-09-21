"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal(){
  const pathname=usePathname();
  useEffect(()=>{
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selectors=[".quiet-intro",".services article",".about > *",".resources > *",".featured-article > *",".service-area-heading > *",".city-accordions details",".contact > *",".footer-main > *"];
    const elements=[...document.querySelectorAll<HTMLElement>(selectors.join(","))];
    if(reduced){elements.forEach((element)=>element.classList.add("is-revealed"));return;}
    elements.forEach((element,index)=>{
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay",`${Math.min(index%4,3)*70}ms`);
    });
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -7% 0px"});
    elements.forEach((element)=>observer.observe(element));
    return()=>observer.disconnect();
  },[pathname]);
  return null;
}
