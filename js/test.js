var expect = chai.expect;


// Restaurant para realizar pruebas sobre los metodos de esta clase
var restaurant = 	new Restaurant(0, '', '', '', [], '', []);


// Probar método reservarHorario(horario)
describe('Prueba de reservarHorario(horario)', function(){

  // Se agregan valores al atributo horario
  restaurant.horarios = ['11:00', '12:00', '14:30'];

  it('Se elimina del arreglo un horario cuando es reservado', function(){
    restaurant.reservarHorario('12:00');
    expect(restaurant.horarios).to.be.an('array').that.does.not.include('12:00');
  });
  it('El arreglo de horarios se mantiene igual cuando se reserva un horario que el restaurant no posee', function (){
    restaurant.reservarHorario('09:00')
    expect(restaurant.horarios).to.deep.equal(['11:00', '14:30']);
  });
  it('El arreglo de horarios se mantiene igual cuando no se le pasa ningún parámetro', function (){
    restaurant.reservarHorario();
    expect(restaurant.horarios).to.deep.equal(['11:00', '14:30']);
  });
})


// Probar método obtenerPuntuacion()
describe('Prueba de obtenerPuntuacion()', function(){
  it('Dado un restaurant sin calificaciones la misma es igual a 0', function (){
    expect(restaurant.obtenerPuntuacion()).to.equal(0);
  });
  it('Dadas las calificaciones un restarant se calcula el promedio de las mismas de manera correcta', function(){
    
    // Se agregan valores al atributo calificaciones
    restaurant.calificaciones = [9, 5, 7, 6, 7];
    
    expect(restaurant.obtenerPuntuacion()).to.equal(6.8);
  });
})


// Probar método calificar()
describe('Prueba de calificar()', function(){

  it('Verificar que NO se agregué la calificación si NO es un entero', function (){
    
    // Se deja sin calificaciones el atributo calificaciones
    restaurant.calificaciones=[];

    restaurant.calificar('valor');
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que NO se agregué la calificación si no se le pasa un parámetro', function (){
    restaurant.calificar();
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que NO se agregué la calificación si el valor es menor que 0', function (){
    restaurant.calificar(-1);
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que NO se agregué la calificación si el valor es igual que 0', function (){
    restaurant.calificar(0);
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que NO se agregué la calificación si el valor es mayor que 10', function (){
    restaurant.calificar(11);
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que NO se agregué la calificación si el valor es igual que 10', function (){
    restaurant.calificar(10);
    expect(restaurant.calificaciones.length).to.equal(0);
  });
  it('Verificar que se agregué la calificación si el valor es un entero entre 1 y 9 (incluidos)', function (){
    restaurant.calificar(5);
    expect(restaurant.calificaciones.length).to.equal(1);
  });
})