var Datos={
	 labels : ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
	 		

	datasets : [
		{//primer conjunto de datos
			fillColor:"rgb(255, 255, 102)",
			// strokeColor : "rgba(220,220,220,0.8)",
			// highlightFill:"rgba(220,220,220,0.75)",
			// highlightStroke:"rgba(220,220,220,1)",
			data :[10,20,30,40,50,100,5]
		},
		{//segundo conjunto de datos
			fillColor:"rgba(151,147,205,0.5)",
			strokeColor : "rgba(151,147,205,0.8)",
			highlightFill:"rgba(151,147,205,0.75)",
			highlightStroke:"rgba(151,147,205,1)",
			data :[15,18,20,11,24,20,31]
		}
		
			


	]
}
var contexto = document.getElementById("canvas").getContext("2d");
window.Linea = new Chart(contexto).Line(Datos,{showScale: false,responsive : true});