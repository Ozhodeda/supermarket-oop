class CashRegister {
    cashiers: number;
    constructor(cashiers: number) {
        this.cashiers = cashiers;
    }
}

class Product  {
    name: string;
    price: number;
    count: number;
    category: 'meet' | 'milk' | 'Cans';
    constructor(name: string, price: number, count:number ,category: 'meet' | 'milk' | 'Cans') {
        this.name = name;
        this.price = price;
        this.count = count;
        this.category = category;
    }
}

class IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Consumer extends IPerson {
    ConsumerNumber: number
    constructor(name: string, age: number, ConsumerNumber: number) {
        super(name, age);
        this.ConsumerNumber = ConsumerNumber;
    }
     
}
 
class Staffmember extends IPerson {
    role: 'Cleaner' | 'cashier' | 'rate' | 'manager' | 'usher';
    constructor(name: string, age: number, role: 'Cleaner' | 'cashier' | 'rate' | 'manager' | 'usher') {
        super(name, age);
        this.role = role;
    }
}