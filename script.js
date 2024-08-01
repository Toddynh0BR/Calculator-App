  const OptOne = document.querySelector(".option1");
  const OptTwo = document.querySelector(".option2");
  const OptThree = document.querySelector(".option3");
  
  const input = document.getElementById("input");
  
  const ThemeNumber = document.getElementById("themeNumber");
  
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      KeyPress(button.id);
    });
  });
  
  function KeyPress(value) {
    if (value === 'reset') {
      input.value = '';
    } else if (value === 'del') {
      input.value = input.value.slice(0, -1);
    } else if (value === 'result') {
      try {
        input.value = eval(input.value); 
      } catch {
      }
    } else {
      input.value += value;
    }
  }

  OptOne.addEventListener("click", () => {
    ThemeNumber.textContent = "1";
    document.documentElement.classList.add("one");
  
    document.documentElement.classList.remove("two");
    document.documentElement.classList.remove("three");
  });
  
  OptTwo.addEventListener("click", () => {
    ThemeNumber.textContent = "2";
    document.documentElement.classList.add("two");
  
    document.documentElement.classList.remove("one");
    document.documentElement.classList.remove("three");
  });
  
  OptThree.addEventListener("click", () => {
    ThemeNumber.textContent = "3";
    document.documentElement.classList.add("three");
  
    document.documentElement.classList.remove("one");
    document.documentElement.classList.remove("two");
  });
  