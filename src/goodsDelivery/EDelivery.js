const Delivery = require('./Delivery');
const CarDeliveryType = require('./type/Car');

module.exports = class StandardDelivery extends Delivery {
    constructor () {
        super();
        this.cityDeliveryType = new CarDeliveryType();
    }
}