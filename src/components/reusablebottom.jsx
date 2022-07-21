import React,{useState} from 'react'
import "./reusablebutton.css"
import Sheet from "react-modal-sheet";


export default function ReusableBottom() {
  const [isOpen,setOpen]=useState(false)
  return (
    <div>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>BOTTOM SHEET OPEN</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
      <button className="btn-reuablebutton" onClick={() => setOpen(true)}>
        OPEN BOTTOM SHEET
      </button>
    </div>
  );
}
