import first from './first.png';
import second from './second.png';
import third from "./third.png";
import fourth from "./fourth.png";
import fifth from "./fifth.png";

export default function Whatwedo(){
return (
  <div className="whatwedo">
    <img className="whatwedoimg" src={first} alt="first"></img>
    <img className="whatwedoimg" src={second} alt="first"></img>
    <img className="whatwedoimg" src={third} alt="first"></img>
    <img className="whatwedoimg" src={fourth} alt="first"></img>
    <img className="whatwedoimg" src={fifth} alt="first"></img>
  </div>
);
}