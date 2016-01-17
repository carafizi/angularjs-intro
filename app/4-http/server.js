// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

//var notes = [
//    {id: 1, label: 'First Note', author: 'David'},
//    {id: 2, label: 'Second Note', author: 'Brad'},
//    {id: 3, label: 'Middle Note', author: 'Martin'},
//    {id: 4, label: 'Last Note', author: 'Tomas'},
//    {id: 5, label: 'Really the last Note', author: 'Xavi'}
//
//];
//var lastId = 6;
//
//router.get('/note', function(req, res) {
//    res.send(notes);
//});
//router.post('/note', function(req, res) {
//    var note = req.body;
//    note.id = lastId;
//    lastId++;
//    notes.push(note);
//    res.send(note);
//});
//
//
//router.post('/note/:id/done', function(req, res) {
//    var noteId = req.params.id;
//    var note = null;
//    for (var i = 0; i < notes.length; i++) {
//        if (notes[i].id == req.params.id) {
//            note = notes[i];
//            break;
//        }
//    }
//    note.label = 'Done - ' + note.label;
//    res.send(notes);
//});
//
//router.get('/note/:id', function(req, res) {
//    for (var i = 0; i < notes.length; i++) {
//        if (notes[i].id == req.params.id) {
//            res.send(notes[i]);
//            break;
//        }
//    }
//    res.send({msg: 'Note not found'}, 404);
//});
//router.post('/note/:id', function(req, res) {
//    for (var i = 0; i < notes.length; i++) {
//        if (notes[i].id == req.params.id) {
//            notes[i] = req.body;
//            notes[i].id = req.params.id;
//            res.send(notes[i]);
//            break;
//        }
//    }
//    res.send({msg: 'Note not found'}, 404);
//});
//
//router.post('/login', function(req, res) {
//    console.log('API LOGIN FOR ', req.body);
//    res.send({msg: 'Login successful for ' + req.body.username});
//});


//----------------- Members--------------------------
var members = [
    {id: 1, name: 'Kate', lastname: 'Austine', age:33, status:true},
    {id: 2, name: 'Jack', lastname: 'Sheppard', age:45, status:false},
    {id: 3, name: 'James', lastname: 'Ford', age:40, status:true},
    {id: 4, name: 'John', lastname: 'Lock', age:60, status:false},
    {id: 5, name: 'Desmond', lastname: 'Hume', age:40, status:false}

];
var lastMemberId = 6;

router.get('/members', function(req, res) {
    res.send(members);
});

router.post('/members', function(req, res) {
    var member = req.body;
    member.id = lastMemberId;
    lastMemberId++;
    members.push(member);
    res.send(member);
});

router.post('/members/:id/done', function(req, res) {
    var memberId = req.params.id;
    var member = null;
    for (var i = 0; i < members.length; i++) {
        if (members[i].id == req.params.id) {
            member = members[i];
            break;
        }
    }
    member.name = 'Done - ' + member.name;
    res.send(members);
});

router.get('/members/:id', function(req, res) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].id == req.params.id) {
            res.send(members[i]);
            break;
        }
    }
    res.send({msg: 'Member not found'}, 404);
});

router.post('/members/:id', function(req, res) {
    for (var i = 0; i < members.length; i++) {
        if (members[i].id == req.params.id) {
            members[i] = req.body;
            members[i].id = req.params.id;
            res.send(members[i]);
            break;
        }
    }
    res.send({msg: 'Member not found'}, 404);
});

router.post('/login', function(req, res) {
    console.log('API LOGIN FOR ', req.body);
    res.send({msg: 'Login successful for ' + req.body.username});
});


app.use('/api', router);



app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
