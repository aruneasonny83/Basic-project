


  function load() {
    setTimeout(myURL, 4000);
    var result = document.getElementById("result");
    result.innerHTML = `The page will load after delay of 4 seconds`;
 }

 function myURL() {
    window.open('file:///home/ukijaffna/Downloads/ASSIGNMENT1/index.html' , name = self);
 }