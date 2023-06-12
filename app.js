const http = require('http');
const serve =  http.createServer((req, res) => {
    res.write('welcom to our home page');
    res.end();
})
serve.listen(5000)

