<template>
  <view>
	  <unicloud-db v-slot:default="{ data, loading, error, options }" collection="food" :where="{ _id: itemId }">
    <div class="db-container">
      <div v-if="error" class="error">{{ error.message }}</div>
      <div v-else>
        <div v-if="loading" class="loading">正在加载...</div>
        <div v-else>
          <div v-for="item in data" :key="item._id" class="item">
            <img :src="item.image" class="image" />
            <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.description }}</div>
              <div class="address">{{ item.address }}</div>
              <div class="price">价格：{{ item.price }}</div>
              <div class="rating">评分：{{ item.rating }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </unicloud-db>
    <unicloud-db ref="udb" :where="judge" v-slot:default="{data, loading, error, options}" collection="guestbook,uni-id-users" field="_id,test,state,user_id.nickname,user_id.avatar_file,user_id._id">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        <view v-for="(item,index) in data" :key="index" class="item">
          <view class="main">
            <cloud-image :src="item.user_id[0].avatar_file.url"></cloud-image>
            <view class="info">
              <view class="nickname">{{item.user_id[0].nickname}}</view>
              <view class="things">{{item.test}}</view>
            </view>
             <view style="flex: 1;"></view>
			<view v-if="uniIDHasRole('aadmin')">
				<button @click="changestate(item)" type="default">{{item.state ? '审核通过' : '审核中'}}</button>
			</view>
			<view v-else>
			<text>{{item.state ? '' : '审核中'}}</text>
			</view>
          </view>
        </view>
		<view class="submit-box">
			<input class="input-box" v-model="test" placeholder="输入评论内容" />
			<button class="btn" @click="send">发送</button>
		</view>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				test:"",
				itemId:""
			}
		},
		mounted() {
		   this.itemId = this.$route.query._id;
		   console.log(this.itemId); // 打印父页面传递的 _id 值
		   // 根据传递过来的 _id 值进行相应的处理
		   // ...
		 },
		computed:{
			judge(){
				if(this.uniIDHasRole('aadmin')){
					return ''
				}else{
					return 'state == true||user_id._id == $cloudEnv_uid'
				}
			}
		},
		methods: {
			async send() {
				const db = uniCloud.database();
				const guestbookTable = db.collection('guestbook');
				let res = await guestbookTable.add({
					"test": this.test,
				});
				if (!res.result.code) {
					uni.showToast({
						title: '发送成功！',
						icon: 'none'
					});
					this.test = '';
					this.$refs.udb.refresh();
				}
			},
			changestate(item){
				this.$refs.udb.update(item._id,{state:!item.state},{complete:e=>{
					console.log(e);
				}})
			}
		}
	}
</script>

<style scoped>
.item {
	margin-bottom: 10px;
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
	top: 0;
	left: 50px; /* 调整这里的数值以确保信息栏紧贴在图片右侧 */
	padding: 6px;
	background-color: rgba(255, 255, 255, 0.5);
	color: #070707;
}

.text-container {
	text-align: left; /* 将文字左对齐 */
}

.nickname {
	font-size: 12px;
	font-weight: bold;
}

.things {
	margin-top: 6px;
	font-size: 14px;
}

text {
	position: absolute;
	top: 0;
	right: 0;
}

.submit-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
}

.input-box {
  display: inline-block;
  height: 30px;
  width: calc(80% - 5px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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


</style>
