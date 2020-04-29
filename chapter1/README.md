# webpack从入门到进阶-4/29

## webpack的安装

注意：请先自行安装[nodejs](https://nodejs.org)最新版的环境

- 全局安装webpack

  `npm i webpack webpack-cli -g`

- 项目中安装webpack (推荐)

  `npm i webpack webpack-cli -D`

## webpack的使用

### webpack-cli

npm 5.2 以上的版本中提供了一个`npx`命令

npx 想要解决的主要问题，就是调用项目内部安装的模块，原理就是在`node_modules`下的`.bin` 目录中找到对应的命令执行

使用webpack命令：`npx webpack`

webpack4.0之后可以实现0配置打包构建，0配置的特点就是限制较多，无法自定义很多配置

开发中常用的还是使用webpack配置进行打包构建
## cnpm的使用
- 安装：命令提示符执行
 `npm install cnpm -g --registry=https://registry.npm.taobao.org`

- 来测试是否成功安装
 `cnpm -v`

 - nrm包安装命令： 
 `npm i nrm -g`

 - `nrm ls`即`nrm list`，查看所有可用的镜像，并可以切换。*号表示当前npm使用的地址，可以使用命令`nrm use taobao`或 `nrm use npm`来进行两者之间的切换

## -g -S -D的使用
- -g：全局安装。 将会安装在C：\ Users \ Administrator \ AppData \ Roaming \ npm，并且写入系统环境变量；非全局安装：将会安装在当前定位目录;全局安装可以通过命令行任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过要求调用;
- -S：即npm install module_name --save,写入package.json的dependencies ,dependencies 是需要发布到生产环境的，比如jq，vue全家桶，ele-ui等ui框架这些项目运行时必须使用到的插件就需要放到dependencies
- -D：即npm install module_name --save-dev,写入package.json的devDependencies ,devDependencies 里面的插件只用于开发环境，不用于生产环境。比如一些babel编译功能的插件、webpack打包插件就是开发时候的需要，真正程序打包跑起来并不需要的一些插件。

## [git廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600/896827951938304)
-  创建git远程仓库
- `$ git init`
- `git add readme.txt`
- `git commit -m "write a readme file"`
- `git remote add origin https://github.com/sawadazina/study.git`
- `git push -u origin master`


