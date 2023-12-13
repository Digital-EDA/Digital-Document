const fs = require('fs');  
const path = require('path');  
  
function replaceInFiles(dir, searchStr, replaceStr) {  
    fs.readdirSync(dir).forEach(file => {  
        let filePath = path.join(dir, file);  
        let stats = fs.lstatSync(filePath);  
          
        if (stats.isDirectory()) {  
            replaceInFiles(filePath, searchStr, replaceStr);  
        } else if (filePath.endsWith('.html')) {  
            let data = fs.readFileSync(filePath, 'utf8');  
            let newData = data.replace(searchStr, replaceStr);  
            fs.writeFileSync(filePath, newData);  
        }  
    });  
}  
  
replaceInFiles('./src/.vuepress/dist', /\/videos\//g, '/doc/videos/');