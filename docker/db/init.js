// https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection

db.createUser({
    user: 'optimize',
    pwd: 'toor',
    roles: [
        {
            role: 'readWrite',
            db: 'optimize'
        }
    ]
});
db.auth('optimize', 'toor');

db.createCollection('config', { capped: true, max: 1, size: 100 });
db.config.insert({ suggestionAPI: 'https://api.bing.com/osjson.aspx?lang=fr&q=', suggestionLimit: 10 });