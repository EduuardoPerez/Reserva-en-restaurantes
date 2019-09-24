const expect = chai.expect;

// Restaurant para realizar pruebas sobre los metodos de esta clase
var restaurant = 	new Restaurant(23, 'Chez Moi', 'Ensalada', 'París', ['11:00', '12:00', '14:30'], '../img/ensalada1.jpg', [8, 4, 5, 5, 5, 5]);

// Probar método reservarHorario(horario)
describe('Test de reservarHorario(horario)', function(){
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
});