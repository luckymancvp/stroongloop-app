# Hướng dẫn cơ bản cài đặt

## Cài đặt cho linux, mac ( all in one )
```
## Depend
yum -y groupinstall "Development Tools"
yum -y install nodejs
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
nvm install 4.4
nvm use 4.4
git clone git@bitbucket.org:luckymancvp/chotsale.git
npm install -g strongloop bower
cd chotsale
npm install
bower install

yum install -y tmux nginx
service nginx on

vim /etc/yum.repos.d/mongodb-org-3.0.repo
sudo yum install -y mongodb-org
chkconfig mongod on
service mongod start


nvm install 4.4
nvm use 4.4
npm install -g strongloop bower
npm install
bower install

## For deployment
git config --global user.email "codeship@gmail.com"
git config --global user.name "Code Ship"
slc build
slc deploy http://dev.chotsale.vn

## OpenPort
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
```

### Package, Soft cần thiết
- nodejs
- nvm
- mongodb
- ```nvm install 4.4```
- Trước khi làm bất cứ việc gì, cần chọn đúng môi trường  ```nvm use 4.4```
- ```npm install -g strongloop bower``` 
- ```bower install angular angular-resource angular-ui-router bootstrap```
### Clone Project
```
git clone git@bitbucket.org:luckymancvp/chotsale.git
npm install # cài đặt dependency của server
bower update # cài đặt dependency của client
```
### Cách start project
```
nvm use 4.4
slc run
```
Sửa nội dung file này tùy thuộc vào username, pass db local của bạn.

### Set default nvm
```
nvm use 4.4
nvm alias default node
```

### Cách config với webstorm
https://www.dropbox.com/s/rh4828w1m1nztg6/Screenshot%202016-03-13%2009.45.55.png?dl=0

### Cách tự động restart sv khi code thay đổi
```
npm install -g forever
forever -w . ## Chạy câu này 1 lần khi muốn bật server
```

## Tài liệu tham khảo
- https://github.com/strongloop/loopback-example-angular
- https://docs.angularjs.org/tutorial/step_00