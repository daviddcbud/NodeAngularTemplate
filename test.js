var sinon=require('sinon');
var should=require('should');
      

function setupRequestResponse(req,res) {
req.body={};
req.params={};
 req.params.id=1;
res.send=function(s) {
        };
res.status=function(s){
return res;
           };



 
}

describe('Controller  Tests', function() {

  it('should return items', function(){
     var Model={};
     var items=[];
     Model.find= function(id,callback){
     	
     	items.push({});
     	callback(items);
     };
    var next=function(){};
    var req= {};
    var controller=require ('./controllers/controller')(Model);
 	var res={};
    setupRequestResponse(req,res);
  
	var spy1=sinon.spy(res,"send");
	

     controller.get(req,res);
     spy1.calledWith(items).should.be.equal(true);
     
  	 
  });
  it('should return 500', function() {
      
 var Model = {};
    Model.findById= function(id, callback) {
      callback('error', null);

};
   var next=function(){};
       var req= {};
      var controller=require ('./controllers/controller')(Model);
 var res={};
    setupRequestResponse(req,res);

   
var spy1=sinon.spy(res,"send");
var spy2=sinon.spy(res,"status");

         controller.getById(req,res,next);
      spy1.calledWith('error').should.be.equal(true);
spy2.calledWith(500).should.be.equal(true);


});

   it('should return 404', function() {


       var Model = {};
    Model.findById= function(id, callback) {
      callback(null, null);

};
   var next=function(){};
       var req= {};
      var controller=require ('./controllers/controller')(Model);
 var res={};
    setupRequestResponse(req,res);

   
var spy1=sinon.spy(res,"send");
var spy2=sinon.spy(res,"status");

         controller.getById(req,res,next);
      spy1.calledWith('not found').should.be.equal(true);
spy2.calledWith(404).should.be.equal(true);


             


});

});
