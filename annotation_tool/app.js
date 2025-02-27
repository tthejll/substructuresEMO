var express = require("express");
const cors = require("cors");

var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var fs = require("fs");
//var multer  = require('multer');


//var sphp = require('sphp');


//app.use(sphp.express('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/video_annotation.html");
});

app.post('/public', (req, res) => {
    const { date, vidName, annotator, annotations } = req.body;
    const { authorization } = req.headers;
    let vidNameEdit = vidName.replace(/\./g, "-")
    let dateEdit = date.replace(/[^a-zA-Z0-9]/g,'-')
    fname = 'annotations/' + annotator + '_' + vidNameEdit + '_' + dateEdit + '.txt';
    console.log(fname);
    fs.writeFile(fname, JSON.stringify(annotations), err => {
	if (err) {
	    console.error(err);
	}
	// file written successfullya
    });
    console.log(req.body);
});

// app.get("/*.html", (req, res) => {
//     res.sendFile(__dirname + "/video_annotation.html");
// });


// //app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));

// app.get("/*.js", (req, res) => {
//     res.sendFile(__dirname + "/video_annotation.html");
// });
// app.get("/*.css", (req, res) => {
//     res.sendFile(__dirname + "/video_annotation.html");
// });

 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});



