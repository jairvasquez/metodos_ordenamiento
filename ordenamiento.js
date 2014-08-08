
var cadena = new Array();

var aleatorio = function(){
    cadena = new Array();
    var cantidad = $("#cantidad").val();
    for(var i=0; i<cantidad; i++){
	var aleatorio = Math.floor(Math.random() * (cantidad)) + 1;
	cadena = cadena.concat(aleatorio);
    }
}

var Logging = function(){
    this.startTimer = function() {
        this.start = new Date().getTime();
    };
 
    this.stopTimer = function() {
        return (new Date().getTime()) - this.start;
    };
};

var burbuja = function(){
    aleatorio();
    var logging = new Logging();
    logging.startTimer();
    $("#mostrar").html('');
    var cantidad = $("#cantidad").val();
    var mostrar = '';
    for(var i=1; i<cantidad; i++){
	for(var j=0; j<(cantidad-1); j++){
	    if(cadena[j]>cadena[j+1]){
		var aux = cadena[j];
		cadena[j] = cadena[j+1];
		cadena[j+1] = aux;
	    }
	}
    }
    $("#tiempo1").html(logging.stopTimer() + 'ms');
    for(var k=0; k<cadena.length; k++){
	mostrar += cadena[k] + ', ';
    }
    $("#mostrar").html("<p>" + mostrar + "</p>");
}

var burbuja_opt = function(){
    aleatorio();
    var logging = new Logging();
    logging.startTimer();
    $("#mostrar").html('');
    var cantidad = $("#cantidad").val();
    var mostrar = '';
    for(var i=0; i<cadena.length; i++){
	for(var j=0; j<i; j++){
	    if(cadena[i]<cadena[j]){
		var aux = cadena[j];
		cadena[j] = cadena[i];
		cadena[i] = aux;
	    }
	}
    }
    $("#tiempo4").html(logging.stopTimer() + 'ms');
    for(var k=0; k<cadena.length; k++){
	mostrar += cadena[k] + ', ';
    }
    $("#mostrar").html("<p>" + mostrar + "</p>");
}

var seleccion = function(){
    aleatorio();
    var logging = new Logging();
    logging.startTimer();
    $("#mostrar").html('');
    var cantidad = $("#cantidad").val();
    var mostrar = '';
    for(var i=0; i<(cantidad-1); i++){
	var minimo = i;
	for(var j=i+1; j<cantidad; j++){
	    if(cadena[j]<cadena[minimo]){
		minimo = j;
	    }
	}
	var aux = cadena[i];
	cadena[i] = cadena[minimo];
	cadena[minimo] = aux;
    }
    $("#tiempo2").html(logging.stopTimer() + 'ms');
    for(var k=0; k<cadena.length; k++){
	mostrar += cadena[k] + ', ';
    }
    $("#mostrar").html("<p>" + mostrar + "</p>");
}

var insercion = function(){
    aleatorio();
    var logging = new Logging();
    logging.startTimer();
    $("#mostrar").html('');
    var cantidad = $("#cantidad").val();
    var mostrar = '';
    for(var i=0; i<cantidad; i++){
	var tmp = cadena[i];
	for(var j=i-1; j>=0 && cadena[j]>tmp; j--){
	    cadena[j+1] = cadena[j];
	    cadena[j] = tmp;
	}
    }
    $("#tiempo3").html(logging.stopTimer() + 'ms');
    for(var k=0; k<cadena.length; k++){
	mostrar += cadena[k] + ', ';
    }
    $("#mostrar").html("<p>" + mostrar + "</p>");
}

var rapido = function(){
    aleatorio();
    var logging = new Logging();
    logging.startTimer();
    $("#mostrar").html('');
    var cantidad = $("#cantidad").val();
    var mostrar = '';
    cadena = sort.quickSort(cadena);
    $("#tiempo5").html(logging.stopTimer() + 'ms');
    for(var k=0; k<cadena.length; k++){
	mostrar += cadena[k] + ', ';
    }
    $("#mostrar").html("<p>" + mostrar + "</p>");
}

var sort = function() {
    var quickSort = function(arr) {
	
//	alert(cadena.length);
//	return;
	
        var left = [];
        var right = [];

        if (arr.length <= 1) return arr;

        var pivot = arr[0];
        arr.shift();
        for (var i = 0; i < arr.length; i++) {
            arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        return $.merge($.merge(quickSort(left), $.makeArray(pivot)), quickSort(right));
    };

    return {
        quickSort: quickSort
    };
}();