var path = require('path');
exports.getFrontPage = async(req, res) => {
    try {
        res.sendFile('public/views/index.html', {
            root: __dirname+'/../'
        });
    } catch (error) {
        console.log('error {}',error)
    }
};