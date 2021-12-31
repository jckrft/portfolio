import "../assets/css/Landing.css";
// import flower from '../assets/images/flower.png'

export default function Landing() {
  return (
    <div className="landing-div">
      <div className="landing">
      <div className="greeting">
        <h1 className="hi">hi!</h1>
        <h1 className="im">i'm</h1>
      </div>
      <div className="name-description">
      <h1 className="description">software engineer</h1>
        <h1 className="jackie">jackie</h1>
        </div>
        </div>
      {/* <h1 className='name'>jacquelyn kraft</h1> */}
      {/* <img
        className='flower'
        src={flower} alt='flower' /> */}
    </div>
  );
}
