/* 
This Box component will display a div with a background color, width, and height based on the props passed to it.

props: color, width, and height
state: none
BoxList -> Box.js

*/

function Box({color, width, height}) {

  const style = {
    width,
    height,
    backgroundColor: color,
  }

  return (
    <li className="Box" style={style}></li>
  );
};

export default Box;