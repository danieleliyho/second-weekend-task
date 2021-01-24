

let titleHead = ['topic','startedAt' ,'finishedAt', 'tasksGiven','tasksFinished',   'tasksFinished%' ,'totalTimeSpent',]


let table = [
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:11:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :8,
    
    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'java',

    startedAt : new Date("2021-01-20:13:05"),

    finishedAt : new Date("2021-01-20:15:00"),

    tasksGiven : 20,

    tasksFinished :7,

    totalTimeSpent : null,

    tasksFinishedPr : null,

    },
    {
    topic : 'javascript',

    startedAt : new Date("2021-01-20:07:00"),

    finishedAt : new Date("2021-01-20:09:00"),

    tasksGiven : 20,

    tasksFinished :13,

    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'python',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:14:00"),

    tasksGiven : 15,

    tasksFinished :9,
         
    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'c++',

    startedAt : new Date("2021-01-20:11:00"),

    finishedAt : new Date("2021-01-20:14:30"),

    tasksGiven : 18,

    tasksFinished :9,
        
    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'typescript',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:15:00"),

    tasksGiven : 10,

    tasksFinished :5,

    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'css',

    startedAt : new Date("2021-01-20:11:45"),

    finishedAt : new Date("2021-01-20:15:00"),

    tasksGiven : 19,

    tasksFinished :2,
    
    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'arrays',
                                                    
    startedAt : new Date("2021-01-20:13:00"),
                                                
    finishedAt : new Date("2021-01-20:20:00"),
                                                        
    tasksGiven : 25,
                                                        
    tasksFinished :12,

    totalTimeSpent : null,

    tasksFinishedPr : null,
    },
    {
    topic : 'objects',

    startedAt : new Date("2021-01-20:15:10"),

    finishedAt : new Date("2021-01-20:18:00"),

    tasksGiven : 13,

    tasksFinished :8,

    totalTimeSpent : null,

    tasksFinishedPr : null,
        },
    {
    topic : 'github',
    
    startedAt : new Date("2021-01-20:13:02"),
    
    finishedAt : new Date("2021-01-20:15:00"),
    
    tasksGiven : 21,
    
    tasksFinished :11,

    totalTimeSpent : null,

    tasksFinishedPr : null,
            },
    ];

function tasksFinishedPrF(tasksGiven,tasksFinished){
 return Math.floor((100*tasksFinished) / tasksGiven);
}

function totalTimeSpentF(startedAt,finishedAt){
    let duration = finishedAt  - startedAt;
    let milliseconds = duration;
    seconds = Math.floor((duration / 1000) % 60);
    minutes = Math.floor((duration / (1000 * 60)) % 60);
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? hours : hours;
    minutes = (minutes < 10) ? minutes : minutes;

    return Number(hours + "." + minutes) ;
  }
for(let i = 0; i<table.length; i++){
    table[i].totalTimeSpent = totalTimeSpentF(table[i].startedAt,table[i].finishedAt) 
}

for(let i = 0; i<table.length; i++){
    table[i].tasksFinishedPr = tasksFinishedPrF(table[i].tasksGiven,table[i].tasksFinished) 
}



let body = document.getElementsByTagName('body');
let tableHTML = document.createElement('table');
document.body.append(tableHTML)
let tr = document.createElement('tr');
let th = document.createElement('th');
let td = document.createElement('td');
tableHTML.appendChild(tr);

 for(let i = 0; i<titleHead.length; i++ ){
    let th = document.createElement('th');
    th.innerHTML = titleHead[i];
    tr.appendChild(th);
 }
 function tdItems(){
    // `<tr><td>${object.topic}</td><td>${formatStartedAt(object)}</td><td>${formatFinishedAt(object)}</td><td>${object.tasksGiven}</td><td>${object.tasksFinished}</td><td class=${tasksFinishedPrC}>${object.tasksFinishedPr}%</td><td class=${totalTime}>${object.totalTimeSpent}</td></tr>`)

 }
  tr = document.createElement('tr');
 tableHTML.appendChild(tr);

// document.write(`<tr><th>${titleHead[0]}</th><th>${titleHead[1]}</th><th>${titleHead[2]}</th><th>${titleHead[3]}</th><th>${titleHead[4]}</th><th>${titleHead[5]}</th><th>${titleHead[6]}</th><tr>`);

function formatStartedAtF(object){
    let hours = object.startedAt.getHours()
    let minutes = object.startedAt.getMinutes()
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    
    return hours + ':' + minutes
}
function formatFinishedAtF(object){
    let hours = object.finishedAt.getHours()
    let minutes = object.finishedAt.getMinutes()
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    
    return hours + ':' + minutes
}
// for(let object of table){


//     document.write(`<tr><td>${object.topic}</td><td>${formatStartedAt(object)}</td><td>${formatFinishedAt(object)}</td><td>${object.tasksGiven}</td><td>${object.tasksFinished}</td><td class=${tasksFinishedPrC}>${object.tasksFinishedPr}%</td><td class=${totalTime}>${object.totalTimeSpent}</td></tr>`)
// }



for(let object of table){

 for(let i = 0; i<7; i++){

    let td = document.createElement('td');
    let t = formatStartedAtF(object)
    if(i == 1){
        td.innerHTML = formatStartedAtF(object);
        tr.className = 'totalTime'
        tr.appendChild(td);
        
        
    }
    else if (i == 2){
        
        td.innerHTML = formatFinishedAtF(object);
        tr.appendChild(td);
    }
    else{
        td.innerHTML = Object.values(object)[i] ;
        tr.appendChild(td);
        
    }
    
    let totalTime;
    if(object.totalTimeSpent<= 2){
        totalTime = 'green';

    }else if(object.totalTimeSpent>2 && object.totalTimeSpent<=5 ){
        totalTime = 'orange';
    }else{
        totalTime = 'red';
    }
    let tasksFinishedPrC;
    if(object.tasksFinishedPr<=50){
        tasksFinishedPrC = 'lightBlue'
    }else if(object.tasksFinishedPr>50 && object.tasksFinishedPr<=75){
        tasksFinishedPrC = 'blue'
    }else{
        tasksFinishedPrC = 'deepBlue'
    }
    
 }
 tr = document.createElement('tr');
 tableHTML.appendChild(tr);
}