document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById("greeterAnimation");
  const line2 = document.getElementById("scrollAnimation");
  
  const text1 = "Welcome to my website!! ^.^";
  const text2 = "Scroll down if you want to see more!";
  
  let i = 0;
  let j = 0;

  function typeLine1() {
    if (i < text1.length) {
      line1.textContent += text1.charAt(i);
      i++;
      setTimeout(typeLine1, 100);
    } else {
      setTimeout(typeLine2, 500); 
    }
  }

  function typeLine2() {
    if (j < text2.length) {
      line2.textContent += text2.charAt(j);
      j++;
      setTimeout(typeLine2, 50);
    }
  }

  line1.textContent = "";
  line2.textContent = "";
  typeLine1();
});