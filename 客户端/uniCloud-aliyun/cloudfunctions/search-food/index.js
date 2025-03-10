'use strict';
exports.main = async (event, context) => {
  const db = uniCloud.database()
  const collection = db.collection('food')

  const keyword = event.keyword.trim()

  const res = await collection.aggregate()
    .addFields({
      match: {
        $or: [
          { $regexMatch: { input: "$title", regex: keyword, options: "i" } },
          { $regexMatch: { input: "$address", regex: keyword, options: "i" } }
        ]
      }
    })
    .match({ match: true })
    .end()

  if (res.data && res.data.length > 0) {
    return {
      code: 200,
      data: res.data
    }
  } else {
    return {
      code: 404,
      message: '没有找到相关数据'
    }
  }
}

