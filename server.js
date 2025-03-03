import http from 'node:http';
const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('nHello There\n');
});
server.listen(5000, ()=>{console.log('Server running on port 5000')});