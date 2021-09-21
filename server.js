// '/' = 99 bottles w/ link that says 'take 1 pass it'. 
// links to /98 (/:number_of_bottles) (href = http://localhost:3000/${req.params.number_of_bottles - 1})
// new page says how many bottles w/ link 'take 1 pass it.
// subtract 1 from number until 0
// when number reaches 0, link to '/' for restart

const express = require('express');
const app = express();
const port = 3000;

//////////// phase 1
app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h2>99 Bottles of beer on the wall...</h2> <br
            <h3><a href="http://localhost:3000/98">Take one down, pass it around</a><h3>
        </body>
    </html>`);
});

//////////// phase 2
app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0) {
        res.send(`
    <html>
        <body>
            <h2>${req.params.number_of_bottles} Bottles of beer on the wall...</h2> <br
            <h3><a href="http://localhost:3000/${req.params.number_of_bottles - 1}">Take one down, pass it around</a><h3>
        </body>
    </html>`);
//////////// phase 3
    } else
        res.send(`
    <html>
        <body>
            <h2>Beer run...</h2> <br
            <h3><a href="http://localhost:3000/99">Nose goes!</a><h3>
        </body>
    </html>`);
});

app.listen(port, () => {
    console.log('listening on port', port);
});