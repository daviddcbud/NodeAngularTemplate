
var init = function()
{
      var db= 'mongodb://dev:pointe@ds061741.mongolab.com:61741/devtesting';
 
       if (process.env.MODE=='PRODUCTION')
      {
db= 'mongodb://dev:pointe@ds061741.mongolab.com:61741/production';
       }

return {
    db:db
}

};
module.exports=  init;