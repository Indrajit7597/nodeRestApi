const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get it'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post it'
    });
});

router.get('/:pId', (req, res, next) => {
    const id = req.params.pId;
    if (id === 'x') {
        res.status(200).json({
            message: 'Get product x',
            ids: id
        });
    } else {
        res.status(200).json({
            message: 'Get product yyy'
        });
    }
});

router.patch('/:pId', (req, res, next) => {
    res.status(200).json({
        message: 'Update product'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Delete product'
    });
});

module.exports = router;