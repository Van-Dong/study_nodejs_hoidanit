const getHomePage = (req, res) => {
    // process data
    // call model
    res.send('Hello World!')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

module.exports = {
    getHomePage,
    getABC
}