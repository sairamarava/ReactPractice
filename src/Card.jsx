import capPic from './assets/captain america.jpg' 
function Card() {
  return (
    <div className="card">
      <img className='card-img' src={capPic} alt="Profile pic" />
      <h2 className='card-title'>Sai Ram</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
        quos!
      </p>
    </div>
  );
}
export default Card;
