vuepress build ablog

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lb1098/lb1098.github.io.git master
git push -f git@gitee.com:lb1098/lb1098.gitee.io.git master

cd ../
rm -rf public