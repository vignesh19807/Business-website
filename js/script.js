function showMessage(){


let userName =
document.getElementById("name").value;

let userEmail =
document.getElementById("email").value;

if(userName === "" || userEmail === ""){

    document.getElementById("message").className =
    "error";

    document.getElementById("message").innerHTML =
    "Please fill all fields!";

}

else if(!isNaN(userName)){

    document.getElementById("message").className =
    "error";

    document.getElementById("message").innerHTML =
    "Name cannot be only numbers!";

}

else if(userName.length < 3){

    document.getElementById("message").className =
    "error";

    document.getElementById("message").innerHTML =
    "Name must contain at least 3 characters!";

}

else if(!userEmail.includes("@")){

    document.getElementById("message").className =
    "error";

    document.getElementById("message").innerHTML =
    "Please enter a valid email!";

}

else{

    localStorage.setItem(
        "userName",
        userName
    );

    localStorage.setItem(
        "userEmail",
        userEmail
    );

    document.getElementById("message").className =
    "success";

    document.getElementById("message").innerHTML =
    "Thank you " + userName +
    "! We will contact you at " +
    userEmail;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userMessage").value = "";

}


}

function toggleMessage(){

let message =
document.getElementById("message");

if(message.style.display === "none"){

    message.style.display = "block";

}
else{

    message.style.display = "none";

}

}
function toggleFAQ(faqId){

    let answer =
    document.getElementById(faqId);

    if(answer.style.display === "none"){

        answer.style.display = "block";

    }
    else{

        answer.style.display = "none";

    }

}

document.getElementById("sendBtn")
.addEventListener("click", showMessage);
let services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Cloud Solutions",
    "UI/UX Design",
    "SEO OPTIMAIZATION"
];

let servicesHTML = "";



for(let i = 0; i < services.length; i++){

    servicesHTML +=
    "<div class='service-card'>" +
    "<h3>" + services[i] + "</h3>" +
    "</div>";

}

document.getElementById("servicesContainer").innerHTML =
servicesHTML;



let faqs = [

    {
        question: "What services do you provide?",
        answer: "We provide Web Development, Mobile Apps and Cloud Solutions."
    },

    {
        question: "Do you build mobile apps?",
        answer: "Yes, we develop Android and iOS applications."
    },

    {
        question: "Do you provide cloud solutions?",
        answer: "Yes, we provide secure cloud infrastructure solutions."
    }

];

let faqHTML = "";

for(let i = 0; i < faqs.length; i++){

    faqHTML +=
    "<div class='faq-card'>" +
    "<h3>" + faqs[i].question + "</h3>" +
    "<p>" + faqs[i].answer + "</p>" +
    "</div>";

}

document.getElementById("faqContainer").innerHTML =
faqHTML;

let events = [

    {
        title: "Hackathon",
        date: "20 June 2026",
        location: "PPG Institute"
    },

    {
        title: "Tech Fest",
        date: "25 June 2026",
        location: "Auditorium"
    },

    {
        title: "Workshop",
        date: "30 June 2026",
        location: "Lab 3"
    }

];
    events.push({

    title: "Coding Contest",

    date: "5 July 2026",

    location: "Computer Lab"

});
let eventsHTML = "";

for(let i = 0; i < events.length; i++){

    eventsHTML +=
    "<div class='event-card'>" +
    "<h3>" + events[i].title + "</h3>" +
    "<p>Date: " + events[i].date + "</p>" +
    "<p>Location: " + events[i].location + "</p>" +
    "</div>";

}

document.getElementById("eventsContainer").innerHTML =
eventsHTML;


document.getElementById("name").value =
localStorage.getItem("userName");

document.getElementById("email").value =
localStorage.getItem("userEmail");

function toggleMenu(){

    let menu =
    document.getElementById("navMenu");

    if(menu.style.display === "flex"){

        menu.style.display = "none";

    }

    else{

        menu.style.display = "flex";

    }

}
function closeMenu(){

    let menu =
    document.getElementById("navMenu");

    menu.style.display = "none";

}
window.addEventListener("scroll", function(){

    let sections =
    document.querySelectorAll(".hidden");

    sections.forEach(function(section){

        let sectionTop =
        section.getBoundingClientRect().top;

        let screenHeight =
        window.innerHeight;

        if(sectionTop < screenHeight - 100){

            section.classList.add("show");

        }

    });

});
function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");

    let themeBtn =
    document.getElementById("themeBtn");

    if(document.body.classList.contains("dark-mode"))
    {
        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = "☀️";
    }
    else
    {
        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = "🌙";
    }
}
if(localStorage.getItem("theme") === "dark")
{
    document.body.classList.add("dark-mode");

    document.getElementById("themeBtn").innerHTML = "☀️";
}
let counterStarted = false;
function animateCounter(id, target)
{
    let count = 0;

    let counter = setInterval(function(){

        count++;

        document.getElementById(id).innerHTML = count;

        if(count >= target)
        {
            clearInterval(counter);
            document.getElementById(id).innerHTML = target + "+";
        }

    }, 30);
}
window.addEventListener("scroll", function(){

    let statsSection =
    document.querySelector(".stats");

    let statsTop =
    statsSection.getBoundingClientRect().top;

    let screenHeight =
    window.innerHeight;

    if(statsTop < screenHeight - 100 && !counterStarted)
    {
        counterStarted = true;

        animateCounter("projects",100);
        animateCounter("clients",50);
        animateCounter("experience",10);
    }

});