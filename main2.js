class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante'
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})
    ${this.likes} likes
    ${this.content}`)
  }
}

function videoPlay(id) {
  const urlSecreta = 'https://platzisecreto.com/' + id;
  console.log(`Reproduciendo desde ${urlSecreta}`);
}
function videoStop(id) {
  const urlSecreta = 'https://platzisecreto.com/' + id;
  console.log(`Pausada la url ${urlSecreta}`);
}

class PlatziClass {
  #videoID;
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.#videoID = videoID;
  }

  reproducir() {
    videoPlay(this.#videoID);
  }
  pausar() {
    videoStop(this.#videoID);
  }
}

class Course {
  #name;

  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this.#name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return `El nombre del curso es: ${this.#name}`;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const cursoProgBasica = new Course({
  name: 'Curso gratis de programacion Basica',
  classes: [

  ],
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: 'Curso definitivo de HTML y CSS',
  classes: [

  ],
});
const cursoPracticoHTML = new Course({
  name: 'Curso practico de HTML y CSS',
  classes: [

  ],
  lang: 'english',
});

class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de desarrollo Web',
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});
const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    cursoProgBasica,
  ],
});
const escuelaVgs = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    cursoProgBasica,
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos... ' + this.name + ', solo puedes tomar cursos abiertos');
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos... ' + this.name + ', no puedes tomar cursos en ingles');
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor',
    });
    comment.publicar();
  }
}

const juan2 = new FreeStudent({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@gmail.com',
  twitter: 'fjuandc',
  learningPaths: [
    escuelaData,
    escuelaWeb,
  ],
});

const miguelito2 = new BasicStudent({
  name: 'miguelito',
  username: 'miguelito',
  email: 'miguelito@gmail.com',
  instagram: 'miguelitodc',
  learningPaths: [
    escuelaVgs,
    escuelaWeb,
  ],
});

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddyVega@gmail.com',
  instagram: 'freddier',
});