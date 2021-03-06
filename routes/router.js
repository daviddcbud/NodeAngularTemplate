/*jshint node: true */
var express = require('express');
var routes = function (Model) {
    var controller = require('../controllers/controller')(Model),
        router = express.Router();

    router.use('/:id', function (req, res, next) {
        controller.getById(req, res, next);
    });


    router.route('/').get(function (req, res) {
        controller.get(req, res);
    });

    router.route('/:id').get(function (req, res) {
        res.json(req.item);
    }).put(function (req, res) {
        var item = req.item;
        for (var k in item) {
            if(req.body[k]) item[k] = req.body[k];
        }
        item.save(function(err) {
            if(err) res.status(500).send(err);
            res.json(item);
        });
    }).post(function(req, res) {
        var item=new Model(req.body);
        item.save(function(err) {
            if(err) res.status(500).send(err);
            res.status(201).send(item);
        });
    });
    return router;
};

module.exports = routes;