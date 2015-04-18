var init= function(Model) 
{
       var get= function(req,res) {
    
	Model.find(req.query,function(err, items) {
		 
		if (err) res.status(500).send(err);
		else
		  res.json(items);
	});
     };
  var getById= function(req,res,next) {
Model.findById(req.params.id,function(err, item) {
	
     if(err) res.status(500).send(err);
    if(item) 
{
 req.item=item;
    next();
}
else{
  res.status(404).send('not found');
}
});

};

return {
get:get,
getById:getById
};
};

module.exports=init;