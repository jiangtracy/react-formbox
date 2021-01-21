import Box from "./Box.js"
import NewBoxForm from "./NewBoxForm.js"
/* 
 The BoxList component will render all of the Box components along with the NewBoxForm component.

 props: None
 state: boxes [{id, width, color, height}, ...];
 App -> BoxList -> Box and NewBoxForm

 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (<ul>
      { boxes.map( b => {
        <Box id={b.id} color={b.color} width={b.width} height={b.height} />
      }) }
    </ul>
    )
  }

  

}

export default BoxList;