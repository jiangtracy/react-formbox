import { useState } from "react";
import Box from "./Box.js"
import NewBoxForm from "./NewBoxForm.js"
import { v4 as uuid } from 'uuid'; 
import "./BoxList.css";

/* 
 The BoxList component will render all of the Box components along with the NewBoxForm component.

 props: None
 state: boxes [{id, width, color, height}, ...];
 App -> BoxList -> Box and NewBoxForm

 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** 
   * Renders list of Box components 
   **/  
  function renderBoxes() {
    return (<ul>
      { boxes.map( b => {
        return (
        <Box 
          key={b.id} 
          color={b.color} 
          width={b.width} 
          height={b.height}
          removeBox={ (evt) => removeBox(b.id)} 
        />
        )
      }) }
    </ul>
    )
  }

  /** Adds a new box object to list of boxes in state */  
  function addBox(boxData) {
    let newBox = { ...boxData, id: uuid() };
    setBoxes(prevBoxes => [...prevBoxes, newBox]);
  }

  /** Removes the box object matching id from list of boxes in state */  
  function removeBox(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.filter(box => box.id !== id);
    });
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )
}

export default BoxList;