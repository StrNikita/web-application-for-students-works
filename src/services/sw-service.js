const express = require("express");
const multer  = require("multer");

const fs = require('fs');
  
const app = express();
const upload = multer();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'groups')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
let upload2;
let cpUpload;



app.use(express.static(__dirname));


app.post('/createGroup', upload.none(), (req, res, next) => {
    console.log('hello');
    const body = req.body;
    if (!fs.existsSync('groups/' + body.groupYear)) {
        fs.mkdirSync('groups/' + body.groupYear);
    }
    if (!fs.existsSync('groups/' + body.groupYear + '/' + body.groupName)) {
        fs.mkdirSync('groups/' + body.groupYear + '/' + body.groupName);
    }
    res.sendStatus(200);
});

app.post('/getYear', upload.none(), (req, res, next) => {
    const files = fs.readdirSync(__dirname + '/groups');
    
    const data = {
        year: files
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});


app.post('/getGroups', upload.none(), (req, res, next) => {
    const files = fs.readdirSync(__dirname + '/groups/' + req.body.year)

    const data = {
        groups: files
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});

app.post('/updateConfig', upload.none(), (req, res, next) => {
    body = req.body;
    if (!fs.existsSync('groups/' + body.year + '/' + body.group + '/' + body.name)) {
        fs.mkdirSync('groups/' + body.year + '/' + body.group + '/' + body.name);
    }
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'groups/' + body.year + '/' + body.group + '/' + body.name)
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      });
    upload2 = multer({ storage: storage });
    cpUpload = upload2.fields([{ name: 'year', maxCount: 1 },{ name: 'group', maxCount: 1 }, { name: 'fileData', maxCount: 3 }]);

    app.post('/uploadFiles', cpUpload, (req, res, next) => {
        res.sendStatus(200);
    });
});




app.listen(3000);