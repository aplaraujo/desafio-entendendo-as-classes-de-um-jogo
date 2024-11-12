class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    
    attack() {
        let weapon = "";

        if(this.type === "mago") {
            weapon = "magia"
        } else if(this.type === "guerreiro") {
            weapon = "espada"
        } else if(this.type === "monge") {
            weapon = "artes marciais"
        } else if(this.type === "ninja") {
            weapon = "shuriken"
        }

        return `${this.type} atacou usando ${weapon}`
    }
}

const hero1 = new Hero("Orhelu", 30, "ninja");
console.log(hero1.attack());
const hero2 = new Hero("Hewiu", 20, "monge");
console.log(hero2.attack());
const hero3 = new Hero("Shaseuma", 40, "mago");
console.log(hero3.attack());
const hero4 = new Hero("Dagbui", 15, "guerreiro");
console.log(hero4.attack());