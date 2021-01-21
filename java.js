let titleHead = ['topic', 'tasksFinished%', 'tasksFinished', 'tasksGiven', 'totalTimeSpent', 'finishedAt', 'startedAt',]
let table = [
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,
    
    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),

    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,
         
    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,
        
    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,
    
    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',
                                                    
    startedAt : new Date("2021-01-20:13:00"),
                                                
    finishedAt : new Date("2021-01-20:13:00"),
                                                        
    tasksGiven : 10,
                                                        
    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
    },
    {
    topic : 'html',

    startedAt : new Date("2021-01-20:13:00"),

    finishedAt : new Date("2021-01-20:13:00"),

    tasksGiven : 10,

    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
        },
    {
    topic : 'html',
    
    startedAt : new Date("2021-01-20:13:00"),
    
    finishedAt : new Date("2021-01-20:13:00"),
    
    tasksGiven : 10,
    
    tasksFinished :7,

    totalTimeSpent : totalTimeSpent(this.finishedAt,this.finishedAt),

    tasksFinishedPr : tasksFinishedPr(this.tasksGiven,this.tasksFinished),
            },
    ];
function tasksFinishedPr(tasksGiven,tasksFinished){
 return (100*tasksFinished) / tasksGiven + '%';
}
function totalTimeSpent(finishedAt,finishedAt){
    return finishedAt - finishedAt
}
document.write('<table>');
document.write(`<tr><th>${titleHead[0]}</th><th>${titleHead[1]}</th><th>${titleHead[2]}</th><th>${titleHead[3]}</th><th>${titleHead[4]}</th><th>${titleHead[5]}</th><th>${titleHead[6]}</th><tr>`);

for(let object of table){
    document.write(`<tr><td>${object.topic}</td><td>${object.startedAt.getHours()}</td><td>${object.finishedAt.getHours()}</td><td>${object.tasksGiven}</td><td>${object.tasksFinished}</td><td>${object.tasksFinishedPr}</td><td>${object.totalTimeSpent}</td></tr>`)
}document.write('</table>');
