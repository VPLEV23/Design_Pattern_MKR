const DeliveryType = require('./type/TypeHelper');
const Department = require('../branch/Department');

module.exports = class Delivery {
    constructor () {
        this.cityDeliveryType = new DeliveryType();
        this.intercityDeliveryType = new DeliveryType();
    }

    deliver(fromDepartment, toDepartment) {
        let result = undefined;
        if (fromDepartment.city === toDepartment.city) {
            result = this.CityDelivery(fromDepartment, toDepartment);
        } else {
            result = this.intercityDelivery(fromDepartment, toDepartment);
        }

        return result;
    }

    CityDelivery (fromDepartment, toDepartment) {
        return `Тип Доставки: ${this.cityDeliveryType.getType()}; Відправлення з: ${fromDepartment.toString()} до ${toDepartment.toString()}`;
    }

    intercityDelivery (fromDepartment, toDepartment) {
        const deliveries = ['Доставка в 3 етапа:'];

        const fromDepartment0 = new Department(0, fromDepartment.city);
        const toDepartment0 = new Department(0, toDepartment.city);

        deliveries.push(`I.Тип Доставки: ${this.cityDeliveryType.getType()}; Відправлення з: ${fromDepartment.toString()} до ${toDepartment.toString()}`);
        deliveries.push(`II.Тип Доставки: ${this.cityDeliveryType.getType()}; Відправлення з: ${fromDepartment0.toString()} до ${toDepartment.toString()}`);
        deliveries.push(`III. Тип Доставки: ${this.cityDeliveryType.getType()}; Відправлення з: ${fromDepartment0.toString()} до ${toDepartment.toString()}`);
        
        return deliveries.join('\n');
    }
}