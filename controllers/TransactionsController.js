const transactions = require('express').Router();
const transactionArray = require('../models/Transaction')

transactions.get('/', (req, res) => {
    // console.log(res)
    res.json(transactionArray)
})
transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionArray[id]) {
      res.json(transactionArray[id]);
    } else {
      res.redirect("/404");
    }
});

transactions.post('/', (req, res) => {
    transactionArray.push(req.body);
    res.json(transactionArray[transactionArray.length - 1])
})

transactions.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (transactionArray[id]) {
        const deletedTransaction = transactionArray.splice(id, 1);
        res.status(200).json(deletedTransaction)
    } else {
        res.redirect('/404')
    }
})
transactions.put('/:id', (req, res) => {
    const { id } = req.params;
    if (transactionArray[id]) {
        transactionArray[req.params.id] = req.body;
    res.status(200).json(transactionArray[req.params.id]);
    } else {
        res.redirect('/404')
    }
    
})
module.exports = transactions