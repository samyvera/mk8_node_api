//Define types of object to send in POST request
const type = (req, type) => {
    if (type === "bodyType") {
        return {
            name: req.body.name,
            speedGnd: req.body.speedGnd,
            speedWtr: req.body.speedWtr,
            speedAir: req.body.speedAir,
            speedGty: req.body.speedGty,
            acceleration: req.body.acceleration,
            weight: req.body.weight,
            handlingGnd: req.body.handlingGnd,
            handlingWtr: req.body.handlingWtr,
            handlingAir: req.body.handlingAir,
            handlingGty: req.body.handlingGty,
            grip: req.body.grip,
            miniturbo: req.body.miniturbo
        };
    }
    else if (type === "gliderType") {
        return {
            name: req.body.name,
            speedGnd: req.body.speedGnd,
            speedWtr: req.body.speedWtr,
            speedAir: req.body.speedAir,
            speedGty: req.body.speedGty,
            acceleration: req.body.acceleration,
            weight: req.body.weight,
            handlingGnd: req.body.handlingGnd,
            handlingWtr: req.body.handlingWtr,
            handlingAir: req.body.handlingAir,
            handlingGty: req.body.handlingGty,
            grip: req.body.grip,
            miniturbo: req.body.miniturbo
        };
    }
    else if (type === "tireType") {
        return {
            name: req.body.name,
            speedGnd: req.body.speedGnd,
            speedWtr: req.body.speedWtr,
            speedAir: req.body.speedAir,
            speedGty: req.body.speedGty,
            acceleration: req.body.acceleration,
            weight: req.body.weight,
            handlingGnd: req.body.handlingGnd,
            handlingWtr: req.body.handlingWtr,
            handlingAir: req.body.handlingAir,
            handlingGty: req.body.handlingGty,
            grip: req.body.grip,
            miniturbo: req.body.miniturbo
        };
    }
    else if (type === "driverType") {
        return {
            name:req.body.name,
            size:req.body.size,
            driverModel:req.body.driverModel
        }
    }
    else if (type === "driverModelType") {
        return {
            name: req.body.name,
            size:req.body.size,
            speedGnd: req.body.speedGnd,
            speedWtr: req.body.speedWtr,
            speedAir: req.body.speedAir,
            speedGty: req.body.speedGty,
            acceleration: req.body.acceleration,
            weight: req.body.weight,
            handlingGnd: req.body.handlingGnd,
            handlingWtr: req.body.handlingWtr,
            handlingAir: req.body.handlingAir,
            handlingGty: req.body.handlingGty,
            grip: req.body.grip,
            miniturbo: req.body.miniturbo,
            active: req.body.catch
        }
    }
};

module.exports = { type };