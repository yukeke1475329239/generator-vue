const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting(){
    //prompting方法用于以命令行交互的方式询问用户的一些问题
  // Yeoman 在询问用户环节会自动调用此方法
    //在此方法中可以调用父类的 prompt()方法发出对用户的命令询问
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: 'Your project name',
        default: this.appname, //appname为项目生成目录名称
      }
    ]).then(answers =>{ //prompting的返回值也就是用户输入的数据把这些数据挂载到this上面
      //answers = {name: 'user input value'}
      this.answers = answers
    })
  }
  writing () {
    const template = [
      'public/favicon.ico',
      'public/index.html',
      'babel.config.js',
      'babel.config.js',
      'package-lock.json',
      'README.md',
      'src/App.vue',
      'src/main.js',
      'src/components/A.vue',
      'src/components/B.vue',
      'src/components/C.vue',
      'src/components/HelloWorld.vue',
    ]
    template.forEach(item=>{
      this.fs.copyTpl(this.templatePath(item),this.destinationPath(item),this.answers)
    })
  }

}