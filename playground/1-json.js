const fs=require('fs')

// const object={
//     name:"andrew",
//     planet: "earth",
//     age:27
// }
// const ObjectToString= JSON.stringify(object)
// fs.writeFileSync('1-json.json',ObjectToString)


const ReadJson= fs.readFileSync('1-json.json')

let dataToString= ReadJson.toString()

let dataParsed =JSON.parse(dataToString)

dataParsed.name="Ahmed"
dataParsed.age=23
dataToString=JSON.stringify(dataParsed)
fs.writeFileSync("1-json.json",dataToString)
