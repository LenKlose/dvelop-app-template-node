const express = require('express');

module.exports = function (assetBasePath, basePath, version) {
    const router = express.Router();

    router.get('/', function (req, res, next) {
        res.format({
            'text/html': function () {
                res.render('root', {title: 'Vacationprocess', stylesheet: `${assetBasePath}/root.css`, version:version});
            },

            'application/hal+json': function () {
                res.send(
                    {
                        _links: {
                            featuresdescription: {
                                href: `${basePath}/features`
                            }
                        }
                    }
                )
            },

            'default': function () {
                res.status(406).send('Not Acceptable')
            }
        });
    });
    return router;
};

