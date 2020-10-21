const Delivery = require('./Delivery');
const BycicleDeliveryType = require('./type/Bycicle');
const TrainDeliveryType = require('./type/Train');

module.exports = class StandardDelivery extends Delivery {
    constructor () {
        super()
        this.cityDeliveryType = new BycicleDeliveryType();
        this.intercityDeliveryType = new TrainDeliveryType();
    }
}