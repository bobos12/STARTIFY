import React, { useState, useEffect } from "react";

export default function ScrollTop(){
  const [show, setShow] = useState(false);
  useEffect(()=> {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show ? (
    <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="btn btn-primary" style={{ position:"fixed", right:16, bottom:20, zIndex:1060 }}>
      <i className="bi bi-arrow-up"></i>
    </button>
  ) : null;
}
