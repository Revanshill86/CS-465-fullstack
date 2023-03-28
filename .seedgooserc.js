module.exports =
{
    modelBaseDirectory: 'app_api/database/models', //Model Directory Name
    models: ['*.js', '!db.js'], //model matcher
    data: 'data', //data directory name
    db: 'mongodb://localhost:27017/travlr' //database connection url
};