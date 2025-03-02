const libroUno = {
    titulo: 'Harry Potter y piedra filosofal',
    autor: 'J.K. Rowling',
    anio: 1997,
    estado: 'disponible',
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  }
  const libroDos = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    anio: 1943,
    estado: 'prestado',
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  }

  const libroTres = {
    titulo: 'El retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    anio: 1890,
    estado: 'disponible',
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  }

  const libroCuatro = {
    titulo: 'Rebelión en la granja',
    autor: 'George Orwell',
    anio: 1945,
    estado: 'prestado',
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  }

  const libroCinco = {
    titulo: 'Ensayo sobre la ceguera',
    autor: 'José Saramago',
    anio: 1995,
    estado: 'disponible',
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
  }

  libroUno.describirLibro();
  libroDos.describirLibro();
  libroTres.describirLibro();
  libroCuatro.describirLibro();
  libroCinco.describirLibro();