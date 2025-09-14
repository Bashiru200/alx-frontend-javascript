// interface Student{
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	location: string;
// }

// const students: Student[] = [
// 	{ firstName: "Bashiru", lastName: "Barrie", age: 28, location:"3353 Acron Forest"},
// 	{firstName: "Zotaria", lastName: "Freeman", age: 22, location:"2034 Pepperpike way"}
// ]

// // get the body of the table
// const tableBody = document.querySelector("#studentTable tbody");

// // loop through the array to create table rows
// students.forEach(Student => {
// 	const row = document.createElement("tr");

// 	const firstname= document.createElement("td");
// 	firstname.textContent = Student.firstName
	
// 	const lastname = document.createElement("td");
// 	lastname.textContent = Student.lastName

// 	const age = document.createElement("td");
// 	age.textContent = Student.age

// 	const location = document.createElement("td");
// 	location.textContent = Student.location

// 	row.appendChild(firstname);
// 	row.appendChild(lastname);
// 	row.appendChild(age);
// 	row.appendChild(location);

// 	tableBody.appendChile(row);
// });



interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }
  
  // Create two students
  const student1: Student = {
	firstName: 'Alice',
	lastName: 'Smith',
	age: 22,
	location: 'New York'
  };
  
  const student2: Student = {
	firstName: 'Bob',
	lastName: 'Johnson',
	age: 25,
	location: 'Los Angeles'
  };
  
  // Create array of students
  const studentsList: Student[] = [student1, student2];
  
  // Create table
  const table = document.createElement('table');
  table.border = '1';
  
  const tableBody = document.createElement('tbody');
  
  // Create header row (optional)
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  tableBody.appendChild(headerRow);
  
  // Add rows for each student
  studentsList.forEach((student) => {
	const row = document.createElement('tr');
  
	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;
  
	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;
  
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
  