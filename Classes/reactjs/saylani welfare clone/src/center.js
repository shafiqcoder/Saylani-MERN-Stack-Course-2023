import centerImg from './center.png'
export default function Center(){
return (
  <>
    <div className="centerdiv">
      <img className="centerimg" src={centerImg} alt="centerdiv"></img>
      <p className="centerpara">
        Welcome to the Saylani Welfare The largest NGO offering free Monthly
        family support,| Saylani Welfare is on the ground and already working
        with local communities to assess how best to support underprivileged
        families in more than 63 areas of day to day lives.
      </p>
    </div>
    <button className="centerbutton">Explore More</button>
  </>
)
}