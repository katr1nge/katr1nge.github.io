// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the content container element
var contentContainer = document.querySelector(".content-container");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("open");
  contentContainer.classList.add("blur");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove("open");
  contentContainer.classList.remove("blur");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("open");
    contentContainer.classList.remove("blur");
  }
}
  function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
      element.innerHTML = "АЙПІ СКОПІЙОВАНО";
      setTimeout(function() {
        element.innerHTML = "АЙПІ СЕРВЕРУ: play.eneida.club";
      }, 2000);
    }, function(err) {
      console.error('Error copying text to clipboard: ', err);
    });
  }
fetch('https://github.com/katr1nge/eneida-files/blob/main/benbold.ttf?raw=true', {mode: 'no-cors'})
  .then(response => {
    // The response will be opaque, so we can't access the response content
    console.log(response.ok); // true if the response is successful
  })
  .catch(error => {
    console.error(error);
  });
