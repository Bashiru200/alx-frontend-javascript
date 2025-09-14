interface Student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const students: Student[] = [
	{ firstName: "Bashiru", lastName: "Barrie", age: 28, location:"3353 Acron Forest"},
	{firstName: "Zotaria", lastName: "Freeman", age: 22, location:"2034 Pepperpike way"}
]

// get the body of the table
const tableBody = document.querySelector("#studentTable tbody");

// loop through the array to create table rows
students.forEach(Student => {
	const row = document.createElement("tr");

	const firstname= document.createElement("td");
	firstname.textContent = Student.firstName
	
	const lastname = document.createElement("td");
	lastname.textContent = Student.lastName

	const age = document.createElement("td");
	age.textContent = Student.age

	const location = document.createElement("td");
	location.textContent = Student.location

	row.appendChild(firstname);
	row.appendChild(lastname);
	row.appendChild(age);
	row.appendChild(location);

	tableBody.appendChile(row);
});
