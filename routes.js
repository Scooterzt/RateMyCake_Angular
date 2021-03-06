const controller = require("./controller");

module.exports=function(app){
    app.get("/cake", controller.allCakes);
    app.post("/cake", controller.newCake);
    app.get("/cake/:id", controller.getOneCake);
    app.put("/cake/:id", controller.rateCake);
};