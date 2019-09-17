const Cake = require("./models");

module.exports={
    allCakes: function(request, response){
        console.log("Hetting all cake  route ###########################");
        Cake.find()
        .then(cakeData=>response.json(cakeData))
        .catch(err=>response.json(err));
    },
    newCake: function (request, response){
        console.log("newCake route ###########################");
        Cake.create(request.body)
        .then(cakeData=>response.json(cakeData))
        .catch(err=>response.json(err));
    }, 
    getOneCake: function (request, response){
        console.log("getCake rout ###########################");
        console.log(request.params.id);
        Cake.find({_id: request.params.id})
        .then(cakeData=>response.json(cakeData))
        .catch(err=>response.json(err));
    },
    rateCake: function(request, response){
        console.log("rate rout &&&&&&&&&&&");
        console.log(request.params.id);
        Cake.findByIdAndUpdate({_id: request.params.id},{$push: {comments: {comment:request.body.comment, rating:request.body.rating}}})
        .then(cakeData=>response.json(cakeData))
        .catch(err=>response.json(err));

    }
};