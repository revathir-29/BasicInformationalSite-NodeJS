// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req , res) => {
//     console.log('Request made');
//     //console.log(req);
//     console.log(req.method , req.url);
//     //set header content type
//     res.setHeader('Content-Type' , 'text/html');

//     let filePath = path.join(__dirname, '');

//     switch(req.url) {
//         case '/':
//             filePath =path.join(__dirname, 'index.html');
//             res.statusCode = 200;
//             break;
//         case '/about' :   
//             filePath = path.join(__dirname, 'about.html');
//             res.statusCode = 200;
//             break; 
//         case '/contact' :
//             filePath = path.join(__dirname, 'contact.html');
//             res.statusCode = 200;
//             break;     
//         default : 
//             filePath = path.join(__dirname, '404.html');
//             res.statusCode = 404;
//             break;
//     }

//     //send an html file
//     fs.readFile(filePath , 'utf8', (err , data) => {
//         if(err) {
//             console.log(err);
//             res.end();
//         } else{
//             // res.write(data);
//             // res.end();
//             res.end(data);
//         }
//     })

// });
// const port = process.env.PORT || 5000;
// server.listen(port, () => {
//     console.log('Listening for request on port 5000');
// });

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/index.html') {
    // Serve the index.html
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/about.html') {
    // Serve the about.html
    fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/contact.html') {
    // Serve the about.html
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }else {
    // Handle 404 errors for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
