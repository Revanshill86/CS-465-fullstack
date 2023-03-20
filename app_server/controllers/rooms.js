var fs = require('fs');

var roomType = JSON.parse(fs.readFileSync('./data/roomType.json', 'utf8'));

//Get Rooms view
const rooms = (req, res) =>
{
    res.render('rooms', { title: 'Travlr Getaways', roomType});
};

module.exports = 
{
    rooms
};