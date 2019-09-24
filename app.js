var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url === '/notify') {
        var notifier = require('node-notifier');
        //notifier.notify('Message');

        // Object
        notifier.notify({
            title: 'Hi ganda!',
            message: 'Anjan na siya! Haha!'
        });
    } else if (req.url === '/diana') {
        res.write('oh?');
    } else {
        res.write(req.url);
    }

    res.end();
}).listen(8080);