import './index.css';

import numeral from 'numeral';

const corseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${corseValue} for this awesome course`);