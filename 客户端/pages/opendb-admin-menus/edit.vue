<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="menu_id" label="" required>
        <uni-easyinput placeholder="菜单项的ID，不可重复" v-model="formData.menu_id" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="name" label="" required>
        <uni-easyinput placeholder="菜单名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="icon" label="">
        <uni-easyinput placeholder="菜单图标" v-model="formData.icon" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="url" label="">
        <uni-easyinput placeholder="菜单url" v-model="formData.url" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sort" label="">
        <uni-easyinput placeholder="菜单序号（越大越靠后）" type="number" v-model="formData.sort"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="parent_id" label="">
        <uni-easyinput placeholder="父级菜单Id" v-model="formData.parent_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="permission" label="">
        <uni-data-checkbox :multiple="true" v-model="formData.permission"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="enable" label="">
        <switch @change="binddata('enable', $event.detail.value)" :checked="formData.enable"></switch>
      </uni-forms-item>
      <uni-forms-item name="create_date" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.create_date"></uni-datetime-picker>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/opendb-admin-menus.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-admin-menus';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "menu_id": "",
        "name": "",
        "icon": "",
        "url": "",
        "sort": null,
        "parent_id": "",
        "permission": [],
        "enable": null,
        "create_date": null
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("menu_id,name,icon,url,sort,parent_id,permission,enable,create_date").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
