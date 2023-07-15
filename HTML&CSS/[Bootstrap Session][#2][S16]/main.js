var animeCategories = [
  'Adventure',
  'Action',
  'Comedy',
  'Slice of Life',
  'Drama',
  'Fantasy',
  'Supernatural',
  'Magic',
  'Mystery',
  'Horror',
  'Psychological',
  'Sci-Fi',
  'Romance'
];

var dropdownMenu = document.getElementById("animeDropdown");
animeCategories.forEach(function(category) {
  var li = document.createElement("li");
  var link = document.createElement("a");
  link.className = "dropdown-item";
  link.href = "#";
  link.innerText = category;
  li.appendChild(link);
  dropdownMenu.appendChild(li);
});



    

