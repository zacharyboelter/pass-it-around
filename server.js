// '/' = 99 bottles w/ link that says 'take 1 pass it'. 
// links to /98 (/:number_of_bottles)
// new page says how many bottles w/ link 'take 1 pass it.
// subtract 1 from number until 0
// when number reaches 0, link to '/' for restart

const express = require('express');
const app = express();
const port = 3000;



app.listen(port, () => {
    console.log('listening on port', port);
});