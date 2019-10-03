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
    expect(restaurant.horarios).eql(['11:00', '14:30']);
  });
  it('El arreglo de horarios se mantiene igual cuando no se le pasa ningún parámetro', function (){
    restaurant.reservarHorario();
    expect(restaurant.horarios).eql(['11:00', '14:30']);
  });
});


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
});


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
	new Restaurant(0, '', '', '', [], '', []),
	new Restaurant(1, '', '', '', [], '', []),
	new Restaurant(2, '', '', '', [], '', [])
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
    expect(listado.buscarRestaurante(3)).to.equal("No se ha encontrado ningún restaurant");
  });
  it('Verificar que retorne el restaurant correcto según el id que se le pase', function(){
    expect(listado.buscarRestaurante(0)).to.equal(listado.restaurantes[0]);
  });
});


// Probar método obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario) de la clase Listado
describe('Prueba del método obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario) de la clase Listado', function(){
  it('Verificar que NO retorne Restaurantes del listado si no se le pasan parámetros', function (){
    listadoDeRestaurantes = [
      new Restaurant(0, '', 'Italiano', 'Nueva York', ['13:00', '15:30', '18:00'], '', []),
      new Restaurant(1, '', 'Venezolano', 'Mérida', ['15:00', '13:00', '14:30', '12:30'], '', []),
      new Restaurant(2, '', 'Hamburguesa', 'Berlín', ['11:30', '12:00', '22:30'], '', [])
    ];
    listado.restaurantes = listadoDeRestaurantes;
    expect(listado.obtenerRestaurantes().length).to.equal(0);
  });
  it('Verificar que retorne todos los Restaurantes del listado si tanto el rubro, la ciudad y el horario traen como valor null', function (){
    expect(listado.obtenerRestaurantes(null, null, null)).eql(listadoDeRestaurantes);
  });
  it('Verificar que retorne los Restaurantes filtrando por horario', function (){
    expect(listado.obtenerRestaurantes(null, null, '13:00')).eql(listadoDeRestaurantes.slice(0,2));
  });
  it('Verificar que retorne los Restaurantes filtrando por ciudad', function (){
    expect(listado.obtenerRestaurantes(null, 'Nueva York', null)).eql([listadoDeRestaurantes[0]]);
  });
  it('Verificar que retorne los Restaurantes filtrando por ciudad y horario', function (){
    expect(listado.obtenerRestaurantes(null, 'Berlín', '22:30')).eql([listadoDeRestaurantes[2]]);
  });
  it('Verificar que retorne los Restaurantes filtrando por rubro', function (){
    expect(listado.obtenerRestaurantes('Venezolano', null, null)).eql([listadoDeRestaurantes[1]]);
  });
  it('Verificar que retorne los Restaurantes filtrando por rubro y horario', function (){
    expect(listado.obtenerRestaurantes('Italiano', null, '15:30')).eql([listadoDeRestaurantes[0]]);
  });
  it('Verificar que retorne los Restaurantes filtrando por rubro y ciudad', function (){
    expect(listado.obtenerRestaurantes('Venezolano', 'Mérida', null)).eql([listadoDeRestaurantes[1]]);
  });
  it('Verificar que retorne los Restaurantes filtrando por rubro, ciudad y horario', function (){
    expect(listado.obtenerRestaurantes('Italiano', 'Nueva York', '18:00')).eql([listadoDeRestaurantes[0]]);
  });
});

// Reservas para realizar pruebas sobre la clase Reserva
var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
var reserva3 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES15");
var reserva4 = new Reserva (new Date(2019, 9, 11, 13, 30), 2, 150, "DES200");
var reserva5 = new Reserva (new Date(2019, 9, 7, 20, 45), 2, 150, "DES200");
var reserva6 = new Reserva (new Date(2019, 9, 11, 17, 10), 2, 150, "DES1");
var reserva7 = new Reserva (new Date(2019, 9, 7, 17, 10), 5, 10, "DES1");
var reserva8 = new Reserva (new Date(2019, 9, 7, 17, 10), 7, 10, "DES1");
var reserva9 = new Reserva (new Date(2019, 9, 7, 17, 10), 10, 10, "DES1");

// Probar método precioBase() de la clase Reserva
describe('Prueba del método precioBase() de la clase Reserva', function(){

  it('Verificar que un calcule correctamente un precio base', function(){
    expect(reserva1.precioBase()).to.equal(2800);
  });
});


// Probar método precioTotal() de la clase Reserva
describe('Prueba del método precioTotal() de la clase Reserva', function(){

  it('Verificar que calcule correctamente el precio final', function(){
    expect(reserva1.precioTotal()).to.equal(2450);
  });
  it('Verificar que aplique correctamente el descuento si son entre 4 y 6 personas', function(){
    expect(reserva7.precioTotal()).to.equal(37.5);
  });
  it('Verificar que aplique correctamente el descuento si son entre 7 y 8 personas', function(){
    expect(reserva8.precioTotal()).to.equal(53);
  });
  it('Verificar que aplique correctamente el descuento si son más de 8 personas', function(){
    expect(reserva9.precioTotal()).to.equal(75);
  });
  it('Verificar que aplique correctamente el descuento del cupon DES15', function(){
    expect(reserva3.precioTotal()).to.equal(255);
  });
  it('Verificar que aplique correctamente el descuento del cupon DES200', function(){
    expect(reserva2.precioTotal()).to.equal(100);
  });
  it('Verificar que aplique correctamente el descuento del cupon DES1', function(){
    expect(reserva1.precioTotal()).to.equal(2450);
  });
  it('Verificar que aplique correctamente el adicional de reservar 13-14', function(){
    expect(reserva4.precioTotal()).to.equal(145);
  });
  it('Verificar que aplique correctamente el adicional de reservar 20-21', function(){
    expect(reserva5.precioTotal()).to.equal(115);
  });
  it('Verificar que calcule correctamente el adicional de reservar un fin de semana', function(){
    expect(reserva6.precioTotal()).to.equal(180);
  });
});