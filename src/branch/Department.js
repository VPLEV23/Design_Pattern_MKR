module.exports = class Department {
    constructor (id, city){
		this.id = id || 0;
		this.city = city || "Місто не визначене";
	}
	
	toString(){
        return `${this.city} Віділення №${this.id}`;
	}
}