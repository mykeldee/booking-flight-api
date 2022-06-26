const models = require("../models/Flight");

//Add/Book Flight
exports.bookFlight =  (req, res) => {
    const flight = {
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        date: req.body.date
    };
    models.push(flight);
    res.json(flight)
};

//Get a single Flight
exports.getFlight =  (req, res) => {
    const all = models.filter(model=> model.price==req.params.id);
    res.json(all)
};

//Get all Flight
exports.getAllFlight = (req, res) => {
    console.log(Flight);
    res.json(Flight);
};

//Update/Edit Flight
exports.editFlight =  (req, res) => {
    const flightIndex = models.findIndex(object => {
        return object.price == req.params.id;
      }); 
    models[flightIndex].title = req.body.title;
    models[flightIndex].time = req.body.time;
    models[flightIndex].date = req.body.date;
    res.json(models[flightIndex]);
};

//Delete Flight
exports.deleteFlight =  (req, res) => {
const flightIndex = models.findIndex(object => {
    return object.price == req.params.id;
  });  
  models.splice(flightIndex, 1);
  res.send("Flight deleted")
};

//Example
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}


