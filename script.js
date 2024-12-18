const addButtonTrigger = (el) => {
    el.addEventListener("click", () => {
      // document.body.toggleClass('stopScroll');
      const popupEl = document.querySelector(`.${el.dataset.for}`);
      if(popupEl)
      popupEl.classList.toggle("popup--visible");
    });
  };
  
  Array.from(document.querySelectorAll("button[data-for]")).forEach(
    addButtonTrigger
  );
  window.onclick = function (event) {
    const visiblePopups = document.querySelectorAll(".popup--visible");
    visiblePopups.forEach((popupEl) => {
      if (event.target === popupEl) {
        popupEl.classList.remove("popup--visible");
      }
    });
  };
 
  function mode(){
    var ele = document.body;
    ele.classList.toggle("light-mode");
  }