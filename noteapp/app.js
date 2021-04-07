const getnotes = require("./notes") 
const chalk = require('chalk')
const yargs = require ('yargs')


// // create add command 
// yargs
//   .command(
//     'add',
//     'adding a note',
//     {
//         'title':{
//             describe:'Note Title',
//             demandOption:true,
//             type:'string'
            
//         }
//     },
//     function (argv) {
//       console.log('adding a note', argv)
//     }
//   )
//   .help()
//   .argv

// // create remove command 
// yargs
// .command(
//   'remove',
//   'removing a note',
//   function (argv) {
//     console.log('Removing a note')
//   }
// )
// .help()
// .argv

// // list command 
// yargs.command(
//     'list',
//     'getting a list',
//     function(argv)
//     {
//         console.log("Listing out all notes" )
//     }
// )
// .help()
// .argv

// // read command 
// yargs.command(
//     'read',
//     'read a list',
//     function(argv)
//     {
//         console.log("read a list")
//     }
// )
// .help()
// .argv

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
    handler: function(argv){
        console.log("Title:" +  argv.title, "body:" + argv.body)
    }
})

// create remove command 
yargs.command({
    command:'remove',
    describe:'remove note',
    handler: function(argv){
        console.log("Removing note", argv)
    }
})

// create list command 
yargs.command({
    command:'list',
    describe:'Listing out all listes',
    handler: function(argv){
        console.log("Listing out all listes", argv)
    }
})

// create read command 
yargs.command({
    command:'read',
    describe:'read note',
    handler: function(argv){
        console.log("read anote", argv)
    }
})
// this is important to view the commands 
yargs.parse()