const getDevicePage = require('../../writeTemp/lib/getDevicePage')
const deviceList = require('../../../../../grabData/deviceList')
const deviceGroups = require('../../../../../grabData/deviceGroups')
const iosList = require('../../../../../grabData/ios')

const devicePath = '/device'
var pageList = []

for (const d of Object.keys(deviceList).map(x => deviceList[x]).filter(x => {
  return !(
    process.env.NODE_ENV === 'development' &&
    x.name === "Beats Solo³ Wireless Mickey's 90th Anniversary Edition"
  )
})) {
  const urlPart = require('../../writeTemp/lib/formatDeviceName')(d.key)
  const url = [devicePath, 'identifier', urlPart].join('/') + '.html'
  pageList.push(
    getDevicePage({
      name: d.name,
      path: url,
      devArr: d,
      grouped: false
    })
  )
}

for (const g of deviceGroups) {
  const urlPart = require('../../writeTemp/lib/formatDeviceName')(g.groupKey)
  const url = [devicePath, urlPart].join('/') + '.html'
  pageList.push(
    getDevicePage({
      name: g.name,
      path: url,
      devArr: g.devices.map(x => deviceList[x]),
      grouped: true,
      hideChildren: g.hideChildren
    })
  )
}

var devListFromFw = []
for (const i of iosList.map(x => Object.keys(x.deviceMap))) devListFromFw.push(...i)
devListFromFw = Array.from(new Set(devListFromFw)).sort()
const devArr = devListFromFw.map(x => deviceList[x])

const fwChartPageArr = [
  {
    name: 'Firmware Chart',
    description: 'AppleDB Firmware Chart',
    path: '/firmware.html',
    typeArr: '*'
  },
  {
    name: 'iOS Firmware Chart',
    description: 'iOS Firmware Chart',
    path: '/firmware/iOS.html',
    typeArr: [
      'iPhone',
      'iPod touch'
    ]
  },
  {
    name: 'iPadOS Firmware Chart',
    description: 'iPadOS Firmware Chart',
    path: '/firmware/iPadOS.html',
    typeArr: [
      'iPad',
      'iPad mini',
      'iPad Pro',
      'iPad Air'
    ]
  },
  {
    name: 'macOS Firmware Chart',
    description: 'macOS Firmware Chart',
    path: '/firmware/macOS.html',
    typeArr: [
      "Developer Transition Kit",
      "eMac",
      "iBook",
      "iMac",
      "iMac Pro",
      "Mac Pro",
      "Mac mini",
      "Mac Studio",
      "MacBook",
      "MacBook Air",
      "MacBook Pro",
      "PowerBook",
      "PowerMac",
      "Virtual Machine",
      "Xserve"
    ]
  },
  {
    name: 'tvOS Firmware Chart',
    description: 'tvOS Firmware Chart',
    path: '/firmware/tvOS.html',
    typeArr: [
      "Apple TV"
    ]
  },
  {
    name: 'watchOS Firmware Chart',
    description: 'watchOS Firmware Chart',
    path: '/firmware/watchOS.html',
    typeArr: [
      "Apple Watch"
    ]
  },
  {
    name: 'visionOS Firmware Chart',
    description: 'visionOS Firmware Chart',
    path: '/firmware/visionOS.html',
    typeArr: [
      "Headset"
    ]
  }
]

for (const fwChartPage of fwChartPageArr) {
  const fwChartPageDevArr = fwChartPage.typeArr === '*' ? devArr : devArr.filter(x => fwChartPage.typeArr.includes(x.type))
  if (!fwChartPageDevArr.length) return
  pageList.push(
    getDevicePage({
      name: fwChartPage.name,
      description: fwChartPage.description,
      path: fwChartPage.path,
      devArr: fwChartPageDevArr,
      grouped: true,
      mainList: true
    })
  )
}

module.exports = pageList