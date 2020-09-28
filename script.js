const year = document.querySelector('#year');
year.innerHTML = " " + new Date().getFullYear() + " ";

const footBio = document.querySelector('#foot-bio');
footBio.innerHTML = 'The essence of Dani Fire lies in our commitment to creating a powerful narrative for recreational and medical cannabis. At Dani Fire, we thrive on the notion that all cannabis products should be cultivated with quality in mind.'

// Verify Modal
const verifyFunc = () => {
  const verify = document.querySelector('.verify-container');
  const modalOn = () => {
    verify.classList.remove('verify-hidden');
  };

  if (sessionStorage.getItem('key') === null) {
    window.onload = () => {
      setTimeout(modalOn, 10);
    };

    const verifyBtn = document.querySelector('.verify-btn');

    verifyBtn.addEventListener('click', () => {
      verify.classList.add('verify-hidden');
      sessionStorage.setItem('key', 'verified');
    });

  } else {
    verify.classList.add('verify-hidden');
  }

}

verifyFunc();

// hamburger menu
const x = document.getElementById('x1');

const dropcont = document.getElementById('dropcont');

x.onclick = function () {
  dropcont.style.display = "none";
  x.style.display = "none";
  hamburger.style.display = "block";
}

const hamburger = document.getElementById('hamburger');

hamburger.onclick = function () {
  dropcont.style.display = "block";
  x.style.display = "flex";

}

// broswer size for hamburge menu
if (screen.width > 1200) {
  hamburger.display = "none";
}