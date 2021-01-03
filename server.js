'use strict';
var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;
var ImportHtml = require('./.txt');
var events = require('events');
var formidable = require('formidable');
var mysql = require('mysql');
const { Pool, Client } = require('pg')

//hi
http.createServer(function (req, res)
{
    if (req.url == '/marshal') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write('Sup?');
    }
    else
    {

        //Assign incoming message
        /*incomingmessage = url.parse(req.url, true);*/

        res.writeHead(200, { "Content-Type": "text/html" });
        //res.write('<!DOCTYPE html><html><body><form action="fileupload" enctype="text/plain" method=post><h1>Freedom Files</h1><p>Stand with your President and Fellow Americans and fight for freedom from chinese owned social media platforms.</p><p>Your freedom of speech is stake becuase of big, chinese-owned companys. But unitil your Freedom of speech is gone, fight with your speech. Fight with your vote. Make sure to not give money to them. Unsubscribe to facebook, to Gmail, to youtube, to twitter, to Disney+, and the list keeps going. Make sure to do research on your own, And find out what companys are owned by Anti-Americans. Stand with the Constitution of the United States of America. </p><p> -Your fellow American</p></form></body></html>');
        //res.write(ImportHtml);


    }

    // pools will use environment variables
    // for connection information
    /*const pool = new Pool()
    pool.query('SELECT NOW()', (err, res) => {
        pool.end()
    })
    // you can also use async/await
    const res = await pool.query('SELECT NOW()')
    await pool.end()
    // clients will also use environment variables
    // for connection information
    const client = new Client()
    await client.connect()
    const res = await client.query('SELECT NOW()')
    await client.end()*/


    /*for (var i = 0; i < names.length; i++)
    {
        res.write("<!DOCTYPE html><html><body><p>" + names[i] + "</p></body></html>");
    }*/

    return res.end();

}).listen(port);



