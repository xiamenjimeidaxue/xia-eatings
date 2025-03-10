<template>
  <view class="container">
	  <unicloud-db ref="udb1" v-slot:default="{ data, loading, error, options }" collection="food" >
	      <view class="db-container">
	        <div v-if="error" class="error">{{ error.message }}</div>
	        <div v-else>
	          <div v-if="loading" class="loading">正在加载...</div>
	          <div v-else>
	            <div v-for="item1 in data" :key="item1._id" class="itemm" >
					<div v-if="item1._id === itemId">
					            <div class="infoo">
									<img :src="item1.image" class="image" />
					              <div class="title">{{ item1.title }}</div>
					              <div class="desc">{{ item1.description }}</div>
					              <div class="address-price">
					                    <div class="address">地点：{{ item1.address }}</div>
					                    <div class="price">价格：{{ item1.price }}元</div>
					                  </div>
					              <div class="food-rating">
					                推荐指数:
					                <template v-for="star in Math.floor(item1.rating)">
					                  <span class="star">&#9733;</span>
					                </template>
					                <!-- 判断是否有半颗星星 -->
					                <span v-if="item1.rating % 1 !== 0" style="color:gold">
					                <span class="star star-outline">&#9734;</span> <!-- 空心星星 -->
					                </span>
					                <span style="color:gold">
					                	{{ item1.rating.toFixed(1) }}
					                	</span>
					              </div>
					            </div>
								<hr>
					</div>
	            </div>
	          </div>
	        </div>
	      </view>
	    </unicloud-db>
    <unicloud-db ref="udb" :where="judge" orderby="state asc" v-slot:default="{data, loading, error, options}" collection="guestbook,uni-id-users,food" field="_id,test,state,score,time,user_id.nickname,user_id.avatar_file,user_id._id,textto._id,textto.rating,textto.comment_count">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        <view v-for="(item,index) in data" :key="index" class="item">
          <view class="main">
			  <cloud-image v-if="item.user_id[0].avatar_file.url" :src="item.user_id[0].avatar_file.url"></cloud-image>
            <cloud-image v-else src="/static/logo.png"></cloud-image>
            <view class="info">
              <view class="nickname">{{item.user_id[0].nickname}}</view>
    		</view>
    		 <view class="info">
    		  <div class="food-rating">
    		    <template v-for="star in Math.floor(item.score)">
    		      <span class="star">&#9733;</span>
    		    </template>
    			<span  class="ratingp">
    			{{ item.score.toFixed(1) }}
    			</span>
    			</div>
    			</view>
             <view style="flex: 1;"></view>
    		<view v-if="uniIDHasRole('aadmin')">
    			<button @click="changestate(item)" type="default">{{item.state ? '审核通过' : '审核中'}}</button>
    		</view>
    		<view v-else>
    		<text>{{item.state ? '' : '审核中'}}</text>
    		</view>
          </view>
    	  <view class="things">{{item.test}}</view>
    	  <view class="timestamp">{{ new Date(item.time).toLocaleString() }}</view>
        </view>
    	<view style="height: 150px;"></view>
		<view class="submit-box-star">
			<template v-for="(star, index) in stars">
			  <button 
			    class="starr"
			    :class="{ 'star-filled': index  < rates }"
			    @click="setRates(star)"
			  >&#9733;</button>
			</template>
			</view>
    	<view class="submit-box">
    	  
    	  <input class="input-box" v-model="test" placeholder="输入评论内容" />
    	  <button class="btn" @click="send(itemId)">发送</button>
    	</view>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
	export default {
		data() {
		    return {
		      test: "",
		      itemId: "66",
			  rates:1,
			  stars: [1, 2, 3, 4, 5]
		    };
		  },
		 mounted() {
		    this.itemId = this.$route.query._id;
		    console.log(this.itemId); // 打印父页面传递的 _id 值
		    // 根据传递过来的 _id 值进行相应的处理
		    // ...
		  },
		computed: {
		  judge() {
		    if (this.uniIDHasRole('aadmin')) {
		      return '';
		    } else {
		      const currentUserInfo = uniCloud.getCurrentUserInfo();
		      if (currentUserInfo.uid != null) {
		        return "state == true||user_id._id == '" + currentUserInfo.uid + "'";
		      } else {
		        return "state == true";
		      }
		    }
		  }
		},
		methods: {
			setRates(star) {
			    // 根据点击的按钮设置新的rates值
			    this.rates = this.stars.indexOf(star) + 1;
			  },
			async send(itemId) {
			  const db = uniCloud.database();
			  const guestbookTable = db.collection('guestbook');
			  const content = this.test.trim();
			  if (content && this.rates > 0) {
			    const res = await guestbookTable.add({
			      "test": content,
			      "score": this.rates,
				  "time":new Date(),
				  "textto":this.itemId
			    });
			      uni.showToast({
			        title: '发送成功！',
			        icon: 'none'
			      });
			      this.test = '';
			      this.rates = 1;
			      this.$refs.udb.refresh();
			  } else {
			    uni.showToast({
			      title: '请输入评论内容并选择评分！',
			      icon: 'none'
			    });
			  }
			},
			 async  updateRating1(score, item) {
			      let rating = (item.textto[0].rating * item.textto[0].comment_count + score) / (item.textto[0].comment_count + 1);  
			      let comment_count = item.textto[0].comment_count + 1;  
			      let id = item.textto[0]._id;  
			      const db = uniCloud.database();  
			      // 使用updateOne或updateMany来更新数据库  
			      await db.collection('food').where('_id=="'+item.textto[0]._id+'"').update({  
			          "rating": rating,  
			          "comment_count": comment_count  
			      });  
			  },
			 async  updateRating2(score, item) { 
			     let rating = (item.textto[0].rating * item.textto[0].comment_count - score) / (item.textto[0].comment_count - 1);  
			     let comment_count = item.textto[0].comment_count - 1;  
			     let id = item.textto[0]._id; 
			     const db = uniCloud.database();  
			     // 使用updateOne或updateMany来更新数据库  
			     await db.collection('food').where('_id=="'+item.textto[0]._id+'"').update({  
			         "rating": rating,  
			         "comment_count": comment_count  
			     });  
			 },
			changestate(item){ 
				this.$refs.udb.update(item._id,{state:!item.state},{complete:e=>{
													if(!item.state){
														 this.updateRating1(item.score,item);  
														this.$refs.udb.refresh(); 
													}
													else{
														 this.updateRating2(item.score,item);
														this.$refs.udb.refresh();
													}
												}}) 
			}
		}
	}
</script>

<style scoped>
.ratingp{
		color:gold;
	}
.container {
	  display: flex;
	  flex-direction: column;
	  gap: 20px;
}
.item {
	margin-bottom: 30px;
	width: 320px;
	margin: 10px;
	padding: 10px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main {
	display: flex;
	align-items: center;
	position: relative;
}

.cloud-image {
	width: 50px;
	height: 50px;
}

.info {
	position: absolute;
	top: 15px;
	left: 50px; /* 调整这里的数值以确保信息栏紧贴在图片右侧 */
	padding: 5px;
	background-color: rgba(255, 255, 255, 0.5);
	color: #070707;
}

.text-container {
	text-align: left; /* 将文字左对齐 */
}

.nickname {
	display: inline-block; /* 将昵称设置为行内块元素 */
	  vertical-align: middle; /* 垂直居中对齐 */
  font-size: 18px;
  font-weight: 700;
  position: relative;
  top: 0px; /* 调整负的 top 值 */
   margin-top: -50px; /* 调整星星和昵称之间的间距 */
   margin-right:0px;
}

.things {
	margin-top: 6px;
	font-size: 16px;
}

text {
	position: absolute;
	top: 0;
	right: 0;
}

.submit-box {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
.submit-box-star{
	position: fixed;
	bottom: 70px;
	left: 10px;
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	box-sizing: border-box;
	 background-color: #ffffff;
}

.input-box {
  display: inline-block;
  height: 30px;
  width: calc(80% - 5px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.rating-box {
  position: fixed;
  bottom: 0px; /* 距离底部的距离 */
  display: inline-block;
  height: 30px;
  width: calc(20% - 5px); /* 根据输入框的宽度调整评分框的宽度 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.btn {
  display: inline-block;
  height: 45px;
  line-height: 45px;
  width: 20%;
  padding: 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.db-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.error {
  color: red;
}
.timestamp {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #666;

}
.loading {
  font-size: 16px;
  margin-top: 20px;
}

.itemm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  border-bottom: 3px solid #eee;
  padding-bottom: 0px;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

.infoo {
  display: flex;
  flex-direction: column;
  left:0px;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* 标题居中对齐 */
}

.desc {
  font-size: 20px;
  margin-bottom: 5px;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.address-price {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.star {
  font-size: 25px; /* 字体大小 */
  color: #f6d769; /* 星星的颜色 */
  margin-right: 5px; /* 每个星星之间的间距 */
  vertical-align: middle; /* 垂直居中对齐 */
}

.star-outline {
  color: gold;
  font-size: 25px; /* 字体大小 */
}
.food-rating {
display: inline-block;
}
.starr {
  font-size: 15px; /* 字体大小 */
  color: #535353; /* 星星的颜色 */
  margin-right: 0px; /* 每个星星之间的间距 */
  vertical-align: middle; /* 垂直居中对齐 */
  left:10px;
  border:none;
}
.star-filled {
  color: gold;
  border:none;
}
button.starr{
  background-color: transparent;
  border-color: transparent;
  border-width:10px;
  border:none;
}
</style>
