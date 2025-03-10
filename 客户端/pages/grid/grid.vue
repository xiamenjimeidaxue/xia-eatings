<template>
	<view class="warp">
		<!-- #ifdef APP-PLUS -->
		<statusBar></statusBar>
		<!-- #endif -->
		<button class="add-button" @click="add()">+</button>
	<unicloud-db ref="udb" :where="judge" orderby="state asc,likes desc" v-slot:default="{data, loading, error, options}" collection="love-food,uni-id-users" field="_id,state,imgs,title,time,likes,reason,author_id.nickname,author_id.avatar_file,author_id._id">
		<view v-if="error">{{error.message}}</view>
		<view v-else>
			<view class="uni-search-box">
			  <input type="text" class="input-box" v-model="keyword" placeholder="请输入关键字(食物内容)" />
			  <button class="cover-search-bar" @click="search">搜索</button>
			</view>
			<view v-if="searchresult==''">
			<view v-for="item in data" :key="item._id" class="item">
				<view class="main">
					 <cloud-image v-if="item.author_id[0].avatar_file.url" :src="item.author_id[0].avatar_file.url"></cloud-image>
				  <cloud-image v-else src="/static/logo.png"></cloud-image>
				  <view class="info">
				    <view class="nickname">{{item.author_id[0].nickname}}</view>
				    		</view>
				   <view style="flex: 1;"></view>
				    		<view v-if="uniIDHasRole('aadmin')">
				    			<button @click="changestate(item)" type="default">{{item.state ? '审核通过' : '审核中'}}</button>
				    		</view>
				    		<view v-else>
				    		<text>{{item.state ? '' : '审核中'}}</text>
				    		</view>
				</view>
				<view>
				  <img :src="item.imgs[0].url" class="food-image" />
				    <div class="food-title">{{ item.title }}</div>
				    <div class="desc">推荐理由：{{ item.reason }}</div>
				    <div class="timestamp">{{ new Date(item.time).toLocaleString() }}</div>
							<view class="actions">
									  <button class="like-button" @click="like(item)">
									    <img class="likeimg" src="@/static/liked.png" alt="点赞">
									  </button>
									  <span class="likecount">{{ item.likes}}</span>
									</view>
									</view>
		</view>
		</view>
		<view v-else>
			<view v-for="item in searchresult" :key="item.loveFood._id" class="item">
			      <view class="main">
			        <cloud-image v-if="item.user.avatar_file" :src="item.user.avatar_file.url"></cloud-image>
			        <cloud-image v-else src="/static/logo.png"></cloud-image>
			        <view class="info">
			          <view class="nickname">{{ item.user.nickname }}</view>
			        </view>
			        <view style="flex: 1;"></view>
			        <view v-if="uniIDHasRole('admin')">
			          <button @click="changestate(item)" type="default">{{ item.loveFood.state ? '审核通过' : '审核中' }}</button>
			        </view>
			        <view v-else>
			          <text>{{ item.loveFood.state ? '' : '审核中' }}</text>
			        </view>
			      </view>
			      <view>
			        <img :src="item.loveFood.imgs[0].url" class="food-image" />
			        <div class="food-title">{{ item.loveFood.title }}</div>
			        <div class="desc">推荐理由：{{ item.loveFood.reason }}</div>
			        <div class="timestamp">{{ new Date(item.loveFood.time).toLocaleString() }}</div>
			        <view class="actions">
			          <button class="like-button" @click="liking(item)">
			            <img class="likeimg" src="@/static/liked.png" alt="点赞">
			          </button>
			          <span class="likecount">{{ item.loveFood.likes }}</span>
			        </view>
			      </view>
			    </view>
			</view>
		</view>
	</unicloud-db>
	</view>
</template>

<script>
	// #ifdef APP-PLUS
	import statusBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar";
	// #endif
	export default {
		data(){
			return{
				liked:0,
				searchresult:"",
				keyword:""
			};
		},
		computed: {
		  judge() {
		    if (this.uniIDHasRole('aadmin')) {
		      return '';
		    } else {
		      const currentUserInfo = uniCloud.getCurrentUserInfo();
		      if (currentUserInfo.uid != null) {
		        return "state == true||author_id._id == '" + currentUserInfo.uid + "'";
		      } else {
		        return "state == true";
		      }
		    }
		  }
		},
		methods:{
			 async like(item) {
				const db = uniCloud.database();  
				await db.collection('love-food').where('_id=="'+item._id+'"').update({
				    "likes":item.likes+1, 
				});
				item.likes += 1; 
			  },
			  async liking(item) {
			  				const db = uniCloud.database();  
			  				await db.collection('love-food').where('_id=="'+item.loveFood._id+'"').update({
			  				    "likes":item.loveFood.likes+1, 
			  				});
			  				item.loveFood.likes += 1; 
			   },
			  search() {
			        // 调用云函数进行搜索
			        uniCloud.callFunction({
			          name: 'search-lovefood', // 云函数名称
			          data: {
			            keyword: this.keyword // 将搜索关键字传递给云函数
			          },
			          success: res => {
			            // 打印搜索结果
			  		  this.searchresult=res.result.data;
			  		  console.log(this.searchresult); 
			          },
			          fail: err => {
			            console.error(err);
			  		  
			          }
			        })
			      },
			add()
			{
				this.$router.push("./add");
			},
			changestate(item){
				this.$refs.udb.update(item._id,{state:!item.state},{complete:e=>{
													this.$refs.udb.refresh();
												}}) 
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		min-height: 100%;
		height: auto;
	}
	view {
		font-size: 14px;
		line-height: inherit;
	}
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	/* #endif */
	
	.section-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20rpx;
	}
	.decoration{
		width: 4px;
		height: 12px;
		border-radius: 10px;
		background-color: #2979ff;
	}
	.section-text{
		color: #333;
		margin-left: 15rpx;
	}

	/* #ifdef APP-NVUE */
	.warp {
		background-color: #fff;
	}
	/* #endif */

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.image {
		width: 50rpx;
		height: 50rpx;
	}
	
	.big-number{
		font-size: 50rpx;
		font-weight: 700;
		font-stretch: condensed;
		font-style:oblique;
	}
	
	.text {
		text-align: center;
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.grid-item-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.banner-image {
		width: 750rpx;
		height: 400rpx;
	}

	.swiper-box {
		height: 400rpx;
	}

	.search-icons {
		padding: 16rpx;
	}
	.add-button {
	      position: fixed;
	      font-size: 40px;
	      border-radius: 50%;
	      background-color: #0055ff;
	      border: none;
	      cursor: pointer;
	      color: white;
	      width: 50px;
	      height: 50px;
	      display: flex;
		  bottom: 55px;
		  right: 165px;
	      justify-content: center;
	      align-items: center;
	    }
	.search-container-bar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: #fff;
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
		margin-bottom: 5px;
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
	.infoot {
	  display: flex;
	  align-items: center;
	}
	.timestamp {
	  font-family: Arial, sans-serif;
	  font-size: 14px;
	  color: #666;
	
	}
	.nickname {
		display: inline-block; /* 将昵称设置为行内块元素 */
		  vertical-align: middle; /* 垂直居中对齐 */
	  font-size: 18px;
	  font-weight: 700;
	  position: relative;
	  top: 5px; /* 调整负的 top 值 */
	   margin-top: -50px; /* 调整星星和昵称之间的间距 */
	   margin-right:0px;
	}
	.food-item {
	  width: 300px;
	  margin: 10px;
	  padding: 10px;
	  background-color: transparent;
	}
	
	.food-image {
	  width: 100%;
	  height: auto;
	  margin-bottom: 0px;
	}
	.uni-search-box {
	  background-color: #FFFFFF;
	  position: sticky;
	  height: 50px;
	  top: 0px;
	  left: 0;
	  /* #ifndef APP-PLUS */
	  z-index: 9;
	  /* #endif */
	  /* #ifdef MP-WEIXIN */
	  width: 580rpx;
	  /* #endif */
	  display: flex; /* 新增 */
	}
	
	.cover-search-bar {
	  height: 40px;
	  width: 80px; 
	  position: absolute;
	  top: -2px;
	  margin-bottom: -20px;
	  font-size: 15px;
	  /* #ifndef APP-NVUE */
	  z-index: 999;
	  /* #endif */
	  right: 0; /* 新增 */
	  background-color: #0055ff;
	  color:white;
	}
	
	.input-box {
	  width: 400px; /* 根据需要调整输入框的宽度 */
	  margin-left: 10px; /* 根据需要调整输入框与搜索栏之间的间距 */
	  height: 40px;
	}
	.food-title {
	  font-size: 25px;
	  font-weight: bold;
	  margin-bottom: 5px;
	}
	.content {
	  margin-left: 10px;
	}
	.desc {
	  font-size: 20px;
	  margin-bottom: 5px;
	}
	.actions {
	  display: flex;
	  align-items: center;
	}
	
	.like-count {
	  font-size: 14px;
	  margin-right: 5px;
	}
	
	.like-button {
	  border: none;
	  background-color: transparent;
	  right: -70px;
	  width: 40px;
	  height: 40px;
	}
	
	.likeimg {
	  width: 24px;
	  height: 24px;
	}
	.likecount{
		position: absolute; /* 使用绝对定位 */
		  left: 280px; /* 根据实际情况调整位置 */
	}

	/* #ifndef APP-NVUE || VUE3*/
	::v-deep
	/* #endif */
	.uni-searchbar__box {
		border-width: 0;
	}

	/* #ifndef APP-NVUE || VUE3 */
	::v-deep
	/* #endif */
	.uni-input-placeholder {
		font-size: 28rpx;
	}
</style>
