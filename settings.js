const fs = require('fs')

global.creator = 'VARGAS_250' 
global.apikey = ["nikobotz", "vargas250"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
