

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

function tasksFinishedPr(tasksGiven,tasksFinished){
 return Math.floor((100*tasksFinished) / tasksGiven);
}

function totalTimeSpent(startedAt,finishedAt){
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
    table[i].totalTimeSpent = totalTimeSpent(table[i].startedAt,table[i].finishedAt) 
}
for(let i = 0; i<table.length; i++){
    table[i].tasksFinishedPr = tasksFinishedPr(table[i].tasksGiven,table[i].tasksFinished) 
}


document.write('<table>');
document.write(`<tr><th>${titleHead[0]}</th><th>${titleHead[1]}</th><th>${titleHead[2]}</th><th>${titleHead[3]}</th><th>${titleHead[4]}</th><th>${titleHead[5]}</th><th>${titleHead[6]}</th><tr>`);

function formatStartedAt(object){
    let hours = object.startedAt.getHours()
    let minutes = object.startedAt.getMinutes()
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    
    return hours + ':' + minutes
}
function formatFinishedAt(object){
    let hours = object.finishedAt.getHours()
    let minutes = object.finishedAt.getMinutes()
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    
    return hours + ':' + minutes
}
for(let object of table){
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

    document.write(`<tr><td>${object.topic}</td><td>${formatStartedAt(object)}</td><td>${formatFinishedAt(object)}</td><td>${object.tasksGiven}</td><td>${object.tasksFinished}</td><td class=${tasksFinishedPrC}>${object.tasksFinishedPr}%</td><td class=${totalTime}>${object.totalTimeSpent}</td></tr>`)
}document.write('</table>');
