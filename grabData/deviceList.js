const { info, Console } = require('console');
const fs = require('fs');
const path = require('path');
const p = './appledb/deviceFiles'

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

var deviceFiles = [];
deviceFiles = getAllFiles(p, deviceFiles)
deviceFiles = deviceFiles.filter(file => file.endsWith('.json'));
deviceFiles = deviceFiles.map(function(x) {
  const filePathStr = x.split(path.sep)
  const pathStrLength = p.split('/').length - 3
  
  return filePathStr.splice(pathStrLength, filePathStr.length).join(path.sep)
})
var deviceObj = {};

function isDir(p) {
  return fs.lstatSync(p).isDirectory()
}

let imgArr = []
const imagePath = path.resolve(__dirname, '../apple-device-images/images')
fs.readdirSync(imagePath)
.filter(f => f.endsWith('.png') || isDir(path.join(imagePath, f)))
.forEach(f => {
  imgArr.push({
    key: f.replace('.png',''),
    imgCount: (f.endsWith('.png')) ? 1 : -1,
    dark: false,
  })
})

let folderArr = imgArr.filter(x => x.imgCount < 0).filter(x => isDir(path.resolve(__dirname, `../apple-device-images/images/${x.key}`)))
imgArr = imgArr.filter(x => x.imgCount > 0)

for (const i of folderArr) {
  let folderImgArr = []
  fs.readdirSync(path.resolve(__dirname, `../apple-device-images/images/${i.key}`))
  .filter(f => f.endsWith('.png'))
  .forEach(file => {
    folderImgArr.push(file)
  })
  let folderImgCount = folderImgArr.filter(x => !x.endsWith('_dark.png')).length
  let darkBool = folderImgArr.filter(x => x.endsWith('_dark.png')).length > 0
  imgArr.push({
    key: i.key,
    imgCount: folderImgCount,
    dark: darkBool
  })
}

for (const file in deviceFiles) {
  const obj = require('..' + path.sep + deviceFiles[file])

  for (const p of ['model','board','identifier']) {
    if (!obj[p]) obj[p] = []
    if (!Array.isArray(obj[p])) obj[p] = [obj[p]]
  }

  obj.name = obj.name || obj.identifier[0] || obj.key
  obj.key = obj.key || obj.identifier[0] || obj.name
  
  let imgCount = 1
  let imgDark = false
  let devImgArr = imgArr.filter(x => x.key == obj.key)
  if (devImgArr.length == 1) {
    let devImg = devImgArr[0]
    imgCount = devImg.imgCount
    imgDark = devImg.dark
  } else {
    imgCount = fs.existsSync(path.resolve(__dirname, `../apple-device-images/images-lowres/${obj.key}.png`)) ? 1 : 0
    imgDark = false
  }
  obj.imgCount = imgCount
  obj.imgDark = imgDark

  if (obj.info) obj.info = obj.info.map(o => {
    if (o.type != 'Display') return o
    if (o.Resolution && o.Screen_Size) {
      const diagRes = Math.sqrt(Math.pow(o.Resolution.x, 2) + Math.pow(o.Resolution.y, 2))
      const size = parseInt(o.Screen_Size.replace('"',''))
      const ppi = Math.round(diagRes / size)

      let newObj = {}
      newObj.type = o.type
      newObj.Resolution = o.Resolution
      newObj.Screen_Size = o.Screen_Size
      newObj.Pixels_per_Inch = ppi
      for (const i of Object.keys(o).filter(x => x != 'Resolution' || x != 'Screen_Size'))
        newObj[i] = o[i]

      return newObj
    }
  })
  
  deviceObj[obj.key] = obj
}

module.exports = deviceObj;