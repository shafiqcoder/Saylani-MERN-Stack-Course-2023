import otherprojects from './images/otherprojects.jpg';

export default function Otherprojects(){
return (
  <>
    <div className="otherprojects">
      <img src={otherprojects} alt="otherprojects"></img>
      <div className="otherproectstopleft">
        <h5>
          Saylani serve almost 300,000 <br></br> underprivileged on daily basis
        </h5>
      </div>
    </div>
    <div className="otherprojectsparagraph">
      <h1>Other Projects</h1>
      <h3>Hepatitis</h3>
      <p>
        Saylani Welfare has also set up a clinic for the best treatment of
        hepatitis patients where hepatitis patients are being treated
      </p>
      <h1>Other Projects</h1>
      <h3>Housing Society</h3>
      <p>
        Saylani Welfare is also providing its own home facility for the homeless
        people. So far, thousands of houses and flats have been constructed and
        given in easy installments
      </p>
      <h1>Other Projects</h1>
      <h3>IT Literacy</h3>
      <p>
        We are committed to developing more than 1 million software developers,
        which will add about 100 billion annually to Pakistan's economy and help
        ease the debt burden on Pakistan
      </p>
    </div>
  </>
);
}