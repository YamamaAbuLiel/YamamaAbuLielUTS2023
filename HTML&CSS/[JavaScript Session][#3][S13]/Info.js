async function GetInfo() {
    const userIDInput = document.getElementById('ID');
    const userID = userIDInput.value;
  
    if (userID==="") {
      alert('Please Enter  User ID.');
      return;
    }
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      if (!response.ok) {
        throw new Error('User not found.');
      }
  
      const user = await response.json();
      document.getElementById('Name').textContent = user.name;
      document.getElementById('user-name').textContent = user.username;
      document.getElementById('Email').textContent = user.email;
      document.getElementById('City').textContent = user.address.city;
      document.getElementById('Street').textContent = user.address.street;
      document.getElementById('ZipCode').textContent = user.address.zipcode;
      document.getElementById('Found').textContent = 'User Found';
      document.getElementById('Found').style.color = 'green';
    } catch (error) {
      console.error(error);
      document.getElementById('Found').textContent = ' User Not Found';
      document.getElementById('Found').style.color = 'red';
    }
  }
  
  

  
  function Reset() {
    const userIdInput = document.getElementById('ID');
    const nameLabel = document.getElementById('Name');
    const userNameLabel = document.getElementById('user-name');
    const emailLabel = document.getElementById('Email');
    const cityLabel = document.getElementById('City');
    const streetLabel = document.getElementById('Street');
    const zipcodeLabel = document.getElementById('ZipCode');
    const foundLabel = document.getElementById('Found');
  
    userIdInput.value = "";
    nameLabel.textContent = "";
    userNameLabel.textContent = "";
    emailLabel.textContent = "";
    cityLabel.textContent = "";
    streetLabel.textContent = "";
    zipcodeLabel.textContent = "";
    foundLabel.textContent = "";
  }
  
  function ResetImage() {
    const imageIdInput = document.getElementById('getID');
    const albumIdLabel = document.getElementById('getalbumID');
    const imageResultLabel = document.getElementById('getResult');
    const imageElement = document.getElementById('The-image');
  
    imageIdInput.value = "";
    albumIdLabel.textContent = "";
    imageResultLabel.textContent = "";
    imageElement.src = "";
  }
async function GetImage(){

const imageIdInput=document.getElementById('getID');
const imageID=imageIdInput.value;

if(imageID===""){
    alert("Please Enter  Image ID.")
}

try{
    const res=await fetch('https://jsonplaceholder.typicode.com/photos/${imageID}')
    if(!res.ok){
        throw new error ("Image Not Found");
    }

    const image=await res.json();
    document.getElementById('getalbumID').textContent=image.albumId;
    document.getElementById('The-image').src=image.url;
    document.getElementById('tooltiptext').textContent=image.title;
    document.getElementById('getResult').textContent="Image Found";
    document.getElementById('getResult').style.color="green";

    const ToolTip=document.getElementById('tooltiptext');

    

    

    function showTooltip()
    {
        ToolTip.style.visibility='visable';


    }

    function hideTooltip()
    {
        ToolTip.style.visibility='hidden';
    }

}
catch (error)
{
    document.getElementById('getResult').textContent="Image Not Found";
    document.getElementById('getResult').style.color="red";

}
}



















    function GetImage() {
    const imageIdInput = document.getElementById('getID');
    const albumIdLabel = document.getElementById('getalbumID');
    const imageResultLabel = document.getElementById('getResult');
    const imageElement = document.getElementById('The-image');
    const Tooltip=document.getElementById("tooltiptext");
    
  
    const imageId = imageIdInput.value;
    
    if (imageId) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`)
        .then(response => response.json())
        .then(imageInfo => {
          albumIdLabel.textContent = imageInfo.albumId;
          imageElement.src = imageInfo.url;
          imageResultLabel.textContent = 'Image Found';
          imageResultLabel.style.color="green";
          Tooltip.textContent=imageInfo.title;

          function showTooltip() {
            Tooltip.style.visibility = 'visible';
          }
          
          function hideTooltip() {
            Tooltip.style.visibility = 'hidden';
          }
        })
        .catch(error => {
            console.error('Error:', error);
            imageElement.src = "";
            imageResultLabel.textContent = 'Image Not Found';
           imageResultLabel.style.color="red";
           });
    }
    else{
        alert("There Is No ID !!")
    }
  }
  
   
