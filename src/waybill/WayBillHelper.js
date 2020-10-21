module.exports = class WayBillHelper {

    constructor (WayBill){
        this.WayBill = WayBill;
	}
    
    push(WayBill) {
        this.WayBill.push(WayBill);
    }
    deliverVse() {
        const result = [];

        for (let i = 0; i < this.WayBill.length; i++) {
            result.push(`Накладна з ынедексом ${i}:`);
            result.push('Дата накладної:');
            result.push(this.WayBill[i].toString());
            result.push('Дата доставки:');
            result.push(this.WayBill[i].delivery());
            result.push('');
        }

        return result.join('\n');
    }
}