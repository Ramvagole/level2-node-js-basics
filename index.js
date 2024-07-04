
let fs=require("fs")

let operation=process.argv[2]
let filepath=process.argv[3]
let content=process.argv[4]

switch(operation){
    case "read":
        reading(filepath)
        break
    case "remove":
        deleteFile(filepath)
        break
    case "create":
        createFile(filepath)
        break
    case "append":
        writeInFile(filepath,content)
        break
    case "change":
        newName(filepath,content)
        break
    case "list":
        listDirectory(filepath)
        break
}

function reading(filepath){
    fs.readFile(filepath,"utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
}
function deleteFile(filepath){
    fs.unlink(filepath,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`This file ${filepath} is deleted`)
        }
    })
}
function createFile(filepath){
    fs.writeFile(filepath,"",(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`${filepath} file is created`)
        }
    })
}
function writeInFile(filepath,content){
    fs.appendFile(filepath,content+"\n",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
}
function newName(filepath,newpath){
    fs.rename(filepath,newpath,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`File ${filepath} renamed to ${newpath}`)
        }
    })
}
function listDirectory(filepath) {
    fs.readdir(filepath, (err, files) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Contents of directory '${filepath}':\n`, files.join('\n'));
      }
    });
  }
  