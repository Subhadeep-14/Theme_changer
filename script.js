let header = document.getElementById("head");
let header1 = document.getElementById("head1");
let pic = document.getElementById("brightimg");
let fontt = document.getElementsByTagName("p");
let subma = document.getElementById("submain");
let pheader = document.getElementById("fh");
let may = document.getElementById("mai"); 
let sheader = document.getElementById("sh");
let line = document.getElementsByClassName("underline");
let su1 = document.getElementById("sub1");
let su2 = document.getElementById("sub2");
let su5 = document.getElementById("sub5");
let su3 = document.getElementById("sub3");
let su4 = document.getElementById("sub4");
let su6 = document.getElementById("sub6");
let en = document.getElementById("ending");
let last = document.getElementById("th");


let inputs = document.getElementsByClassName("bx");

pic.addEventListener("click", function () {
    if (pic.src.includes("bright.png")) {
        pic.src = "./dark.png"; 

        header.style.backgroundColor = "#FAF3E1";
        header1.style.color = "#2D3C59";
        subma.style.backgroundColor = "#F5E7C6";
        pheader.style.color = "#2D3C59";
        may.style.backgroundColor = "#FAF3E1";
        sheader.style.color = "#2D3C59";
        su1.style.backgroundColor = "#F5E7C6";
        su2.style.backgroundColor = "#F5E7C6";
        su3.style.backgroundColor = "#F5E7C6";
        su4.style.backgroundColor = "#F5E7C6";
        su5.style.backgroundColor = "#F5E7C6";
        su6.style.backgroundColor = "#F5E7C6";
        en.style.backgroundColor = "#F5E7C6";
        last.style.color = "#2D3C59";

        for (let i = 0; i < fontt.length; i++) {
            fontt[i].style.color = "#2D3C59";
        }

    
        let style = document.createElement("style");
        style.innerHTML = `
            .bx::placeholder {
                color: #2D3C59;
                opacity: 1;
            }
        `;
        document.head.appendChild(style);

    } else {
        pic.src = "./bright.png"; 
        header.style.backgroundColor = "#452829";
        header1.style.color = "#D8BFD8";
        subma.style.backgroundColor = "#842A3B";
        pheader.style.color = "#D8BFD8";
        may.style.backgroundColor = "#452829";
        sheader.style.color = "#D8BFD8";
        su1.style.backgroundColor = "#842A3B";
        su2.style.backgroundColor = "#842A3B";
        su3.style.backgroundColor = "#842A3B";
        su4.style.backgroundColor = "#842A3B";
        su5.style.backgroundColor = "#842A3B";
        su6.style.backgroundColor = "#842A3B";
        en.style.backgroundColor = "#842A3B";
        last.style.color = "#D8BFD8";

        for (let i = 0; i < fontt.length; i++) {
            fontt[i].style.color = "#D8BFD8";
        }

        
        let style = document.createElement("style");
        style.innerHTML = `
            .bx::placeholder {
                color: white;
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
});
