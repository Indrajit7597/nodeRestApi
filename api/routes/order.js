const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get order'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post order'
    });
});

router.get('/:pId', (req, res, next) => {
    const id = req.params.pId;
    if (id === 'x') {
        res.status(200).json({
            message: 'Get order x',
            ids: id
        });
    } else {
        res.status(200).json({
            message: 'Get order yyy'
        });
    }
});

router.patch('/:pId', (req, res, next) => {
    res.status(200).json({
        message: 'Update order'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Delete order'
    });
});

module.exports = router;