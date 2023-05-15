const aboutStratingAnimatingPoint = 680;
const aboutEndingAnimatingPoint = 1100;
const skillStratingAnimatingPoint = 1400;
const skillEndingAnimatingPoint = 2100;
const projectsStratingAnimatingPoint = 2400;
const projectsEndingAnimatingPoint = 3100;
const contactStratingAnimatingPoint = 3200;
const contactEndingAnimatingPoint = 4000;
const date = new Date();

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var day = date.getDay();

var aboutHeading = document.getElementById("about-heading");
var skillHeading = document.getElementById("skill-heading");
var projectsHeading = document.getElementById("projects-heading");
var contactHeading = document.getElementById("contact-heading");
var contactDay = document.getElementById("day");

contactDay.innerText = days[day - 1];

var skillPercentage = document.querySelectorAll(".percent");
var skillIcon = document.querySelectorAll(".icon");
var skillItems = document.querySelectorAll(".skill-items");
var projectItems = document.querySelectorAll(".project-items");


window.addEventListener("scroll", function (event) {

    var scrollVal = this.scrollY;
    var width = this.innerWidth;

    if(width > 1600)
    {
        for(var item of skillItems)
        {
            item.classList.add("for-big-screen");
        }
        for(var item of projectItems)
        {
            item.classList.add("project-items-for-big-screen");
        }
    }
    else
    {
        for(var item of skillItems)
        {
            item.classList.remove("for-big-screen");
        }
        for(var item of projectItems)
        {
            item.classList.remove("project-items-for-big-screen");
        }
    }


    if(scrollVal >= aboutStratingAnimatingPoint && scrollVal <= aboutEndingAnimatingPoint)
    {
        aboutHeading.classList.add("main-heading");
    }
    else
    {
        aboutHeading.classList.remove("main-heading");
    }

    if(scrollVal >= skillStratingAnimatingPoint && scrollVal <= skillEndingAnimatingPoint)
    {
        skillHeading.classList.add("main-heading");
        
        for(var e of skillIcon)
        {
            e.classList.add("icon-animation");
        }      
        for(var e of skillPercentage)
        {
            e.classList.add("percent-animation");
        }        
    }
    else
    {
        skillHeading.classList.remove("main-heading");

        for(var e of skillIcon)
        {
            e.classList.remove("icon-animation");
        } 
        for(var e of skillPercentage)
        {
            e.classList.remove("percent-animation");
        }
    }

    if(scrollVal >= projectsStratingAnimatingPoint && scrollVal <= projectsEndingAnimatingPoint)
    {
        projectsHeading.classList.add("main-large-heading");
    }
    else
    {
        projectsHeading.classList.remove("main-large-heading");
    }

    if(scrollVal >= contactStratingAnimatingPoint && scrollVal <= contactEndingAnimatingPoint)
    {
        contactHeading.classList.add("main-large-heading");
    }
    else
    {
        contactHeading.classList.remove("main-large-heading");
    }
});

