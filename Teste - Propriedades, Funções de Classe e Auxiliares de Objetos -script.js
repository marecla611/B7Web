function Animal() {
	this.raca = "Cão";
	this.nome = "Scooby";
	this.idade = 10;
	this.peso = 10;

	this.fazerXixi = function() {
		console.log("xiiiiiiiiii...");
	}

	this.comer = function(kg) {
		for(var i=0;i<kg;i++) {
			this.mastigar(i);
		}
		console.log("hmmm...")
		this.peso = this.peso + (kg/2);
	}

	this.mastigar = function(i) {
		console.log(i+" - nhoc...");
	}

}

var scooby = new Animal();
scooby.raca = "Cao";
scooby.nome = "Scooby";
scooby.comer(10);


var tigre = new Animal();
tigre.raca = "Gato";
tigre.nome = "Tigre";
