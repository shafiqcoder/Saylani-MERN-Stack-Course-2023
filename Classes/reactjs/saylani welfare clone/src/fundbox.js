import fundbox1 from './images/fundbox1.jpeg';
import fundbox2 from "./images/fundbox2.jpeg";
import fundbox3 from "./images/fundbox3.jpeg";
export default function Fundbox() {
  return (
    <>
      <div className="fundbox-container">
        <div className="fundbox">
          <img className="box1" src={fundbox1} alt="fundabox1"></img>
          <h5 className="centered">R O Water Filter Plant</h5>
          <button className="fundbutton">Donate</button>
        </div>
        <div className="fundbox">
          <img className="box1" src={fundbox2} alt="fundabox1"></img>
          <h5 className="centered">IT Entrepreneurship Courses</h5>
          <button className="fundbutton">Donate</button>
        </div>
        <div className="fundbox">
          <img className="box1" src={fundbox3} alt="fundabox1"></img>
          <h5 className="centered">Zakat</h5>
          <button className="fundbutton">Donate</button>
        </div>
      </div>
    </>
  );
}
