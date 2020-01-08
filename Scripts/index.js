function logclick(){
  const fs = require('fs')
  let data = "Someone clicked the link"
  fs.writeFile('logger.txt', data, (err) => {
    if(err) throw err;
  })
}