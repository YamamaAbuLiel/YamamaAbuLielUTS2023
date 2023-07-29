const customerInfo = {
    custCode: "001",
    custName: "Yamama Abu Liel",
    custAge: 22,
    custPhone: "123-456-7890",
    custMobile: "0598184639",
    custAddress: "Al-Masaken St, Nablus",
    custEmail: "Abulielyamama9@gmail.com",
    fax: "987-123-4567",
  };
    //In The Main task you write consol.Writeline but it gives me not defined so i used console.log instead

function logCustomerInfo(customer) {
    try {
      console.log("Customer Code:", customer.custCode);
      console.log("Customer Name:", customer.custName);
      console.log("Customer Age:", customer.custAge);
      console.log("Customer Phone:", customer.custPhone);
      console.log("Customer Mobile:", customer.custMobile);
      console.log("Customer Address:", customer.custAddress);
      console.log("Customer Email:", customer.custEmail);
      console.log("Customer Fax:", customer.fax);
     
    } catch (error) {
      console.error("Error occurred while logging customer information:", error.message);
    }
  }

  logCustomerInfo(customerInfo);



  function printUsersAge() {
    try {
        const users = [
            { name: "Zead", age: 36 },
            { name: "Ahmad", age: 35 },
            { name: "Mohammed", age: 40 },
          ];
      alert(users[0].name+"'s Age is: " + users[0].age);
    } catch (error) {
      console.error("Error occurred in MyFunction:", error.message);
    }
  }
  

  