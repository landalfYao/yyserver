const db = require('./../db/mysqlHelper.js')

const user = {

  //新增用户
  async addUser ( args ) {
    let sql = 'INSERT INTO y_user(username, pwd ,nick_name) VALUES(?, ?, ?)'
    let params = [args.username, args.password, args.nickName]
    let result = await db.query(sql, params)
    return result
  },

  //根据username和password查询用户信息
  async getByUsernameAndPassword( name,args ){
    let sql = 'SELECT * FROM y_user WHERE '+name+' = ? and pwd = ?'
    let params = [args.username,args.password]
    return await db.query(sql,params)
  },
  //根据id和password查询用户信息
  async getByIdAndPassword( args ){
    let sql = 'SELECT * FROM y_user WHERE pk_id = ? and pwd = ?'
    let params = [args.uid,args.password]
    return await db.query(sql,params)
  },

  //根据username查询用户信息
  async getByUsername( args ){
    let sql = 'SELECT pk_id FROM y_user WHERE username=?'
    let params = [args.username]
    return await db.query(sql,params) 
  },

  //查询用户列表
  async getList( args,ct ){
    let result = await db.commonSelect( args )
    return result
  },

  //获取用户个人信息
  async getUserInfo ( uid ){
    let sql = 'SELECT * FROM y_user WHERE pk_id='+uid
    return await db.query(sql,[])
  },

  //绑定手机
  async bindPhone ( args ) {
    let sql = 'UPDATE y_user SET phone_number=? WHERE pk_id = ?'
    let params = [ args.phoneNumber,args.uid]
    return await db.query(sql,params)
  },

  //绑定email
  async bindEmail ( args ) {
    let sql = 'UPDATE y_user SET email=? WHERE pk_id = ?'
    let params = [ args.email,args.uid]
    return await db.query(sql,params)
  },

  //修改个人信息
  async updateUserInfo( args ) {
    let sql = 'UPDATE y_user SET nick_name=?,avatar_url=? WHERE pk_id=?'
    let params = [args.nickName,args.avatarUrl,args.uid]
    return await db.query( sql,params )
  },

  //修改密码
  async updatePwd ( args ){
    let sql = 'UPDATE y_user SET pwd= ? WHERE pk_id=?'
    let params = [args.password,args.uid]
    return await db.query(sql,params)
  },

  async getLoginLimitLog( args ){
    let sql = 'SELECT COUNT(*) total FROM y_log WHERE create_datetime='
  }

}

module.exports = user