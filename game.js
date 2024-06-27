const content = document.querySelector("#content")


//main function to create the grid
function createGrid(columns = 16,rows=16){
    if(columns<=50 && rows<=50){
    const all = document.createElement("div")
    all.classList.add("all")
    for (let j = 1; j <= rows; j++) {
        const row = document.createElement("div")
        row.style.borderLeft = "solid teal"
        row.style.borderTop="solid teal"
        for (let i = 1; i <= columns; i++) {
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            if (j == rows) {
                pixel.style.borderRight = "solid teal"
            }
            if(j<=rows){
                pixel.style.borderBottom = "solid teal"
            }
            pixel.style.height = "20px"
            pixel.style.width = "20px"
            row.appendChild(pixel)
            all.appendChild(row)
        }
        content.appendChild(all)
    }
}else{
    alert("Thats too big for your screen!")
}
}

const refresh = document.querySelector("#refresh")
refresh.addEventListener("click", ()=>{
    const allPixels = document.querySelector(".all");
    const columns = document.getElementById("columns");
    const rows = document.getElementById("rows")
    content.removeChild(allPixels);
    createGrid(Number(columns.value),Number(rows.value))


    const pixels = document.querySelectorAll(".pixel")

    pixels.forEach(eachPixel => {
    eachPixel.addEventListener("mouseover", () => {
    let red = Math.round(Math.random() *256)
    let green = Math.round(Math.random() *256)
    let blue = Math.round(Math.random() *256)
    eachPixel.style.backgroundColor = `rgb(${red},${green},${blue})`
    ;})})
})

createGrid()

const pixels = document.querySelectorAll(".pixel")

pixels.forEach(eachPixel => {
eachPixel.addEventListener("mouseover", () => {
    let red = Math.round(Math.random() *256)
    let green = Math.round(Math.random() *256)
    let blue = Math.round(Math.random() *256)
    eachPixel.style.backgroundColor = `rgb(${red},${green},${blue})`
    ;})})
// const pixel = document.querySelectorAll(".pixel")

// pixel.addEventListener("mouseover", ()=>{
//     console.log("something happened")})