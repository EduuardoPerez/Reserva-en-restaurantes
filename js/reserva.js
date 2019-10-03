class Reserva {

  constructor(horario, cantidadDePersonas, precioPorPersona, codDescuento) {
    this.horario=horario;
    this.cantidadDePersonas=cantidadDePersonas;
    this.precioPorPersona=precioPorPersona;
    this.codDescuento=codDescuento;
  }

  // Calcula el precio base de una reserva
  precioBase () {
    return this.cantidadDePersonas * this.precioPorPersona;
  }

  // Calcula el precio total de la reserva
  // precio final = precio base + adicionales - descuentos
  precioTotal () {

    const precioBase = this.precioBase();
    let adicionales = 0;
    let descuentos = 0;

    // Si son entre 4 y 6 personas descontar 5%
    if (this.cantidadDePersonas>=4 && this.cantidadDePersonas<=6) {
      descuentos += precioBase*0.05;
    }
    // Si son entre 7 y 8 personas descontar 10%
    if (this.cantidadDePersonas >= 7 && this.cantidadDePersonas <= 8) {
      descuentos += precioBase*0.1;
    }
    // Si son mas de 8 personas o el cupón de descuento es DES15 aplicar descuento de 15%
    if (this.cantidadDePersonas > 8 || this.codDescuento==='DES15') {
      descuentos += precioBase*0.15;
    }
    // Aplicar $200 de descuento por cupon DES200
    if (this.codDescuento==='DES200') {
      descuentos += 200;
    }
    // Aplicar descuento equivalente al valor del precio por persona por cupon DES1
    if (this.codDescuento==='DES1') {
      descuentos += this.precioPorPersona;
    }
    // Aplicar 5% adicional por reserva entre 13-14
    if(this.horario.getHours()>=13 && this.horario.getMinutes()>=0){
      if (this.horario.getHours()<=14 && this.horario.getMinutes()<=59) {
        adicionales += precioBase*0.05;
      }
    }
    // Aplicar 5% adicional por reserva entre 20-21
    if(this.horario.getHours()>=20 && this.horario.getMinutes()>=0){
      if (this.horario.getHours()<=21 && this.horario.getMinutes()<=59) {
        adicionales += precioBase*0.05;
      }
    }
    // Aplicar 10% adicional por reserva de fin de semana
    if (this.horario.getDay()===0 || this.horario.getDay()===5 || this.horario.getDay()===6) {
      adicionales += precioBase*0.1
    }

    return precioBase + adicionales - descuentos;
  }
}