
var init = function () {
    var db = 'mongodb://dev:pointe@ds061741.mongolab.com:61741/devtesting';
    if (process.env.MODE === 'PRODUCTION') {
        db = 'mongodb://dev:pointe@ds061741.mongolab.com:61741/production';
    }

    return {
        db: db,
        clientId: "000000004C15172A",
        secret: "ywAxRanRoAyOCyyaFUPI6jJ3C8lf6nbO",
        callback: "http://www.myrandomdomain.com:3000/auth/callback"
    };
};
module.exports =  init;