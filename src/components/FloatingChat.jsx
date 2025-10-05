import React, { useState } from "react";
import Modal from "./Modal";

export default function FloatingChat(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn-primary rounded-circle" style={{ position:"fixed", right:16, bottom:160, zIndex:1060, width:56, height:56 }} onClick={()=>setOpen(true)}>
        <i className="bi bi-chat-dots"></i>
      </button>
      <Modal show={open} onClose={() => setOpen(false)} title="Chat with us">
        <p>Hi! This is a demo chat. Replace with real widget or integration.</p>
        <button className="btn btn-outline-secondary" onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
}
