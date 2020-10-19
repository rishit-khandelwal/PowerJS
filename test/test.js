const power = require('../src/power');

var img = new power.PowerComponentClose('div', {
    "id": "banner",
    "text": [
        new power.TextNode("Hello, state.name. i have state.num likes")
    ]
})

img.setState('name','Banner')
img.setState('num','0')

console.log(power.Conditional('name',img))
console.log(power.Conditional('num',img))