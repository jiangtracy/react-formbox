import "./Box.css";

/* 
This Box component will display a div with a background color, width, and height based on the props passed to it.

props: color, width, and height
state: none
BoxList -> Box.js

*/

function Box({color, width, height, removeBox}) {

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  }



  return (
    <div className="Box">
      <li className="Box" style={style}></li>
      <button onClick={removeBox}>X</button>
    </div>
  );
};

export default Box;