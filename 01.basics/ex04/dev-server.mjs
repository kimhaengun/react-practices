import http from 'http';
import * as path from 'path';
import express from 'express';
//-----------------------------------------------

const port = 8080;

//Application Setup / 미들웨어 막기
//path.resolve('.') --> 현재 위치가 어디인지
const application = express().use(express.static(path.join(path.resolve('.'), 'public')));

//Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    //server setup
    .listen(port);
