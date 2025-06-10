'use strict';

/**
 * SIDEBAR TOGGLE
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/**
 * PAGE NAVIGATION
 */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-nav-link");

    pages.forEach(page => {
      if (page.dataset.page === target) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/**
 * PORTFOLIO FILTER
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const projectItems = document.querySelectorAll("[data-filter-item]");

let lastClickedBtn = filterBtns[0];

const filterItems = function (value) {
  projectItems.forEach(item => {
    const category = item.dataset.category;

    if (value === "all" || value === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.toLowerCase();
    filterItems(value);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

select.addEventListener("click", () => {
  select.classList.toggle("active");
});

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.textContent.toLowerCase();
    selectValue.textContent = item.textContent;
    select.classList.remove("active");
    filterItems(selectedValue);
  });
});

/**
 * CONTACT FORM VALIDATION
 */
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    const isValid = Array.from(formInputs).every(input => input.value.trim() !== "");
    formBtn.disabled = !isValid;
  });
});
