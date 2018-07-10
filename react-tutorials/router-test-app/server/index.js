const express = require('express')
const app = express();
const path = require('path')

app.use('/',express.static(path.resolve(__dirname,'../build')));
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') {
        console.log('여긴 들어오면 안돼')    
        return next();
    }

    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
