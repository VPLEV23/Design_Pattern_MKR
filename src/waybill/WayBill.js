const StandardDelivery = require('../goodsDelivery/SDelivery');

module.exports = class WayBill {
    constructor (description, fromDepartment, toDepartment, deliveryMethod){
        this.description = description || 'Нема опису'; 
        this.fromDepartment = fromDepartment; 
        this.toDepartment = toDepartment;
        this.deliveryMethod = deliveryMethod || new StandardDelivery();
	}
    
    delivery() {
        return this.deliveryMethod.deliver(this.fromDepartment, this.toDepartment);
    }

	toString(){
        return `${this.description}; З ${this.fromDepartment.toString()} до ${this.toDepartment.toString()}`;
	}
}