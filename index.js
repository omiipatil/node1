const http =require('http');
//require() is built in function to include function it is very important  to creating server


http.createServer((request,response)=>{   //here creating a server this is Es5 version

 response.write("Hello World");  //here sending response backend to frontend here also send any type like json and html file

response.write("<h1>HELLO DUNIYA</h1>") //send data in html formate

response.write(JSON.stringify({name:"Onkar",age:23}))  //send data  in json formate


response.end();  //this is require  to end the server
}).listen(8000);  //and this is port number where the code run meance type in url 8000 then run the code


//any change in this code then require to restart the server
