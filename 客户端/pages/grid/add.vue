<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="title" label="想吃的菜" :required="true" :rules="rules.title">
        <uni-easyinput v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="imgs" label="展示图片" :required="true" :rules="rules.imgs">
        <uni-file-picker file-mediatype="image" :limit="1" return-type="array" v-model="formData.imgs"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="reason" label="推荐理由" :required="true" :rules="rules.reason">
        <textarea @input="binddata('reason', $event.detail.value)" class="uni-textarea-border"
          v-model="formData.reason" trim="right"></textarea>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
const db = uniCloud.database();
const dbCollectionName = 'love-food';

export default {
  data() {
    let formData = {
      "reason": "",
      "imgs": [],
      "title": ""
    };
    return {
      formData,
      formOptions: {},
      rules: {
        title: [
          { required: true, message: '请输入想吃的菜', trigger: 'blur' }
        ],
        imgs: [
          { required: true, message: '请上传展示图片', trigger: 'change' }
        ],
        reason: [
          { required: true, message: '请输入推荐理由', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    /**
     * 触发表单提交
     */
    submit() {
      this.$refs.form.validate().then(() => {
        uni.showLoading({
          mask: true
        });
        this.submitForm();
      }).catch((err) => {
        const errorMessage = err.errors[0].message;
        uni.showToast({
          title: errorMessage,
          icon: 'none'
        });
      });
    },

    submitForm() {
      const value = { ...this.formData };
      value.likes=0;
      value.time = new Date();

      // 使用 clientDB 提交数据
      db.collection(dbCollectionName).add(value).then((res) => {
        uni.showToast({
          icon: 'none',
          title: '提交成功'
        });
        this.getOpenerEventChannel().emit('refreshData');
       setTimeout(() => uni.navigateBack(), 500);
      }).catch((err) => {
        uni.showModal({
          content: err.message || '请求服务失败',
          showCancel: false
        });
      }).finally(() => {
        uni.hideLoading();
      });
    }
  }
};
</script>



<style>
	.uni-container {
		padding: 15px;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}

	.uni-input-border {
		padding: 0 10px;
		height: 35px;

	}

	.uni-textarea-border {
		padding: 10px;
		height: 80px;
	}

	.uni-button-group {
		margin-top: 50px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
	}

	.uni-button {
		width: 184px;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		line-height: 1;
		margin: 0;
	}
</style>
