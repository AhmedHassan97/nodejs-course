const fs = require("fs")
const { title } = require("process")
const chalk = require('chalk')


const  getNotes = function(){
    console.log("My Notes ..... ")
}

const addNote = function(title, body){

    notes=loadNotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title === title
    }) 
    console.log(duplicateNotes,"dupplicate notes")
    if (duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)    
        console.log("Note is added")
    }
    else{
        console.log("note is not added")
    }
    
}
const removeNote=(title)=>{
    const notes=loadNotes()

    const fianlNotes = notes.filter(function(note){
        return note.title !== title
    })  

    if (notes.length !== fianlNotes.length) {
    
        saveNote(fianlNotes)
        console.log(chalk.inverse.green("Note Removed"))
    } else {
        console.log(chalk.inverse.red("Note not found"))
    }
    
}
const saveNote=function(notes){

    const dataStringfied= JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataStringfied)

}
const loadNotes=function(){
    try {
        const notes=fs.readFileSync("notes.json")
        return JSON.parse(notes.toString())
    } catch (error) {
        
        return []
    }
}
module.exports =
{
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote
}