var expect = chai.expect;


// Restaurant para realizar pruebas sobre los metodos de esta clase
var restaurant = 	new Restaurant(0, '', '', '', [], '', []);


// Probar método reservarHorario(horario) de la clase Restaurant
describe('Prueba del método reservarHorario(horario) de la clase Restaurant', function(){

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


// Probar método obtenerPuntuacion() de la clase Restaurant
describe('Prueba del método obtenerPuntuacion() de la clase Restaurant', function(){
  it('Dado un restaurant sin calificaciones la misma es igual a 0', function (){
    expect(restaurant.obtenerPuntuacion()).to.equal(0);
  });
  it('Dadas las calificaciones un restarant se calcula el promedio de las mismas de manera correcta', function(){
    
    // Se agregan valores al atributo calificaciones
    restaurant.calificaciones = [9, 5, 7, 6, 7];
    
    expect(restaurant.obtenerPuntuacion()).to.equal(6.8);
  });
})


// Probar método calificar() de la clase Restaurant
describe('Prueba del método calificar() de la clase Restaurant', function(){

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
});


// Variable con restarantes para utilizarlo y hacer pruebas con la clase Listado
var listadoDeRestaurantes = [
	new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
	new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
  new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
];

// Listado para realizar pruebas sobre los metodos de esta clase
var listado = 	new Listado([]);


// Probar método buscarRestaurante(id) de la clase Listado
describe('Prueba del método buscarRestaurante(id) de la clase Listado', function(){
  it(`Verificar que retorne "No se ha encontrado ningún restaurant" si el listado se encuentra vacio`, function (){
    expect(listado.buscarRestaurante(0)).to.equal("No se ha encontrado ningún restaurant");
  });
  it(`Verificar que retorne "No se ha encontrado ningún restaurant" si no se le pasa un parámetro`, function (){
    listado.restaurantes = listadoDeRestaurantes;
    expect(listado.buscarRestaurante()).to.equal("No se ha encontrado ningún restaurant");
  });
  it(`Verificar que retorne "No se ha encontrado ningún restaurant" si no existe el id en el listado`, function(){
    expect(listado.buscarRestaurante(0)).to.equal("No se ha encontrado ningún restaurant");
  });
  it('Verificar que retorne el restaurant correcto según el id que se le pase', function(){
    expect(listado.buscarRestaurante(1)).to.equal(listado.restaurantes[0]);
  });
})