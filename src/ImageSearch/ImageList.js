import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import './ImageList.css'


const App = (props) => {

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                {
                    props.images.map(({id,description,urls}) => (
                        <img 
                            alt={description} 
                            src={urls.regular} 
                            key={id} 
                            className="img-fluid"
                        />
                    ))
                }
              </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
