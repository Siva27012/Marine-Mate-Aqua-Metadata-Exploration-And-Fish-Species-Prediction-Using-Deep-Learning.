
const toggle = document.querySelector(".toggle");
const nav_bar = document.querySelector(".table-of-contents");
const list = document.querySelector(".table__list");

toggle.addEventListener("click", ()=>{
  if (toggle.textContent === "hide") {
    toggle.textContent = "show";
  }
  else {
    toggle.textContent = "hide";
  }
  
  list.classList.toggle("list-invisible");
  nav_bar.classList.toggle("table-narrow");
});


  // Get all the links in the table of contents
  const links = document.querySelectorAll(".table__link");

  // Add click event listeners to each link
  links.forEach(link => {
    link.addEventListener("click", () => {
      // Get the data-index attribute value of the clicked link
      const dataIndex = link.getAttribute("data-index");
      
      // Hide all paragraph contents
      const paragraphs = document.querySelectorAll(".paragraph_content");
      paragraphs.forEach(paragraph => {
        paragraph.style.display = "none";
      });
      
      // Show the paragraph content associated with the clicked link
      const targetParagraph = document.getElementById(dataIndex);
      if (targetParagraph) {
        targetParagraph.style.display = "block";
      }
    });
  });
