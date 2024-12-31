let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const tabs = document.querySelectorAll(".tab");

function showSlide(n) {
    slideIndex = n;
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? "block" : "none";
    });
    tabs.forEach((tab, index) => {
        tab.classList.toggle("active", index === n);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // الانتقال إلى الشريحة التالية
    showSlide(slideIndex);
}

// تشغيل المؤقت للتغيير التلقائي
setInterval(nextSlide, 4000); // تغيير الصورة كل 4 ثوانٍ


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementById("defaultOpen").click();


//هسا صار الوقت نتعامل مع الكاونتر
let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');


// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

///////////////////////////////////////////////////
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
