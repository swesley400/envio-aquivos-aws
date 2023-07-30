create user if not exists 'videos'@'localhost' identified by '123456';
grant all on *.* to 'videos'@'%';