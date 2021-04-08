const notes = require("./notes") 
const chalk = require('chalk')
const yargs = require ('yargs')


// create add command 
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:
    {
        title:{
            describe:"Note title",
            demandOption: true,
            type:"string"
        },
        body:{
            describe: "Note Body",
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command 
yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:"string"
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title)
    }
})

// create list command 
yargs.command({
    command:'list',
    describe:'Listing out all listes',
    handler: ()=>{
        notes.listNotes()
    }
})

// create read command 
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:"string" 
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title)
    }
})
// this is important to view the commands 
yargs.parse()