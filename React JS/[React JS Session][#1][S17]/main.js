const Employee = [
    { name: 'Zead Khalid',address:"Nablus", age:35,gender:"Male" ,mobile:"05911111" },
    { name: 'Ahamd Mohmmed',address:"Ramallah", age: 30,gender:"Male" ,mobile: '05922222' },
    { name: 'Maia Isa',address:"Tulkarem", age:27,gender:"Female" ,mobile: '05933333' },
  ];

  const table = document.getElementById('employeeTable');

Employee.forEach(employee => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = employee.name;
  row.appendChild(nameCell);

  const addressCell = document.createElement('td');
  addressCell.textContent = employee.address;
  row.appendChild(addressCell);

  const ageCell = document.createElement('td');
  ageCell.textContent = employee.age;
  row.appendChild(ageCell);

  const genderCell = document.createElement('td');
  genderCell.textContent = employee.gender;
  row.appendChild(genderCell);

  const mobileCell = document.createElement('td');
  mobileCell.textContent = employee.mobile;
  row.appendChild(mobileCell);
  row.style.border = '2px double ';
  table.style.border = '2px double black';

  table.appendChild(row);
});