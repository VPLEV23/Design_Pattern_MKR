const TypeHelper = require('./TypeHelper');
const types = require('./types');
module.exports = class BycicleDeliveryType extends TypeHelper {
    getType() {
        return types.car;
    }
}