function greetings(gH,name) {
    gH(name);
}

// const num = [45.65,78,98];
// const num= {id:798, brand:'lenevo'}

function gHandler(name){
    console.log('good morning',name)
}
// console.log();
function gEvening(name){
    console.log('good evening',name)
}

function gAfterNoon(name){
    console.log('good AfterNoon',name)
}

greetings(gHandler, 'Tom herry');
greetings(gHandler, 'Jerry');
greetings(gEvening,'Merry');
greetings(gAfterNoon,'Joha')

function subtn() {
    console.log('submit btn clicked')
}
document.getElementById('btn').addEventListener('click',subtn);
