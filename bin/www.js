#!/usr/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var debug = require('debug')('api');
var app = require('../app');




/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */



    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */



    /**
     *  Setup termination handlers (for exit and a list of signals).
     */



    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
  /*
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('./angular/index.html'));
        };
        self.routes['/views/menu-top.html'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('./angular/views/menu-top.html'));    
        };
            
        self.routes['/views/read.html'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('./angular/views/read.html'));  
        };
            
        self.routes['http://localhost/angular/js/app.js'] = function(req, res) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(self.cache_get('js/app.js') );
        };
        self.routes['/js/controller.js'] = function(req, res) {
            res.setHeader('Content-Type', 'text/script');
            res.send(self.cache_get('./angular/js/controller.js') );
        };
        self.routes['/js/service.js'] = function(req, res) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(self.cache_get('./angular/js/service.js') );
        };
        self.routes['/bower_components/angular/angular.min.js'] = function(req, res) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(self.cache_get('/angular/bower_components/angular/angular.min.js') );
        };
        self.routes['/css/bootstrap.min.css'] = function(req, res) {
            res.setHeader('Content-Type', 'text/css');
            res.send(self.cache_get('./angular/css/bootstrap.min.css') );
        };
        self.routes['/bower_components/angular-route/angular-route.min.js'] = function(req, res) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(self.cache_get('./angular/bower_components/angular-route/angular-route.min.js') );
        };
    };

*/
    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        //self.createRoutes();
        self.app2 = express();

        
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
      
        
     

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        var server = app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();

