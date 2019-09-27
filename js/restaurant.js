var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
	this.id = id;
	this.nombre = nombre;
	this.rubro = rubro;
	this.ubicacion = ubicacion;
	this.horarios = horarios;
	this.imagen = imagen;
	this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
	this.horarios = this.horarios.filter(horario => horario !== horarioReservado);
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
	if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
		this.calificaciones.push(nuevaCalificacion);
	}
}


// Devuelve la sumatoria de un arreglo de numeros
const sumatoria = numeros => {
	let sumatoria = 0;
	numeros.forEach(numero => {
		sumatoria += numero;
	});
	return sumatoria;
}

// Devuelve el promedio de un arreglo de numeros
const promedio = numeros => {
	return sumatoria(numeros) / numeros.length;
}

Restaurant.prototype.obtenerPuntuacion = function() {
	if (this.calificaciones.length === 0) {
		return 0;
	} else {
		return Math.round(promedio(this.calificaciones) * 10) / 10;
	}
}