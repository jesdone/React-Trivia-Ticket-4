// import React from 'react'
// import { ReactDOM } from 'react';

const Catagories = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">
            <div className="card">
              <img
                sizes="w-75 l-75"
                src="https://media.timeout.com/images/105795964/750/422/image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Painting</h5>
                <p className="card-text">
                  Art trivia questions from the Painting Catagory.
                </p>
                <a href="./PaintQues.tsx" className="btn btn-primary">
                  Go To Questions
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                sizes="w-75 l-75"
                src="https://mymodernmet.com/wp/wp-content/uploads/2017/08/Famous-Sculptures-Louise-Bourgeois.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sculpture</h5>
                <p className="card-text">
                  Art trivia questions from the Sculpture Catagory.
                </p>
                <a href="#" className="btn btn-primary">
                  Go To Questions
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                sizes="w-75 l-75"
                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/ec/39/d6.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Architecture</h5>
                <p className="card-text">
                  Art trivia questions from the Architecture Catagory.
                </p>
                <a href="#" className="btn btn-primary">
                  Go To Questions
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                sizes="w-75 l-75"
                src="https://www.southernliving.com/thmb/wsTKCknvqDW-B5ASPyZLv4zufQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-183822187-1-709a5ded972a426a9e214eba1f81c8a4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Literature</h5>
                <p className="card-text">
                  Art trivia questions from the Literature Catagory.
                </p>
                <a href="#" className="btn btn-primary">
                  Go To Questions
                </a>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagories;
