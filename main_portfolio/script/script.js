/* ============ typing Animation ============*/ 
var typed = new Typed(".typing", {
    strings:[" ","Web Designer","Web Developer","Graphic Designer","Freelnacer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ============ Aside =============*/ 
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection  = allSection.length;
      
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function (){
            removeBackSection();
            for(let j =0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    // allSection[j].classList.add("back-section")
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this)
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
      }
      function removeBackSection(){
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num){
        allSection[num].classList.add("back-section")
      }

      function showSection(element){
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }

      function updateNav(element){
        for(let i = 0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIdex);
        showSection(this);
        updateNav(this)
        removeBackSection();
        addBackSection(sectionIndex);
      });

      document.querySelector(".hire").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIdex);
        showSection(this);
        updateNav(this)
        removeBackSection();
        addBackSection(sectionIndex);
      });
      
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i = 0; i<totalSection; i++){
                    allSection[i].classList.toggle("open");
                }
            }


    /* ===== this is portfolio stting ======*/ 

    /*===== Portfolio Item Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter"),
filterBtns = FilterContainer.children;
totalFilterBtn = filterBtns.length;
PortfolioItems = document.querySelectorAll(".portfolio-item"),
totalportfolioItem = PortfolioItems.length;
for(let i=0; i < totalFilterBtn; i++)
{
    filterBtns[i].addEventListener("click", function()
    {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        for( let k=0; k<totalportfolioItem; k++)
        {
            if(filterValue === PortfolioItems[k].getAttribute("data-category"))
            {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
            else
            {
                PortfolioItems[k].classList.remove("show");
                PortfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all")
            {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
        }
    })
}


/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxClose = lightbox.querySelector(".lightbox-close"),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;
for(let i=0; i<totalportfolioItem; i++)
{
PortfolioItems[i].addEventListener("click", function()
{
   itemIndex=i;
   changeItem();
   toggleLightbox();
})
}
function nextItem()
{
if(itemIndex == totalportfolioItem-1)
{
    itemIndex=0;
}
else
{
    itemIndex++
}
changeItem();
}
function prevItem()
{
if(itemIndex == 0)
{
    itemIndex=totalportfolioItem-1;
}
else
{
    itemIndex--
}
changeItem();
}
function toggleLightbox()
{
lightbox.classList.toggle("open");
}
function changeItem()
{
imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
lightboxImg.src=imgSrc;
lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
}
// close lightbox
lightbox.addEventListener("click",function(event)
{
if(event.target === lightboxClose || event.target === lightbox)
{
  toggleLightbox()
}
})


/* ============== This is Email Sender js ================== */
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let body = "Name:" + name + "<br/> Email:" + email + "<br/> Phone Number:" + phone + "<br/> Subject:" + subject + "<br/> Message:" + message;

    Email.send({

        /* ===== this is frist way for your inquairy but not safe ===== */
        /* Host : "smtp.elasticemail.com",
         Username : "uzairullah397@gmail.com",
         Password : "4064E651DB1F57E76FECFD7566DC905B2855",*/

        SecureToken : "39cc2a84-7902-4c8a-9213-fe55bbe2bdfe",
        To : 'uzairullah397@gmail.com',
        From : "uzairullah397@gmail.com",
        Subject : "Message From My Website.",
        Body : body
    }).then(
      message => alert("Your Message Successfully Send Click " + message + " to goback")
    );
 }