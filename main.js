const natalia = {
  name: 'Natalia',
  age: 22,
  cursosAprobados: [
    'Curso definitivo de HTML y CSS',
    'Curso practico de HTML y CSS',
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
};
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
  'Juanita',
  22,
  [
    'React avanzado',
    'React basico'
  ]
);

// Prototipos con la sintaxis de Clases

class Student2 {
  constructor({
    name,
    age,
    cursosAprobados = [],
    nonExistingProp
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.nonExistingProp = nonExistingProp;
  };

  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  }
};

const kike = new Student2({
  name: 'Kike',
  age: 22,
  cursosAprobados: [
    'Analisis para ciencia de datos',
    'Principios de visualizacion de datos uwu'
  ],
});