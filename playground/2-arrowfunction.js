const tasks={
    tasks:[{
        text:"Grocery Shoppping",
        completed:true
    },{
        text:"Clean Yard",
        completed:false
        
    },{
        text:"Film course",
        completed:false
    
    }],
    getTasksToDo(){
        const tasksToDo=this.tasks.filter((task)=>{
            return task.completed === false
        })
        return tasksToDo
    }
}

console.log(tasks.getTasksToDo())