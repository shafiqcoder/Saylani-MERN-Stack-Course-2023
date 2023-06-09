import qurbani from './qurbani.jpg'
export default function Donate(){
return (
  <>
    <div className="donatediv">
      <div className="donate">
        <input></input>
        <button>Blood Bank / Thalassemia Treatment</button>
        <button>Family Kifalat</button>
        <button>Medical</button>
        <button>Food</button>
        <button>Quick Donate</button>
      </div>
    </div>
    <img className="qurbani" src={qurbani} alt="qurbani"></img>
    <h1 className='whatwedo'>What We Are Doing</h1>
  </>
);
}