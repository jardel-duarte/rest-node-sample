const app   = require('../src/app');
const port  = normalizaPort(process.env.PORT || '3000');
const https = require('https');
const fs    = require('fs');

function normalizaPort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }

    return false;
}

const httpsServer = https.createServer({
    key:  fs.readFileSync('/home/marden/Projects/contabilone/dispatcher/localhost.key'),
    cert: fs.readFileSync('/home/marden/Projects/contabilone/dispatcher/localhost.crt')
}, app);

/**httpsServer.listen(9443, () => {
    console.log(`HTTPS Server running on port 9443`)
});**/

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})
