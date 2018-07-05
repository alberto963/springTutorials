import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import './index.css'


// ========================================

ReactDOM.render(
  <div className='panel'>
   <div className='panel-elem'>
    <Slider />
    <label>Slider</label>
    </div>
    <div className='panel-elem'>
    <Range />
    <label>Range</label>
    </div>
  </div>,
  document.getElementById('root')
);
