import logo from "./logo.png";
export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <a href="#about">Be a sponsor</a>
        </li>
        <li>
          <a href="#about">Donate now</a>
        </li>
        <li>
          <a href="#about">Bank details</a>
        </li>
        <li>
          <a href="#about">Contact us</a>
        </li>
        <li>
          <a href="#about">News</a>
        </li>
        <li>
          <a href="#about">Media</a>
        </li>
        <li>
          <a href="#contact">Services</a>
        </li>
        <li>
          <a href="#news">About</a>
        </li>
        <li>
          <a href="#news">Home</a>
        </li>
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
      </ul>
    </>
  );
}
