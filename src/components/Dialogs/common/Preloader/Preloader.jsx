import React from 'react';
import preloader from "../../../../assets/images/aug-4-2017-6-11-pm.gif";


let Preloader = (props) => {
  return <div>
    <img src={preloader} style={{width: '150px', height: '150px'}}/>
  </div>;
};

export default Preloader;