## CMD 基础指令
 * ### git init {创建一个新的本地仓库}
 * ### git status {显示工作路径下已修改的文件}
 * ### git add (文件名) {将文件加到暂存区}
  1. git add . (工作区全部提交暂存区)
 * ### git commit (文件名) -m (“信息“) {提交}
  1. git commit -o (文件名) -m {提交信息}
  2. git commit -a (文件名)
 * ### git log {记录所有HEAD的历史 reset，checkout等操作}
 1. git reflog {查看 包括合并信息}
 2. git log --oneline --graph{包含分支的合并信息}
 2. git log -p master {本地和远程区别}
 3. git log --author=xuzhen --oneline -5 {xuzhen提交的五条记录}
 * ### git tag -a (v1.0版本号) {添加版本标签-m加描述}
 1. git push origin -tags {将本地版本号提交远程}
 2. git push origin --delete tag (分支名) {删除远程版本号}
 2. git push origin :refs/tags/(v1.01版本号) {删除远程版本号}
 2. git tag -a (v1.0版本号) (commit hash)
 2. git tag -d (v1.01版本号) {删除}
 2. git fetch origin tag (版本号) {获取远程tag}
 * ### git merge (分支名){将分支名合并当前分支}  
 * ### git branch (分支名) {创建新分支}
 1. git branch -d -D{强制删除} (分支名) {删除分支} -D强制删除
 2. git branch -a {查看远程分支红色显示}
 2. git push origin --delete (分支名) {删除远程分支}

 * ### git checkout (分支名){切换到分支名}
 1. git checkout --(分支名) {撤销工作区的修改!!少用不能恢复}
 2. git checkout -b (分支名) {迅速创建并使用新分支}
 * ### git stash {将工作区的移到垃圾桶}
 1. git stash apply {恢复到工作区}
 1. git stash list  {垃圾桶列表}
 2. git stash apply (stash@{1}) {垃圾桶列表恢复工作区}
 * ### git push origin (分支名) {提交}
 1. git branch -m (老分支名) (新分支名) {重命名分支}
 1. git push -f origin (分支名){强制合并}
 2. git push --delete origin devel To git@github.com:zrong/quick-cocos2d-x.git {删除远程分支}
  * ### git pull origin (分支名) {等价于fetch merge}
 * ### git reset
 1. git reset HEAD (文件名) {从暂存区中移除文件}
 2. git reset --hard (38679edcommit 哈希值) {撤销到某个提交}
 * ### git remote {查看所有远程仓库}
 1. git remote -v {可以查看远程改变}
 2. git remote set-url origin (http){新建远程仓库新建本地连接}
 * ### git config --list {查看配置列表}


 * ### git grep ("Hello") {从当前目录的所有文件中查找文本内容}
 * ### git diff {工作区不同}
 # gitignore 
 * ### 配置语法忽略
 1. 以斜杠“/”开头表示目录；
 1. 以星号“*”通配多个字符；
 1. 以问号“?”通配单个字符
 1. 以方括号“[]”包含单个字符的匹配列表；
 1. 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
 * ### 示例
 1. 规则：fd1/*
　　　　  说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；
 1. 规则：/fd1/*
　　　　 说明：忽略根目录下的 /fd1/ 目录的全部内容；
 1. 规则：
/*<br>
!.gitignore <br>
!/fw/bin/  <br>
!/fw/sf/  <br>
说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；
 # ERROR
 ### Non-fast-forward 
 * git仓库中已经有一部分代码，所以它不允许你直接把你的代码覆盖上去
>>>>>>> origin/master
