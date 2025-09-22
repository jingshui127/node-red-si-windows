const rcedit = require('rcedit');
const path = require('path');

// 定义exe文件路径
const exePath = path.join(__dirname, 'dist', 'node-red-si-windows-win32-x64', 'node-red-si-windows.exe');

// 定义要设置的元数据
const metadata = {
  'version-string': {
    CompanyName: '科控物联',
    ProductName: 'Node-RED直接运行版',
    FileDescription: '20250922 v4.1.0；QQ:2492123056',
    LegalCopyright: 'Copyright (C) 科控物联',
    OriginalFilename: 'Node-RED-SI.exe'
  },
  'file-version': '4.1.0',
  'product-version': '4.1.0'
};

// 修改exe文件的元数据
rcedit(exePath, metadata, (err) => {
  if (err) {
    console.error('修改exe文件元数据时出错:', err);
  } else {
    console.log('exe文件元数据修改成功');
  }
});