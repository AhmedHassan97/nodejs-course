const fs = require("fs")
const { title } = require("process")
const chalk = require('chalk')


const  getNotes = ()=>{
    console.log("My Notes ..... ")
}

const addNote = (title, body)=>{

    notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>{
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
const saveNote=(notes)=>{

    const dataStringfied= JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataStringfied)

}
const loadNotes=()=>{
    try {
        const notes=fs.readFileSync("notes.json")
        return JSON.parse(notes.toString())
    } catch (error) {
        
        return []
    }
}

const listNotes=()=>{
    const notes= loadNotes()
    
    console.log(chalk.inverse.blue("Your Notes"))

    notes.forEach(element => {
        console.log(chalk.greenBright.inverse(element.title))
    });
}

const readNote =(title)=>{

    debugger
    
    const notes= loadNotes()

    const note = notes.find((notee)=> notee.title === title)

    if (note) {
        console.log(chalk.green.inverse(title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("Note Not found"))
    }
    // notes.forEach(element => {
    //     if (element.title === title) {
    //         console.log(chalk.green.inverse(title))
    //         console.log(element.body)
    //     }
    // });
}
module.exports =
{
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}