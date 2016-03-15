function Animal () {
    fazerBarulho: function() {
        return '';
    }
}

function Cachorro() {
    this.barulho = "Au";
}

function Gato() {
    this.barulho = "Miau";
}

function Manada() {
    var animais = [];
    this.getItem = function (index) {
        if(index <= animais.length -1) {
            return animais[index];
        } else {
            throw "Index fora do range.";
        }
    }
    this.adicionar = function(item) {
        animais[animais.length] = item;
    }
}

ManadaVirgula.prototype = new Manada();
ManadaVirgula.prototype.barulhos = function() {

}


ManadaVirgula() {
}

function ManadaSustenidaDupla() {
}

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());