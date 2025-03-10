'use strict';
exports.main = async (event, context) => {
  const db = uniCloud.database()
  const loveFoodCollection = db.collection('love-food')
  const uniIdUsersCollection = db.collection('uni-id-users')

  const keyword = event.keyword.trim()

  // 在 love-food 集合中查询匹配的数据
  const loveFoodRes = await loveFoodCollection
    .where({
      title: {
        $regex: keyword,
        $options: 'i'
      }
    })
    .get()

  if (loveFoodRes.data && loveFoodRes.data.length > 0) {
    // 获取查询到的所有 author_id
    const authorIds = loveFoodRes.data.map(item => item.author_id)

    // 在 uni-id-users 集合中查询匹配的数据
    const uniIdUsersRes = await uniIdUsersCollection
      .where({
        _id: db.command.in(authorIds)
      })
      .get()

    if (uniIdUsersRes.data && uniIdUsersRes.data.length > 0) {
      // 将两个集合的数据合并为一个结果
      const mergedData = loveFoodRes.data.map(loveFoodItem => {
        const matchingUser = uniIdUsersRes.data.find(userItem => userItem._id === loveFoodItem.author_id)
        return {
          loveFood: loveFoodItem,
          user: matchingUser
        }
      })

      return {
        code: 200,
        data: mergedData
      }
    } else {
      return {
        code: 404,
        message: '没有找到相关用户数据'
      }
    }
  } else {
    return {
      code: 404,
      message: '没有找到相关食品数据'
    }
  }
}


