const Branch = require('./src/branch/Department');
const WayBill = require('./src/waybill/WayBill');
const WayBillHelper = require('./src/waybill/WayBillHelper')
const SDelivery = new (require('./src/goodsDelivery/SDelivery'))();
const EDelivery = new (require('./src/goodsDelivery/EDelivery'))();
const UzhhorodFirst = new Branch(1, 'Ужгорож');
const KharkivSecond = new Branch(2, 'Харків');
const UzhhorodSecond = new Branch(2, 'Ужгород');
const WayBillList = new WayBillHelper([
    new WayBill('Саша надіслав Владу', UzhhorodFirst, UzhhorodSecond) 
]);

WayBillList.push(new WayBill('Василь надіслав до Ечія', UzhhorodFirst, KharkivSecond, EDelivery));

const deliveryResult = WayBillList.deliverVse();
console.log(deliveryResult);