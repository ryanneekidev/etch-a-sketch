const pixelsContainer=document.querySelector(".pixelsContainer");
const gridSizeDisplay=document.querySelector(".gridSizeDisplay");
const gridSizeInput=document.querySelector(".gridSizeInput");
const gridSizeInputButton=document.querySelector(".gridSizeInputButton");

let gridSize=8;

function generateGrid(gridSize){
    pixelsContainer.innerHTML="";
    for(let i=0;i<gridSize*gridSize;i++){
        let pixel=document.createElement("div");
        pixel.className="pixel";
        pixel.style.width=Math.round(512/gridSize)+"px";
        pixel.style.height=Math.round(512/gridSize)+"px";
        pixel.addEventListener("mouseenter", ()=>{
            pixel.style.backgroundColor="rgb("+Math.random()*254+","+Math.random(0,255)*254+","+Math.random(0,255)*254+")"
        })
        pixelsContainer.appendChild(pixel);
    }
}
gridSizeDisplay.innerHTML="Grid size: "+gridSize;
generateGrid(gridSize);

gridSizeInputButton.onclick=()=>{
    if(gridSizeInput.value!="" && gridSizeInput.value<=64){
        gridSize=gridSizeInput.value;
        gridSizeDisplay.innerHTML="Grid size: "+gridSizeInput.value;
        generateGrid(gridSize);
    }
}
