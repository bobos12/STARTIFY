import React from "react";

export default function Modal({ show, title, children, onClose }){
  if(!show) return null;
  return (
    <>
      <div className="modal d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1050 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h5 className="modal-title">{title || "Modal"}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop-custom"></div>
    </>
  );
}
