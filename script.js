
document.addEventListener('DOMContentLoaded',()=>{
  const element = document.getElementById("greeterAnimation");
  const fullText = "Welcome to my website!! ^.^";
  let i = 0;
  let typingTimer;

  function type() {
    if (i < fullText.length) {
      element.textContent += fullText.charAt(i);
      i++;
      typingTimer = setTimeout(type, 100);
    }
  }
  
  element.textContent = "";
  type();

  document.querySelector
});

