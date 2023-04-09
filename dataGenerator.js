const faker = require('faker');
const bcrypt = require('bcrypt');

const generateStudentData = (count) => {
  const students = [];

  // Generate student data
  for (let i = 0; i < count; i++) {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const studentNumber = faker.random.number({ min: 100000000, max: 999999999 }).toString();
    const major = faker.name.jobArea();
    const faculty = faker.lorem.word();
    const academicAdvisor = faker.name.findName();
    const gpa = faker.random.number({ min: 1, max: 4, precision: 0.1 });
    const password = faker.internet.password();

    // Hash the password
    const passwordHash = bcrypt.hashSync(password, 10);

    // Create a student object
    const student = {
      name,
      email,
      studentNumber,
      major,
      faculty,
      academicAdvisor,
      gpa,
      passwordHash // Store the hashed password
    };

    students.push(student);
  }

  return students;
};

const students = generateStudentData(50);

module.exports = students;
