import http from "http"



http.createServer(
    function (req, res) {
        res.write("Api is running")
        res.end()
    }


).listen(8080);
/*

http.createServer(
    function (req, res) {
        res.writeHead(200, {
            "content-type": "text/html"
        }),
            res.write("Html Is Rocking");
        res.end();
    }


).listen(8000);

http.createServer(
    function (req, res) {

        res.write(req.url);
        res.end();
    }


).listen(8000);
*/




//console.log("hello gfjggh");
//http://localhost:8080/
//tsc.cmd --init
// for riunning server npm run dev