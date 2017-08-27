const path=require('path');
str='/user/local/www/index.sh';
str2={ root: '/',
  dir: '/user/local/www',
  base: 'index.sh',
  ext: '.sh',
  name: 'index' };
// dname=path.dirname(str);
// dname=path.basename(str);
// dname=path.extname(str);
// dname=path.parse(str);
dname=path.format(str2);
str3= dname.replace('\\','/');
console.log(str3);