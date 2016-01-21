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


//----------------- Members--------------------------
var members = [
    {id: 1, name: 'Kate', lastname: 'Austine', age:33, status:true},
    {id: 2, name: 'Jack', lastname: 'Sheppard', age:45, status:false},
    {id: 3, name: 'James', lastname: 'Ford', age:40, status:true},
    {id: 4, name: 'John', lastname: 'Lock', age:60, status:false},
    {id: 5, name: 'Desmond', lastname: 'Hume', age:40, status:false}

];
var lastMemberId = 6;


//-----------------REST API------------------------------------

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
