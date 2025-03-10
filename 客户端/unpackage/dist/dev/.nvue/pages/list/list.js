import { f as formatAppLog, B as Bs, r as resolveEasycom, _ as __easycom_2 } from "../../unicloud-db.js";
import { openBlock, createElementBlock, normalizeStyle, renderSlot, resolveComponent, resolveDynamicComponent, createElementVNode, createVNode, createCommentVNode, withCtx, toDisplayString, withKeys, createTextVNode, Fragment, renderList } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0$1 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$1 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
var isIos;
isIos = plus.os.name == "iOS";
function judgeIosPermissionPush() {
  var result = false;
  var UIApplication = plus.ios.import("UIApplication");
  var app = UIApplication.sharedApplication();
  var enabledTypes = 0;
  if (app.currentUserNotificationSettings) {
    var settings = app.currentUserNotificationSettings();
    enabledTypes = settings.plusGetAttribute("types");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "推送权限没有开启");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "已经开启推送功能!");
    }
    plus.ios.deleteObject(settings);
  } else {
    enabledTypes = app.enabledRemoteNotificationTypes();
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "推送权限没有开启!");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "已经开启推送功能!");
    }
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
  }
  plus.ios.deleteObject(app);
  plus.ios.deleteObject(UIApplication);
  return result;
}
function judgeIosPermissionLocation() {
  var result = false;
  var cllocationManger = plus.ios.import("CLLocationManager");
  var status = cllocationManger.authorizationStatus();
  result = status != 2;
  plus.ios.deleteObject(cllocationManger);
  return result;
}
function judgeIosPermissionRecord() {
  var result = false;
  var avaudiosession = plus.ios.import("AVAudioSession");
  var avaudio = avaudiosession.sharedInstance();
  var permissionStatus = avaudio.recordPermission();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "麦克风权限没有开启");
  } else {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "麦克风权限已经开启");
  }
  plus.ios.deleteObject(avaudiosession);
  return result;
}
function judgeIosPermissionCamera() {
  var result = false;
  var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
  var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "相机权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "相机权限没有开启");
  }
  plus.ios.deleteObject(AVCaptureDevice);
  return result;
}
function judgeIosPermissionPhotoLibrary() {
  var result = false;
  var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
  var authStatus = PHPhotoLibrary.authorizationStatus();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "相册权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "相册权限没有开启");
  }
  plus.ios.deleteObject(PHPhotoLibrary);
  return result;
}
function judgeIosPermissionContact() {
  var result = false;
  var CNContactStore = plus.ios.import("CNContactStore");
  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
  if (cnAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "通讯录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "通讯录权限没有开启");
  }
  plus.ios.deleteObject(CNContactStore);
  return result;
}
function judgeIosPermissionCalendar() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "日历权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "日历权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function judgeIosPermissionMemo() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "备忘录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "备忘录权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function requestAndroidPermission(permissionID) {
  return new Promise((resolve, reject) => {
    plus.android.requestPermissions(
      [permissionID],
      // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
      function(resultObj) {
        var result = 0;
        for (var i = 0; i < resultObj.granted.length; i++) {
          var grantedPermission = resultObj.granted[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "已获取的权限：" + grantedPermission);
          result = 1;
        }
        for (var i = 0; i < resultObj.deniedPresent.length; i++) {
          var deniedPresentPermission = resultObj.deniedPresent[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "拒绝本次申请的权限：" + deniedPresentPermission);
          result = 0;
        }
        for (var i = 0; i < resultObj.deniedAlways.length; i++) {
          var deniedAlwaysPermission = resultObj.deniedAlways[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "永久拒绝申请的权限：" + deniedAlwaysPermission);
          result = -1;
        }
        resolve(result);
      },
      function(error) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "申请权限错误：" + error.code + " = " + error.message);
        resolve({
          code: error.code,
          message: error.message
        });
      }
    );
  });
}
function judgeIosPermission(permissionID) {
  if (permissionID == "location") {
    return judgeIosPermissionLocation();
  } else if (permissionID == "camera") {
    return judgeIosPermissionCamera();
  } else if (permissionID == "photoLibrary") {
    return judgeIosPermissionPhotoLibrary();
  } else if (permissionID == "record") {
    return judgeIosPermissionRecord();
  } else if (permissionID == "push") {
    return judgeIosPermissionPush();
  } else if (permissionID == "contact") {
    return judgeIosPermissionContact();
  } else if (permissionID == "calendar") {
    return judgeIosPermissionCalendar();
  } else if (permissionID == "memo") {
    return judgeIosPermissionMemo();
  }
  return false;
}
function gotoAppPermissionSetting() {
  if (isIos) {
    var UIApplication = plus.ios.import("UIApplication");
    var application2 = UIApplication.sharedApplication();
    var NSURL2 = plus.ios.import("NSURL");
    var setting2 = NSURL2.URLWithString("app-settings:");
    application2.openURL(setting2);
    plus.ios.deleteObject(setting2);
    plus.ios.deleteObject(NSURL2);
    plus.ios.deleteObject(application2);
  } else {
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var Uri = plus.android.importClass("android.net.Uri");
    var mainActivity = plus.android.runtimeMainActivity();
    var intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}
function checkSystemEnableLocation() {
  if (isIos) {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var result = cllocationManger.locationServicesEnabled();
    plus.ios.deleteObject(cllocationManger);
    return result;
  } else {
    var context = plus.android.importClass("android.content.Context");
    var locationManager = plus.android.importClass("android.location.LocationManager");
    var main = plus.android.runtimeMainActivity();
    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "系统定位开启:" + result);
    return result;
  }
}
const permision = {
  judgeIosPermission,
  requestAndroidPermission,
  checkSystemEnableLocation,
  gotoAppPermissionSetting
};
class Gps {
  constructor(arg) {
    this.lock = false;
  }
  async getLocation(param = {
    type: "wgs84"
  }) {
    return new Promise(async (callback2) => {
      if (this.lock) {
        callback2(false);
        return false;
      }
      this.lock = true;
      uni.getLocation({
        ...param,
        success: (res) => {
          this.lock = false;
          callback2(res);
        },
        fail: async (err) => {
          uni.showToast({
            title: "定位获取失败",
            icon: "none"
          });
          formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
          callback2(false);
          await this.checkGpsIsOpen();
        }
      });
    });
  }
  async checkGpsIsOpen() {
    this.lock = true;
    if (!permision.checkSystemEnableLocation()) {
      plus.nativeUI.confirm("手机定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          if (uni.getSystemInfoSync().platform == "ios") {
            plus.runtime.openURL("app-settings://");
          } else {
            var main = plus.android.runtimeMainActivity();
            var Intent = plus.android.importClass("android.content.Intent");
            var Settings = plus.android.importClass("android.provider.Settings");
            var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            main.startActivity(intent);
          }
        } else {
          uni.showToast({
            title: "设备无定位权限",
            icon: "none"
          });
          callback(false);
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
      return false;
    }
    let checkAppGpsRes = await this.checkAppGps();
    if (!checkAppGpsRes) {
      plus.nativeUI.confirm("应用定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          permision.gotoAppPermissionSetting();
          callback(false);
        } else {
          uni.showToast({
            title: "应用无定位权限",
            icon: "none"
          });
          return false;
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
    } else {
      this.lock = false;
    }
  }
  async checkAppGps() {
    if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
      return false;
    }
    if (uni.getSystemInfoSync().platform != "ios" && await permision.requestAndroidPermission(
      "android.permission.ACCESS_FINE_LOCATION"
    ) != 1) {
      return false;
    }
    return true;
  }
}
const _style_0 = { "pages": { "": { "backgroundColor": "#FFFFFF" } }, "avatar": { "": { "width": "200rpx", "height": "200rpx", "marginRight": "10rpx" } }, "main": { "": { "justifyContent": "space-between", "flex": 1 } }, "title": { "": { "fontSize": 16 } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": 14, "color": "#999999" } }, "last_modify_date": { "": { "fontSize": 14, "color": "#999999" } }, "uni-search-box": { "": { "backgroundColor": "#FFFFFF", "position": "sticky", "height": 50, "top": 0, "left": 0, "display": "flex" } }, "cover-search-bar": { "": { "height": 40, "width": 80, "position": "absolute", "top": -2, "marginBottom": -20, "fontSize": 15, "right": 0, "backgroundColor": "#c30061", "color": "#FFFFFF" } }, "input-box": { "": { "width": 400, "marginLeft": 10, "height": 40 } }, "food-container": { "": { "display": "flex", "flexWrap": "wrap" } }, "food-item": { "": { "width": 300, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#ffffff", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)" } }, "food-image": { "": { "width": 100, "marginBottom": 10 } }, "food-title": { "": { "fontSize": 20, "fontWeight": "bold", "marginBottom": 5 } }, "food-info": { "": { "display": "flex", "flexDirection": "column" } }, "food-price": { "": { "textAlign": "left" } }, "food-rating": { "": { "textAlign": "left" } }, "food-address": { "": { "textAlign": "left" } }, "star": { "": { "fontSize": 25, "color": "#f6d769", "marginRight": 5 } }, "star-outline": { "": { "color": "#FFD700", "fontSize": 25 } }, "@FONT-FACE": [{ "food-item": { "": { "width": 100 } } }] };
let cdbRef;
const gps = new Gps(), db = Bs.database();
const _sfc_main = {
  components: {
    statusBar
  },
  computed: {
    inputPlaceholder(e) {
      if (uni.getStorageSync("CURRENT_LANG") == "en") {
        return "Please enter the search content";
      } else {
        return "请输入搜索内容";
      }
    },
    colList() {
      return [
        db.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),
        db.collection("uni-id-users").field("_id,nickname").getTemp()
      ];
    }
  },
  data() {
    return {
      where: '"article_status" == 1',
      keyword: "",
      showRefresh: false,
      listHight: 0,
      searchedData: null,
      searchresult: "",
      dbOptions: {
        sort: { score: -1 }
      }
    };
  },
  watch: {
    keyword(keyword, oldValue) {
      let where = '"article_status" == 1 ';
      if (keyword) {
        this.where = where + `&& /${keyword}/.test(title)`;
      } else {
        this.where = where;
      }
    }
  },
  async onReady() {
    this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
    cdbRef = this.$refs.udb;
  },
  async onShow() {
    this.keyword = getApp().globalData.searchText;
    getApp().globalData.searchText = "";
    await gps.getLocation({
      geocode: true
    });
  },
  methods: {
    gotoUrl(url, itemId) {
      uni.navigateTo({
        url: `${url}?_id=${itemId}`
      });
    },
    search() {
      Bs.callFunction({
        name: "search-food",
        // 云函数名称
        data: {
          keyword: this.keyword
          // 将搜索关键字传递给云函数
        },
        success: (res) => {
          this.searchresult = res.result.data;
          formatAppLog("log", "at pages/list/list.nvue:165", this.searchresult);
        },
        fail: (err) => {
          formatAppLog("error", "at pages/list/list.nvue:168", err);
        }
      });
    },
    retry() {
      this.refresh();
    },
    refresh() {
      cdbRef.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh();
        this.showRefresh = false;
        formatAppLog("log", "at pages/list/list.nvue:184", "end");
      });
      formatAppLog("log", "at pages/list/list.nvue:186", "refresh");
    },
    loadMore() {
      cdbRef.loadMore();
    },
    onqueryerror(e) {
      formatAppLog("error", "at pages/list/list.nvue:192", e);
    },
    onpullingdown(e) {
      formatAppLog("log", "at pages/list/list.nvue:195", e);
      this.showRefresh = true;
      if (e.pullingDistance > 100) {
        this.refresh();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_statusBar = resolveComponent("statusBar");
  const _component_button = resolveComponent("button");
  const _component_h3 = resolveComponent("h3");
  const _component_p = resolveComponent("p");
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "pages" }, [
      createVNode(_component_statusBar),
      createCommentVNode(" 搜索功能 "),
      createVNode(
        _component_unicloud_db,
        {
          ref: "udb",
          orderby: "rating desc",
          collection: "food"
        },
        {
          default: withCtx(({ data, loading, error, options }) => [
            error ? (openBlock(), createElementBlock("view", { key: 0 }, [
              createElementVNode(
                "u-text",
                null,
                toDisplayString(error.message),
                1
                /* TEXT */
              )
            ])) : (openBlock(), createElementBlock("view", { key: 1 }, [
              createElementVNode("view", { class: "uni-search-box" }, [
                createElementVNode("u-input", {
                  type: "text",
                  class: "input-box",
                  modelValue: $data.keyword,
                  onInput: _cache[0] || (_cache[0] = ($event) => $data.keyword = $event.detail.value),
                  placeholder: "请输入关键字(食物内容或者地址)",
                  onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $options.search(), ["enter"]))
                }, null, 40, ["modelValue"]),
                createVNode(_component_button, {
                  class: "cover-search-bar",
                  onClick: $options.search
                }, {
                  default: withCtx(() => [
                    createTextVNode("搜索")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              $data.searchresult == "" ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "food-container"
              }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(data, (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item._id,
                      class: "food-item",
                      onClick: ($event) => $options.gotoUrl(item.page_url, item._id)
                    }, [
                      createElementVNode("img", {
                        src: item.image,
                        class: "food-image"
                      }, null, 8, ["src"]),
                      createElementVNode("div", { class: "food-info" }, [
                        createVNode(
                          _component_h3,
                          { class: "food-title" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                toDisplayString(item.title),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_p,
                          { class: "food-address" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                "地址: " + toDisplayString(item.address),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_p,
                          { class: "food-price" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                "价格: " + toDisplayString(item.price) + "元",
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createElementVNode("div", { class: "food-rating" }, [
                          createElementVNode("u-text", null, " 推荐指数: "),
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(Math.floor(item.rating), (star) => {
                              return openBlock(), createElementBlock("span", { class: "star" }, [
                                createElementVNode("u-text", null, "★")
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          )),
                          createCommentVNode(" 判断是否有半颗星星 "),
                          item.rating % 1 !== 0 ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            style: { "color": "gold" }
                          }, [
                            createElementVNode("span", { class: "star star-outline" }, [
                              createElementVNode("u-text", null, "☆")
                            ]),
                            createCommentVNode(" 空心星星 ")
                          ])) : createCommentVNode("v-if", true),
                          createElementVNode("span", { style: { "color": "gold" } }, [
                            createElementVNode(
                              "u-text",
                              null,
                              toDisplayString(item.rating.toFixed(1)),
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "food-container"
              }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.searchresult, (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item._id,
                      class: "food-item",
                      onClick: ($event) => $options.gotoUrl(item.page_url, item._id)
                    }, [
                      createElementVNode("img", {
                        src: item.image,
                        class: "food-image"
                      }, null, 8, ["src"]),
                      createElementVNode("div", { class: "food-info" }, [
                        createVNode(
                          _component_h3,
                          { class: "food-title" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                toDisplayString(item.title),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_p,
                          { class: "food-address" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                "地址: " + toDisplayString(item.address),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_p,
                          { class: "food-price" },
                          {
                            default: withCtx(() => [
                              createElementVNode(
                                "u-text",
                                null,
                                "价格: " + toDisplayString(item.price) + "元",
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createElementVNode("div", { class: "food-rating" }, [
                          createElementVNode("u-text", null, " 推荐指数: "),
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(Math.floor(item.rating), (star) => {
                              return openBlock(), createElementBlock("span", { class: "star" }, [
                                createElementVNode("u-text", null, "★")
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          )),
                          createCommentVNode(" 判断是否有半颗星星 "),
                          item.rating % 1 !== 0 ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            style: { "color": "gold" }
                          }, [
                            createElementVNode("span", { class: "star star-outline" }, [
                              createElementVNode("u-text", null, "☆")
                            ]),
                            createCommentVNode(" 空心星星 ")
                          ])) : createCommentVNode("v-if", true),
                          createElementVNode("span", { style: { "color": "gold" } }, [
                            createElementVNode(
                              "u-text",
                              null,
                              toDisplayString(item.rating.toFixed(1)),
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]))
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ])
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/pages/list/list.nvue"]]);
export {
  list as default
};
