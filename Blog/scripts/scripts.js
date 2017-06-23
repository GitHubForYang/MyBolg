var exec = require('child_process').exec;
hexo.on('new', function(data){
    exec('open -a "/Users/yosemite/Desktop/MacDown.app" ' + data.path);
});