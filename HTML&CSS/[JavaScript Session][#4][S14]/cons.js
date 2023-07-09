 function DispalyInfo(){
    console.log('My Info');
 }
 function DispalyWarning(){
    console.warn('My Warning');
 }

  function DispalyError()
  {
    console.error('My Error');
  }

  function DispalyTable()
  {
    const User=
    [
        {Name:"Zeyad Abed Aljalil " ,Age :36},
        {Name:"Ahmad Hanani " ,Age :35},
        {Name:"Ahmad Eran " ,Age :39}
    ]

    console.table(User);
  }