const featuresDropdown = document.querySelector('.features-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const features = document.getElementById('features')
const company = document.getElementById('company')
const featuresArrowContainer = featuresDropdown.querySelector('.arrow-container');
const featuresDownArrow = featuresArrowContainer.querySelector('.down-arrow');
const featuresUpArrow = featuresArrowContainer.querySelector('.up-arrow');
const featuresContent = featuresDropdown.querySelector('.features-content');

const companyArrowContainer = companyDropdown.querySelector('.arrow-container');
const companyDownArrow = companyArrowContainer.querySelector('.down-arrow');
const companyUpArrow = companyArrowContainer.querySelector('.up-arrow');
const companyContent = companyDropdown.querySelector('.company-content');

featuresArrowContainer.addEventListener('click', () => {
    if (featuresContent.style.display === 'none') {
        featuresContent.style.display = 'block';
        featuresDownArrow.style.display = 'none';
        featuresUpArrow.style.display = 'inline-block';
    } else {
        featuresContent.style.display = 'none';
        featuresDownArrow.style.display = 'inline-block';
        featuresUpArrow.style.display = 'none';
    }
})

if (window.innerWidth >= 1000) {
    features.addEventListener('mouseover', () => {
        featuresContent.style.display = 'block';
        featuresDownArrow.style.display = 'none';
        featuresUpArrow.style.display = 'inline-block';
    })

    features.addEventListener('mouseout', () => {
        featuresContent.style.display = 'none';
        featuresDownArrow.style.display = 'inline-block';
        featuresUpArrow.style.display = 'none';
    })


}

companyArrowContainer.addEventListener('click', () => {
    if (companyContent.style.display === 'none') {
        companyContent.style.display = 'block';
        companyDownArrow.style.display = 'none';
        companyUpArrow.style.display = 'inline-block';
    } else {
        companyContent.style.display = 'none';
        companyDownArrow.style.display = 'inline-block';
        companyUpArrow.style.display = 'none';
    }
})

if (window.innerWidth >= 1000) {
    company.addEventListener('mouseover', () => {
        companyContent.style.display = 'block';
        companyDownArrow.style.display = 'none';
        companyUpArrow.style.display = 'inline-block';
    })

    company.addEventListener('mouseout', () => {
        companyContent.style.display = 'none';
        companyDownArrow.style.display = 'inline-block';
        companyUpArrow.style.display = 'none';
    })
}

const hamburger = document.querySelector(".hamburger");
const navMenuSignIn = document.querySelectorAll(".nav-menu,.sign-in");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuSignIn.forEach((element) => {
        element.classList.toggle("active");
    });
});


