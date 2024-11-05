// Question 1
const data = {
    name: "Neetha Francis",
    phone: 7766554478,
    place: "Chalakudy",
    pincode: 680307
};

const button = document.createElement("button");
button.innerText = "Show Details";
button.style.margin = "5px";

var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "150px";
div.style.background = "pink";
div.style.color = "black";
div.style.display = "none";

button.addEventListener("click", function () {
    div.innerHTML = `
    Name: ${data.name} <br>
    Phone: ${data.phone}<br>
    Place: ${data.place}<br>
    Pin Code: ${data.pincode}`;
    div.style.display = "block";
});

document.body.appendChild(button);
document.body.appendChild(div);


// Question 2
const fruits = ["apple", "orange", "Mango", "Banana", "Strawberries"];
const messgediv = document.getElementById("messgediv");

fruits.forEach((fruit) => {
    const cbox = document.createElement("input");
    cbox.setAttribute("type", "checkbox");
    cbox.setAttribute("value", fruit);

    const boxLabel = document.createElement("label");
    boxLabel.textContent = fruit;
    boxLabel.appendChild(cbox);
    document.body.appendChild(boxLabel);
    boxLabel.appendChild(messgediv)

    cbox.addEventListener("change", function(){
        const checkedFruit = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(checkbox => checkbox.value);
        messgediv.textContent = checkedFruit.join(", ");
    });
});


// Question 3
let toggle = true;
const togglebtn = document.getElementById("togglebtn");
const togglepara = document.getElementById("value");

togglebtn.addEventListener("click", function () {
    toggle = !toggle;
    togglepara.innerText = toggle;
    console.log(toggle);
    togglebtn.innerText = toggle ? "True" : "False";
});


// Question 4.
let cindex = 0;
const s = document.querySelectorAll(".img_slide");
console.log(s);

function showslide(index){
    s.forEach((slide, i) =>{
        slide.classList.remove('active');
        if(index === i){
            slide.classList.add('active');
        }
    });
}

function nextbtn(){
    cindex = (cindex+1) % s.length;
    console.log("Entered nextbtn");
    showslide(cindex);

}

function previousbtn(){
    cindex = (cindex - 1 + s.length) % s.length;
    showslide(cindex);
}
showslide(cindex);