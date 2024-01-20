// import React from 'react'

const Catagories = () => {
  return (
    <>
    <div className="card width: 2 rem;"> 
      <img
        src="https://media.timeout.com/images/105795964/750/422/image.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Paintings</h5>
        <p className="card-text">
          Art trivia questions from the Paintings Catagory.
        </p>
        <a href="#" className="btn btn-primary">
          Go To Questions
        </a>
      </div>
    </div>



<div className="card width: 2 rem;"> 
<img
  src="https://mymodernmet.com/wp/wp-content/uploads/2017/08/Famous-Sculptures-Louise-Bourgeois.jpg"
  className="card-img-top"
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Sculptures</h5>
  <p className="card-text">
    Art trivia questions from the Sculptures Catagory.
  </p>
  <a href="#" className="btn btn-primary">
    Go To Questions
  </a>
</div>
</div>


</>
  );
};




export default Catagories;
