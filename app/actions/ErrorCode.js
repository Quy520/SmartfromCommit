/**
 * Created by Draven on 2016/9/29.
 */
/**
 * 服务器地址
 */
export const PYTHON_SERVER_ADDR = "http://api.shztzn.com/api/";
//成功
export const OK = 0;
/**
 * 错误代码   格式信息不合法
 * @type {number}
 */
//参数不合法
export const ERROR_PARAMETER = 61000;
//手机号码不合法
export const ERROR_PARAM_PHONE = 61001;
//验证码不合法
export const ERROR_PARAM_VER = 61002;
//个人信息参数不合法
export const ERROR_PARAM_USER_INFO = 61003;
//图片格式不合法
export const ERROR_PARAM_IMG = 61004;
//页码参数不合法
export const ERROR_PARAM_PAGE = 61005;
//页面大小参数不合法
export const ERROR_PARAM_SIZE = 61006;
//发布消息内容格式不合法
export const ERROR_PARAM_PUB_DATA = 61007;
//评论类型不合法
export const ERROR_PARAM_COMMENT_TYPE = 61008;
//评论中提到的用户id不合法
export const ERROR_PARAM_MENTION = 61009;
//操作的对象类型不合法
export const ERROR_PARAM_FEEL_TYPE = 61010;
//消息类型不合法
export const ERROR_PARAM_MSG_TYPE = 61011;
//JSON格式不合法
export const ERROR_PARAM_JSON = 61012;
// temp格式不合法
export const ERROR_PARAM_TEMP = 61013;
//date格式不合法
export const ERROR_PARAM_DATE = 61014;
// temp_type不合法
export const ERROR_PARAM_TEMP_TYPE = 61015;
/**
 * 参数信息缺失
 * @type {number}
 */
//参数缺失
export const ERROR_PARAMETER_MISS = 62000;
//手机号码缺失
export const ERROR_MISS_PHONE = 62001;
//密码缺失
export const ERROR_MISS_PWD = 62002;
//校验码缺失
export const ERROR_MISS_VER = 62003;
//登录认证令牌缺失
export const ERROR_MISS_TOKEN = 62004;
//用户名缺失
export const ERROR_MISS_NAME = 62005;
//未调用获取salt值API
export const ERROR_MISS_SALT = 62006;
//新密码缺失
export const ERROR_MISS_PWD_NEW = 62007;
//个人信息缺失
export const ERROR_MISS_USER_INFO = 62008;
//头像缺失
export const ERROR_MISS_PORTRAIT = 62009;
//发布消息内容缺失
export const ERROR_MISS_PUB_DATA = 62010;
//发布消息内容中消息内容缺失
export const ERROR_MISS_PUB_DATA_CONTENT = 62011;
//评论内容缺失
export const ERROR_MISS_COMMENT_CONTENT = 62012;
//设备id缺失
export const ERROR_MISS_DEVICE_ID = 62013;
//版本号缺失
export const ERROR_MISS_VERSION = 62014;
//配置信息缺失
export const ERROR_MISS_SETTING = 62015;
//备注内容缺失
export const ERROR_MISS_REMARK_CONTENT = 62016;
//建议内容缺失
export const ERROR_MISS_SUGGEST_CONTENT = 62017;
//查询新用户日期参数缺失
export const ERROR_MISS_NEW_USER_DATE = 62018;
//温度参数缺失
export const ERROR_MISS_TEMP = 62019;
// 日期参数缺失
export const ERROR_MISS_QUERY_DATE = 62020;
/**
 * 参数信息过期
 * @type {number}
 */
//操作超时
export const ERROR_RUNTIME = 63000;
//TOKEN过期
export const ERROR_RUNTIME_TOKEN  = 63001;
//登录过期
export const ERROR_RUNTIME_LOGIN = 63002;
/**
 * 超出上线或者没权限
 * @type {number}
 */
//超过限制
export const ERROR_LIMIT  =  64000;
//超过验证码发送上限
export const ERROR_LIMIT_VER  =  64001;
//没有权限
export const ERROR_LIMIT_PERMISSION  =  64002;
/**
 * 参数错误或者请求失败
 * @type {number}
 */
//操作失败
export const ERROR_CONTROL = 65000;
//同步环信修改密码失败
export const ERROR_CONTROL_HUANXIN_MODIFY  = 65001;
//同步环信注册帐号失败
export const ERROR_CONTROL_HUANXIN_RESIGN  = 65002;
//同步发送验证短信操作失败
export const ERROR_CONTROL_TAOBAO_SMS = 65003;
//验证码错误
export const ERROR_CONTROL_VER = 65004;
//没有此帐号
export const ERROR_CONTROL_ACCOUNT_NOT  = 65005;
//密码错误
export const ERROR_CONTROL_PASSWORD = 65006;
//帐号已存在
export const ERROR_CONTROL_ACCOUNT_EXIST = 65007;
//令牌不匹配
export const ERROR_CONTROL_TOKEN  = 65008;
//查找的id没有找到
export const ERROR_CONTROL_ID_NOT_FIND = 65009;
//帐号被移除
export const ERROR_CONTROL_USER_REMOVE = 65010;
//查找的消息没有找到
export const ERROR_CONTROL_MSG_NOT_FIND = 65011;
//删除消息失败
export const ERROR_CONTROL_MSG_REMOVE = 65012;
//查找的新闻没有找到
export const ERROR_CONTROL_NEWS_NOT_FIND = 65013;
//评论的目标没有找到
export const ERROR_CONTROL_DST_NOT_FIND = 65014;
//评论删除失败
export const ERROR_CONTROL_COMMENT_REMOVE = 65015;
//点赞目标没有找到
export const ERROR_CONTROL_THUMB_NOT_FIND  = 65016;
//拍砖目标没有找到
export const ERROR_CONTROL_TILE_NOT_FIND = 65017;
//设备类型错误
export const ERROR_CONTROL_DEVICE_TYPE = 65018;
//设备没有找到
export const ERROR_CONTROL_DEVICE_NOT_FIND = 65019;
