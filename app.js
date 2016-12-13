var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8888));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function() {
    console.log('Expres server is running on port 8888!');
});