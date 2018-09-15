//sql语句
var sqlMap = {
  getUsersInfo:'select * from users where id = ?', // 获取到个人信息
  setValue:'update users set name = ? where id = ?' // 设置个人信息
}

module.exports = sqlMap;
