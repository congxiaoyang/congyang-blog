//sql语句
var sqlMap = {
  getUsersInfo:'select * from users where id = ?',
  setValue:'update users set name = ? where id = ?'
}

module.exports = sqlMap;
