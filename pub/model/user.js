const db = require('./../db/mysqlHelper.js')

const user = {

  /**
   * 增加一条数据
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async addUser ( args ) {
    let sql = 'INSERT INTO y_user(username, pwd ,nick_name) VALUES(?, ?, ?)'
    let params = [args.username, args.password, args.nickName]
    let result = await db.query(sql, params)
    return result
  },

  async getByUsernameAndPassword( name,args ){
    let sql = 'SELECT * FROM y_user WHERE '+name+' = ? and pwd = ?'
    let params = [args.username,args.password]
    return await db.query(sql,params)
  },

  async getByUsername( args ){
    let sql = 'SELECT pk_id FROM y_user WHERE username=?'
    let params = [args.username]
    return await db.query(sql,params) 
  },

  async getList( args,ct ){
    let result = await db.commonSelect( args )
    return result
  },

  async getLoginLimitLog( args ){
    let sql = 'SELECT COUNT(*) total FROM y_log WHERE create_datetime='
  }

}

module.exports = user