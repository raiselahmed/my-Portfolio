// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "Freelancer";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "Continouse Learning";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "Frond end Devoloper";
//     }, 8000); //1s = 1000 milliseconds
// }

// textLoad();
// setInterval(textLoad, 12000);

var text1 = "Continuously Learning";
var text2 = "Front End Developer";
var text3 = "How are you?";

var span1 = document.querySelector(".text-1");
var span2 = document.querySelector(".text-2");
var span3 = document.querySelector(".text-3");

function typeWriter(text, span, delay) {
  var i = 0;
  var typing = setInterval(function() {
    if (i < text.length) {
      span.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      setTimeout(function() {
        deleteText(span);
      }, delay);
    }
  }, 100);
}

function deleteText(span) {
  var text = span.innerHTML;
  var i = text.length - 1;
  var deleting = setInterval(function() {
    if (i >= 0) {
      span.innerHTML = text.slice(0, i);
      i--;
    } else {
      clearInterval(deleting);
      if (span == span1) {
        typeWriter(text2, span2, 1000);
      } else if (span == span2) {
        typeWriter(text3, span3, 1000);
      } else if (span == span3) {
        setTimeout(function() {
          typeWriter(text1, span1, 0);
        }, 1000);
      }
    }
  }, 100);
}

typeWriter(text1, span1, 1000);
