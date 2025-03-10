import { i as initVueI18n, r as resolveEasycom, B as Bs, f as formatAppLog, _ as __easycom_2 } from "../../../unicloud-db.js";
import { openBlock, createElementBlock, normalizeStyle, toDisplayString, resolveDynamicComponent, createElementVNode, renderSlot, createVNode, createCommentVNode, normalizeClass, resolveComponent, createBlock, Fragment, renderList, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const fontData = [
  {
    "font_class": "arrow-down",
    "unicode": ""
  },
  {
    "font_class": "arrow-left",
    "unicode": ""
  },
  {
    "font_class": "arrow-right",
    "unicode": ""
  },
  {
    "font_class": "arrow-up",
    "unicode": ""
  },
  {
    "font_class": "auth",
    "unicode": ""
  },
  {
    "font_class": "auth-filled",
    "unicode": ""
  },
  {
    "font_class": "back",
    "unicode": ""
  },
  {
    "font_class": "bars",
    "unicode": ""
  },
  {
    "font_class": "calendar",
    "unicode": ""
  },
  {
    "font_class": "calendar-filled",
    "unicode": ""
  },
  {
    "font_class": "camera",
    "unicode": ""
  },
  {
    "font_class": "camera-filled",
    "unicode": ""
  },
  {
    "font_class": "cart",
    "unicode": ""
  },
  {
    "font_class": "cart-filled",
    "unicode": ""
  },
  {
    "font_class": "chat",
    "unicode": ""
  },
  {
    "font_class": "chat-filled",
    "unicode": ""
  },
  {
    "font_class": "chatboxes",
    "unicode": ""
  },
  {
    "font_class": "chatboxes-filled",
    "unicode": ""
  },
  {
    "font_class": "chatbubble",
    "unicode": ""
  },
  {
    "font_class": "chatbubble-filled",
    "unicode": ""
  },
  {
    "font_class": "checkbox",
    "unicode": ""
  },
  {
    "font_class": "checkbox-filled",
    "unicode": ""
  },
  {
    "font_class": "checkmarkempty",
    "unicode": ""
  },
  {
    "font_class": "circle",
    "unicode": ""
  },
  {
    "font_class": "circle-filled",
    "unicode": ""
  },
  {
    "font_class": "clear",
    "unicode": ""
  },
  {
    "font_class": "close",
    "unicode": ""
  },
  {
    "font_class": "closeempty",
    "unicode": ""
  },
  {
    "font_class": "cloud-download",
    "unicode": ""
  },
  {
    "font_class": "cloud-download-filled",
    "unicode": ""
  },
  {
    "font_class": "cloud-upload",
    "unicode": ""
  },
  {
    "font_class": "cloud-upload-filled",
    "unicode": ""
  },
  {
    "font_class": "color",
    "unicode": ""
  },
  {
    "font_class": "color-filled",
    "unicode": ""
  },
  {
    "font_class": "compose",
    "unicode": ""
  },
  {
    "font_class": "contact",
    "unicode": ""
  },
  {
    "font_class": "contact-filled",
    "unicode": ""
  },
  {
    "font_class": "down",
    "unicode": ""
  },
  {
    "font_class": "download",
    "unicode": ""
  },
  {
    "font_class": "download-filled",
    "unicode": ""
  },
  {
    "font_class": "email",
    "unicode": ""
  },
  {
    "font_class": "email-filled",
    "unicode": ""
  },
  {
    "font_class": "eye",
    "unicode": ""
  },
  {
    "font_class": "eye-filled",
    "unicode": ""
  },
  {
    "font_class": "eye-slash",
    "unicode": ""
  },
  {
    "font_class": "eye-slash-filled",
    "unicode": ""
  },
  {
    "font_class": "fire",
    "unicode": ""
  },
  {
    "font_class": "fire-filled",
    "unicode": ""
  },
  {
    "font_class": "flag",
    "unicode": ""
  },
  {
    "font_class": "flag-filled",
    "unicode": ""
  },
  {
    "font_class": "folder-add",
    "unicode": ""
  },
  {
    "font_class": "folder-add-filled",
    "unicode": ""
  },
  {
    "font_class": "font",
    "unicode": ""
  },
  {
    "font_class": "forward",
    "unicode": ""
  },
  {
    "font_class": "gear",
    "unicode": ""
  },
  {
    "font_class": "gear-filled",
    "unicode": ""
  },
  {
    "font_class": "gift",
    "unicode": ""
  },
  {
    "font_class": "gift-filled",
    "unicode": ""
  },
  {
    "font_class": "hand-down",
    "unicode": ""
  },
  {
    "font_class": "hand-down-filled",
    "unicode": ""
  },
  {
    "font_class": "hand-up",
    "unicode": ""
  },
  {
    "font_class": "hand-up-filled",
    "unicode": ""
  },
  {
    "font_class": "headphones",
    "unicode": ""
  },
  {
    "font_class": "heart",
    "unicode": ""
  },
  {
    "font_class": "heart-filled",
    "unicode": ""
  },
  {
    "font_class": "help",
    "unicode": ""
  },
  {
    "font_class": "help-filled",
    "unicode": ""
  },
  {
    "font_class": "home",
    "unicode": ""
  },
  {
    "font_class": "home-filled",
    "unicode": ""
  },
  {
    "font_class": "image",
    "unicode": ""
  },
  {
    "font_class": "image-filled",
    "unicode": ""
  },
  {
    "font_class": "images",
    "unicode": ""
  },
  {
    "font_class": "images-filled",
    "unicode": ""
  },
  {
    "font_class": "info",
    "unicode": ""
  },
  {
    "font_class": "info-filled",
    "unicode": ""
  },
  {
    "font_class": "left",
    "unicode": ""
  },
  {
    "font_class": "link",
    "unicode": ""
  },
  {
    "font_class": "list",
    "unicode": ""
  },
  {
    "font_class": "location",
    "unicode": ""
  },
  {
    "font_class": "location-filled",
    "unicode": ""
  },
  {
    "font_class": "locked",
    "unicode": ""
  },
  {
    "font_class": "locked-filled",
    "unicode": ""
  },
  {
    "font_class": "loop",
    "unicode": ""
  },
  {
    "font_class": "mail-open",
    "unicode": ""
  },
  {
    "font_class": "mail-open-filled",
    "unicode": ""
  },
  {
    "font_class": "map",
    "unicode": ""
  },
  {
    "font_class": "map-filled",
    "unicode": ""
  },
  {
    "font_class": "map-pin",
    "unicode": ""
  },
  {
    "font_class": "map-pin-ellipse",
    "unicode": ""
  },
  {
    "font_class": "medal",
    "unicode": ""
  },
  {
    "font_class": "medal-filled",
    "unicode": ""
  },
  {
    "font_class": "mic",
    "unicode": ""
  },
  {
    "font_class": "mic-filled",
    "unicode": ""
  },
  {
    "font_class": "micoff",
    "unicode": ""
  },
  {
    "font_class": "micoff-filled",
    "unicode": ""
  },
  {
    "font_class": "minus",
    "unicode": ""
  },
  {
    "font_class": "minus-filled",
    "unicode": ""
  },
  {
    "font_class": "more",
    "unicode": ""
  },
  {
    "font_class": "more-filled",
    "unicode": ""
  },
  {
    "font_class": "navigate",
    "unicode": ""
  },
  {
    "font_class": "navigate-filled",
    "unicode": ""
  },
  {
    "font_class": "notification",
    "unicode": ""
  },
  {
    "font_class": "notification-filled",
    "unicode": ""
  },
  {
    "font_class": "paperclip",
    "unicode": ""
  },
  {
    "font_class": "paperplane",
    "unicode": ""
  },
  {
    "font_class": "paperplane-filled",
    "unicode": ""
  },
  {
    "font_class": "person",
    "unicode": ""
  },
  {
    "font_class": "person-filled",
    "unicode": ""
  },
  {
    "font_class": "personadd",
    "unicode": ""
  },
  {
    "font_class": "personadd-filled",
    "unicode": ""
  },
  {
    "font_class": "personadd-filled-copy",
    "unicode": ""
  },
  {
    "font_class": "phone",
    "unicode": ""
  },
  {
    "font_class": "phone-filled",
    "unicode": ""
  },
  {
    "font_class": "plus",
    "unicode": ""
  },
  {
    "font_class": "plus-filled",
    "unicode": ""
  },
  {
    "font_class": "plusempty",
    "unicode": ""
  },
  {
    "font_class": "pulldown",
    "unicode": ""
  },
  {
    "font_class": "pyq",
    "unicode": ""
  },
  {
    "font_class": "qq",
    "unicode": ""
  },
  {
    "font_class": "redo",
    "unicode": ""
  },
  {
    "font_class": "redo-filled",
    "unicode": ""
  },
  {
    "font_class": "refresh",
    "unicode": ""
  },
  {
    "font_class": "refresh-filled",
    "unicode": ""
  },
  {
    "font_class": "refreshempty",
    "unicode": ""
  },
  {
    "font_class": "reload",
    "unicode": ""
  },
  {
    "font_class": "right",
    "unicode": ""
  },
  {
    "font_class": "scan",
    "unicode": ""
  },
  {
    "font_class": "search",
    "unicode": ""
  },
  {
    "font_class": "settings",
    "unicode": ""
  },
  {
    "font_class": "settings-filled",
    "unicode": ""
  },
  {
    "font_class": "shop",
    "unicode": ""
  },
  {
    "font_class": "shop-filled",
    "unicode": ""
  },
  {
    "font_class": "smallcircle",
    "unicode": ""
  },
  {
    "font_class": "smallcircle-filled",
    "unicode": ""
  },
  {
    "font_class": "sound",
    "unicode": ""
  },
  {
    "font_class": "sound-filled",
    "unicode": ""
  },
  {
    "font_class": "spinner-cycle",
    "unicode": ""
  },
  {
    "font_class": "staff",
    "unicode": ""
  },
  {
    "font_class": "staff-filled",
    "unicode": ""
  },
  {
    "font_class": "star",
    "unicode": ""
  },
  {
    "font_class": "star-filled",
    "unicode": ""
  },
  {
    "font_class": "starhalf",
    "unicode": ""
  },
  {
    "font_class": "trash",
    "unicode": ""
  },
  {
    "font_class": "trash-filled",
    "unicode": ""
  },
  {
    "font_class": "tune",
    "unicode": ""
  },
  {
    "font_class": "tune-filled",
    "unicode": ""
  },
  {
    "font_class": "undo",
    "unicode": ""
  },
  {
    "font_class": "undo-filled",
    "unicode": ""
  },
  {
    "font_class": "up",
    "unicode": ""
  },
  {
    "font_class": "upload",
    "unicode": ""
  },
  {
    "font_class": "upload-filled",
    "unicode": ""
  },
  {
    "font_class": "videocam",
    "unicode": ""
  },
  {
    "font_class": "videocam-filled",
    "unicode": ""
  },
  {
    "font_class": "vip",
    "unicode": ""
  },
  {
    "font_class": "vip-filled",
    "unicode": ""
  },
  {
    "font_class": "wallet",
    "unicode": ""
  },
  {
    "font_class": "wallet-filled",
    "unicode": ""
  },
  {
    "font_class": "weibo",
    "unicode": ""
  },
  {
    "font_class": "weixin",
    "unicode": ""
  }
];
const iconUrl = "/assets/uniicons.32e978a5.ttf";
const _style_0$5 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "uniicons",
  "src": "url('" + iconUrl + "')"
});
const _sfc_main$5 = {
  name: "UniIcons",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    customPrefix: {
      type: String,
      default: ""
    },
    fontFamily: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      icons: fontData
    };
  },
  computed: {
    unicode() {
      let code = this.icons.find((v) => v.font_class === this.type);
      if (code) {
        return code.unicode;
      }
      return "";
    },
    iconSize() {
      if (typeof this.size == "string") {
        return this.size;
      }
      const size = this.size;
      return size + "px";
    },
    styleObj() {
      if (this.fontFamily !== "") {
        return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
      }
      return `color: ${this.color}; font-size: ${this.iconSize};`;
    }
  },
  methods: {
    _onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "u-text",
    {
      style: normalizeStyle($options.styleObj),
      class: "uni-icons",
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    },
    toDisplayString($options.unicode),
    5
    /* TEXT, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$5]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
const en = {
  "uni-search-bar.cancel": "cancel",
  "uni-search-bar.placeholder": "Search enter content"
};
const zhHans = {
  "uni-search-bar.cancel": "取消",
  "uni-search-bar.placeholder": "请输入搜索内容"
};
const zhHant = {
  "uni-search-bar.cancel": "取消",
  "uni-search-bar.placeholder": "請輸入搜索內容"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$4 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#B3B3B3" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 14, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#B3B3B3", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$4 = {
  name: "UniSearchBar",
  emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    radius: {
      type: [Number, String],
      default: 5
    },
    clearButton: {
      type: String,
      default: "auto"
    },
    cancelButton: {
      type: String,
      default: "auto"
    },
    cancelText: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#F8F8F8"
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    focus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      showSync: false,
      searchVal: ""
    };
  },
  computed: {
    cancelTextI18n() {
      return this.cancelText || t("uni-search-bar.cancel");
    },
    placeholderText() {
      return this.placeholder || t("uni-search-bar.placeholder");
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.searchVal = newVal;
        if (newVal) {
          this.show = true;
        }
      }
    },
    focus: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          if (this.readonly)
            return;
          this.show = true;
          this.$nextTick(() => {
            this.showSync = true;
          });
        }
      }
    },
    searchVal(newVal, oldVal) {
      this.$emit("input", newVal);
      this.$emit("update:modelValue", newVal);
    }
  },
  methods: {
    searchClick() {
      if (this.readonly)
        return;
      if (this.show) {
        return;
      }
      this.show = true;
      this.$nextTick(() => {
        this.showSync = true;
      });
    },
    clear() {
      this.$emit("clear", {
        value: this.searchVal
      });
      this.searchVal = "";
    },
    cancel() {
      if (this.readonly)
        return;
      this.$emit("cancel", {
        value: this.searchVal
      });
      this.searchVal = "";
      this.show = false;
      this.showSync = false;
      plus.key.hideSoftKeybord();
    },
    confirm() {
      plus.key.hideSoftKeybord();
      this.$emit("confirm", {
        value: this.searchVal
      });
    },
    blur() {
      plus.key.hideSoftKeybord();
      this.$emit("blur", {
        value: this.searchVal
      });
    },
    emitFocus(e) {
      this.$emit("focus", e.detail);
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "uni-searchbar",
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        style: normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      },
      [
        createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ])
        ]),
        $data.show || $data.searchVal ? (openBlock(), createElementBlock("u-input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          confirmType: "search",
          type: "text",
          modelValue: $data.searchVal,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event.detail.value),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength", "modelValue"])) : (openBlock(), createElementBlock(
          "u-text",
          {
            key: 1,
            class: "uni-searchbar__text-placeholder"
          },
          toDisplayString($props.placeholder),
          1
          /* TEXT */
        )),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (openBlock(), createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ])
        ])) : createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    ),
    $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (openBlock(), createElementBlock(
      "u-text",
      {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      },
      toDisplayString($options.cancelTextI18n),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$4]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
const _style_0$3 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
const _sfc_main$3 = {
  name: "UniBadge",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "error"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    maxNum: {
      type: Number,
      default: 99
    },
    absolute: {
      type: String,
      default: ""
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    width() {
      return String(this.text).length * 8 + 12;
    },
    classNames() {
      const {
        inverted,
        type,
        size,
        absolute
      } = this;
      return [
        inverted ? "uni-badge--" + type + "-inverted" : "",
        "uni-badge--" + type,
        "uni-badge--" + size,
        absolute ? "uni-badge--absolute" : ""
      ].join(" ");
    },
    positionStyle() {
      if (!this.absolute)
        return {};
      let w = this.width / 2, h = 10;
      if (this.isDot) {
        w = 5;
        h = 5;
      }
      const x = `${-w + this.offset[0]}px`;
      const y = `${-h + this.offset[1]}px`;
      const whiteList = {
        rightTop: {
          right: x,
          top: y
        },
        rightBottom: {
          right: x,
          bottom: y
        },
        leftBottom: {
          left: x,
          bottom: y
        },
        leftTop: {
          left: x,
          top: y
        }
      };
      const match = whiteList[this.absolute];
      return match ? match : whiteList["rightTop"];
    },
    dotStyle() {
      if (!this.isDot)
        return {};
      return {
        width: "10px",
        minWidth: "0",
        height: "10px",
        padding: "0",
        borderRadius: "10px"
      };
    },
    displayValue() {
      const {
        isDot,
        text,
        maxNum
      } = this;
      return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-badge--x",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.text ? (openBlock(), createElementBlock(
      "u-text",
      {
        key: 0,
        class: normalizeClass([$options.classNames, "uni-badge"]),
        style: normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      },
      toDisplayString($options.displayValue),
      7
      /* TEXT, CLASS, STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
const _style_0$2 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "!backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
const _sfc_main$2 = {
  name: "UniListItem",
  emits: ["click", "switchChange"],
  props: {
    direction: {
      type: String,
      default: "row"
    },
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    },
    ellipsis: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: [Boolean, String],
      default: false
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    showBadge: {
      type: [Boolean, String],
      default: false
    },
    showSwitch: {
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      type: [Boolean, String],
      default: false
    },
    badgeText: {
      type: String,
      default: ""
    },
    badgeType: {
      type: String,
      default: "success"
    },
    badgeStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    rightText: {
      type: String,
      default: ""
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbSize: {
      type: String,
      default: "base"
    },
    showExtraIcon: {
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          type: "",
          color: "#000000",
          size: 20,
          customPrefix: ""
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default() {
        return {
          padding: "",
          backgroundColor: "#FFFFFF"
        };
      }
    },
    keepScrollPosition: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    "customStyle.padding": {
      handler(padding) {
        if (typeof padding == "number") {
          padding += "";
        }
        let paddingArr = padding.split(" ");
        if (paddingArr.length === 1) {
          const allPadding = paddingArr[0];
          this.padding = {
            "top": allPadding,
            "right": allPadding,
            "bottom": allPadding,
            "left": allPadding
          };
        } else if (paddingArr.length === 2) {
          const [verticalPadding, horizontalPadding] = paddingArr;
          this.padding = {
            "top": verticalPadding,
            "right": horizontalPadding,
            "bottom": verticalPadding,
            "left": horizontalPadding
          };
        } else if (paddingArr.length === 4) {
          const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
          this.padding = {
            "top": topPadding,
            "right": rightPadding,
            "bottom": bottomPadding,
            "left": leftPadding
          };
        }
      },
      immediate: true
    }
  },
  // inject: ['list'],
  data() {
    return {
      isFirstChild: false,
      padding: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      }
    };
  },
  mounted() {
    this.list = this.getForm();
    if (this.list) {
      if (!this.list.firstChildAppend) {
        this.list.firstChildAppend = true;
        this.isFirstChild = true;
      }
    }
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getForm(name = "uniList") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    onClick() {
      if (this.to !== "") {
        this.openPage();
        return;
      }
      if (this.clickable || this.link) {
        this.$emit("click", {
          data: {}
        });
      }
    },
    onSwitchChange(e) {
      this.$emit("switchChange", e.detail);
    },
    openPage() {
      if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
        this.pageApi(this.link);
      } else {
        this.pageApi("navigateTo");
      }
    },
    pageApi(api) {
      let callback = {
        url: this.to,
        success: (res) => {
          this.$emit("click", {
            data: res
          });
        },
        fail: (err) => {
          this.$emit("click", {
            data: err
          });
        }
      };
      switch (api) {
        case "navigateTo":
          uni.navigateTo(callback);
          break;
        case "redirectTo":
          uni.redirectTo(callback);
          break;
        case "reLaunch":
          uni.reLaunch(callback);
          break;
        case "switchTab":
          uni.switchTab(callback);
          break;
        default:
          uni.navigateTo(callback);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_badge = resolveEasycom(resolveDynamicComponent("uni-badge"), __easycom_1);
  const _component_switch = resolveComponent("switch");
  return openBlock(), createElementBlock("cell", { keepScrollPosition: $props.keepScrollPosition }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                createElementVNode("u-image", {
                  src: $props.thumb,
                  class: normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (openBlock(), createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : createCommentVNode("v-if", true)
            ])
          ]),
          renderSlot(_ctx.$slots, "body", {}, () => [
            createElementVNode(
              "view",
              {
                class: normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (openBlock(), createElementBlock(
                  "u-text",
                  {
                    key: 0,
                    class: normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : createCommentVNode("v-if", true),
                $props.note ? (openBlock(), createElementBlock(
                  "u-text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ]),
          renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (openBlock(), createElementBlock(
              "view",
              {
                key: 0,
                class: normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (openBlock(), createElementBlock(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true),
                $props.showBadge ? (openBlock(), createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : createCommentVNode("v-if", true),
                $props.showSwitch ? (openBlock(), createBlock(_component_switch, {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: $options.onSwitchChange
                }, null, 8, ["disabled", "checked", "onChange"])) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (openBlock(), createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : createCommentVNode("v-if", true)
    ], 14, ["hoverClass"])
  ], 8, ["keepScrollPosition"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
const _style_0$1 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
const _sfc_main$1 = {
  name: "uniList",
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    stackFromEnd: {
      type: Boolean,
      default: false
    },
    enableBackToTop: {
      type: [Boolean, String],
      default: false
    },
    scrollY: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    renderReverse: {
      type: Boolean,
      default: false
    }
  },
  // provide() {
  // 	return {
  // 		list: this
  // 	};
  // },
  created() {
    this.firstChildAppend = false;
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    },
    scroll(e) {
      this.$emit("scroll", e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", {
    bounce: false,
    scrollable: true,
    showScrollbar: "",
    renderReverse: $props.renderReverse,
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args)),
    class: normalizeClass(["uni-list", { "uni-list--border": $props.border }]),
    enableBackToTop: $props.enableBackToTop,
    loadmoreoffset: "15"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 42, ["renderReverse", "enableBackToTop"]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
const _style_0 = { "status-bar": { "": { "backgroundColor": "#ffffff" } }, "container": { "": { "flex": 1, "backgroundColor": "#f7f7f7" } }, "search-body": { "": { "backgroundColor": "#ffffff", "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "flex-center": { "": { "justifyContent": "center", "alignItems": "center" } }, "flex-row": { "": { "flexDirection": "row" } }, "uni-searchbar": { "": { "paddingLeft": 0 } }, "uni-searchbar__box": { "": { "borderWidth": 0 } }, "uni-input-placeholder": { "": { "fontSize": "28rpx" } }, "search-container": { "": { "height": 52, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "search-container-bar": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0 } }, "search-associative": { "": { "position": "absolute", "top": 52, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#ffffff", "marginTop": "10rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "search-icons": { "": { "paddingTop": "16rpx", "paddingRight": "16rpx", "paddingBottom": "16rpx", "paddingLeft": "16rpx" } }, "word-display": { "": { "fontSize": "26rpx", "color": "#666666" } }, "word-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "word-container_header": { "": { "height": "72rpx", "lineHeight": "72rpx", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "word-container_header-text": { "": { "color": "#3e3e3e", "fontSize": "30rpx", "fontWeight": "bold" } }, "word-container_body": { "": { "flexWrap": "wrap", "flexDirection": "row" } }, "word-container_body-text": { "": { "fontSize": "26rpx", "color": "#666666", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#f6f6f6", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": "20rpx", "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "borderRadius": "30rpx", "textAlign": "center" } }, "word-container_body-info": { "": { "flex": 1, "textAlign": "center", "fontSize": "26rpx", "color": "#808080", "marginTop": "20rpx" } } };
const searchLogDbName = "opendb-search-log";
const mallGoodsDbName = "food";
const associativeSearchField = "title,adderss";
const associativeField = "_id,title";
const localSearchListKey = "__local_search_history";
const arrUnique = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const curIndex = arr.indexOf(arr[i]);
    const lastIndex = arr.lastIndexOf(arr[i]);
    curIndex != lastIndex && arr.splice(lastIndex, 1);
  }
  return arr;
};
function debounce(fn, interval, isFirstAutoRun) {
  var _self = fn;
  var timer = null;
  var first = true;
  if (isFirstAutoRun) {
    _self();
  }
  return function() {
    var args = arguments;
    var _me = this;
    if (first) {
      first = false;
      _self.apply(_me, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 200);
  };
}
const _sfc_main = {
  data() {
    return {
      mallGoodsDbName,
      searchLogDbName,
      statusBarHeight: "0px",
      localSearchList: uni.getStorageSync(localSearchListKey),
      localSearchListDel: false,
      netHotListIsHide: false,
      searchText: "",
      iconColor: "#999999",
      associativeList: [],
      keyBoardPopup: false,
      hotWorld: "排骨",
      //	搜索热词，如果没有输入即回车，则搜索热词，但是不会加入搜索记录
      focus: true,
      //	是否自动聚焦
      speechEngine: "iFly"
      //	语音识别引擎 iFly 讯飞 baidu 百度
    };
  },
  created() {
    this.db = Bs.database();
    this.searchLogDb = this.db.collection(this.searchLogDbName);
    this.mallGoodsDb = this.db.collection(this.mallGoodsDbName);
    uni.onKeyboardHeightChange((res) => {
      this.keyBoardPopup = res.height !== 0;
    });
    this.searchText = getApp().globalData.searchText;
  },
  computed: {
    associativeShow() {
      return this.searchText && this.associativeList.length;
    }
  },
  onLoad() {
    this.statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
  },
  methods: {
    clear(res) {
      formatAppLog("log", "at pages/list/search/search.nvue:172", "res: ", res);
    },
    confirm(res) {
      this.search(res.value);
    },
    cancel(res) {
      uni.hideKeyboard();
      this.searchText = "";
      this.loadList();
    },
    search(value) {
      if (!value && !this.hotWorld) {
        return;
      }
      if (value) {
        if (this.searchText !== value) {
          this.searchText = value;
        }
        this.localSearchListManage(value);
        this.searchLogDbAdd(value);
      } else if (this.hotWorld) {
        this.searchText = this.hotWorld;
      }
      uni.hideKeyboard();
      this.loadList(this.searchText);
    },
    localSearchListManage(word) {
      let list = uni.getStorageSync(localSearchListKey);
      if (list.length) {
        this.localSearchList.unshift(word);
        arrUnique(this.localSearchList);
        if (this.localSearchList.length > 10) {
          this.localSearchList.pop();
        }
      } else {
        this.localSearchList = [word];
      }
      uni.setStorageSync(localSearchListKey, this.localSearchList);
    },
    LocalSearchListClear() {
      uni.showModal({
        content: "确认清空搜索历史吗",
        confirmText: "删除",
        confirmColor: "red",
        cancelColor: "#808080",
        success: (res) => {
          if (res.confirm) {
            this.localSearchListDel = false;
            this.localSearchList = [];
            uni.removeStorageSync(localSearchListKey);
          }
        }
      });
    },
    LocalSearchlistItemClick(word, index) {
      if (this.localSearchListDel) {
        this.localSearchList.splice(index, 1);
        uni.setStorageSync(localSearchListKey, this.localSearchList);
        if (!this.localSearchList.length) {
          this.localSearchListDel = false;
        }
        return;
      }
      this.search(word);
    },
    searchHotRefresh() {
      this.$refs.udb.refresh();
    },
    speech() {
      plus.speech.startRecognize({
        engine: this.speechEngine,
        punctuation: false,
        // 标点符号 
        timeout: 1e4
      }, (word) => {
        word = word instanceof Array ? word[0] : word;
        this.search(word);
      }, (err) => {
        formatAppLog("error", "at pages/list/search/search.nvue:254", "语音识别错误: ", err);
      });
    },
    searchLogDbAdd(value) {
      this.getDeviceId().then((device_id) => {
        this.searchLogDb.add({
          // user_id: device_id,
          device_id,
          content: value,
          create_date: Date.now()
        });
      });
    },
    getDeviceId() {
      return new Promise((resolve, reject) => {
        const uniId = uni.getStorageSync("uni_id");
        if (!uniId) {
          plus.device.getInfo({
            success: (deviceInfo) => {
              resolve(deviceInfo.uuid);
            },
            fail: () => {
              resolve(uni.getSystemInfoSync().system + "_" + Math.random().toString(36).substr(2));
            }
          });
        } else {
          resolve(uniId);
        }
      });
    },
    associativeClick(item) {
      formatAppLog("log", "at pages/list/search/search.nvue:297", "associativeClick: ", item);
      this.loadList(item.title);
    },
    loadList(text = "") {
      getApp().globalData.searchText = text;
      uni.switchTab({
        url: "/pages/list/list"
      });
    },
    backPage() {
      uni.navigateBack();
    }
  },
  watch: {
    searchText: debounce(function(value) {
      if (value) {
        this.mallGoodsDb.where({
          [associativeSearchField]: new RegExp(value, "gi")
        }).field(associativeField).get().then((res) => {
          this.associativeList = res.result.data;
        });
      } else {
        this.associativeList.length = 0;
        getApp().globalData.searchText = "";
      }
    }, 100)
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1$1);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("view", { class: "search-container" }, [
        createCommentVNode(" 搜索框 "),
        createElementVNode("view", { class: "search-container-bar" }, [
          createVNode(_component_uni_icons, {
            class: "search-icons",
            color: $data.iconColor,
            size: "22",
            type: "mic-filled",
            onClick: $options.speech
          }, null, 8, ["color", "onClick"]),
          createCommentVNode(` :cancelText="keyBoardPopup ? '取消' : '搜索'" `),
          createVNode(_component_uni_search_bar, {
            ref: "searchBar",
            style: { "flex": "1" },
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            focus: $data.focus,
            placeholder: $data.hotWorld,
            clearButton: "auto",
            cancelButton: "always",
            onClear: $options.clear,
            onConfirm: $options.confirm,
            onCancel: $options.cancel
          }, null, 8, ["modelValue", "focus", "placeholder", "onClear", "onConfirm", "onCancel"])
        ])
      ]),
      createElementVNode("view", { class: "search-body" }, [
        createCommentVNode(" 搜索历史 "),
        $data.localSearchList.length ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "word-container"
        }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("u-text", { class: "word-container_header-text" }, "搜索历史"),
            !$data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => $data.localSearchListDel = true),
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: "trash"
            }, null, 8, ["color"])) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "flex-center flex-row",
              style: { "font-weight": "500", "justify-content": "space-between" }
            }, [
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#666", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-right": "20rpx" },
                onClick: _cache[2] || (_cache[2] = (...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args))
              }, "全部删除"),
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#c0402b", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-left": "20rpx" },
                onClick: _cache[3] || (_cache[3] = ($event) => $data.localSearchListDel = false)
              }, "完成")
            ]))
          ]),
          createElementVNode("view", { class: "word-container_body" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.localSearchList, (word, index) => {
                return openBlock(), createElementBlock("view", {
                  class: "flex-center flex-row word-container_body-text",
                  key: index,
                  onClick: ($event) => $options.LocalSearchlistItemClick(word, index)
                }, [
                  (openBlock(), createElementBlock(
                    "u-text",
                    {
                      class: "word-display",
                      key: word
                    },
                    toDisplayString(word),
                    1
                    /* TEXT */
                  )),
                  $data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
                    key: 0,
                    size: "12",
                    type: "closeempty"
                  })) : createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true),
        createCommentVNode(" 搜索发现 "),
        createElementVNode("view", { class: "word-container" }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("view", { class: "flex-center flex-row" }, [
              createElementVNode("u-text", { class: "word-container_header-text" }, "搜索发现"),
              !$data.netHotListIsHide ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: "search-icons",
                color: $data.iconColor,
                size: "14",
                type: "reload",
                onClick: $options.searchHotRefresh
              }, null, 8, ["color", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            createVNode(_component_uni_icons, {
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: $data.netHotListIsHide ? "eye-slash" : "eye",
              onClick: _cache[4] || (_cache[4] = ($event) => $data.netHotListIsHide = !$data.netHotListIsHide)
            }, null, 8, ["color", "type"])
          ]),
          createVNode(
            _component_unicloud_db,
            {
              ref: "udb",
              field: "title,address",
              collection: "food",
              orderby: "create_date desc,count desc",
              "page-data": "replace",
              "page-size": 10
            },
            {
              default: withCtx(({ data, loading, error, options }) => [
                loading && !$data.netHotListIsHide ? (openBlock(), createElementBlock("u-text", {
                  key: 0,
                  class: "word-container_body-info"
                }, "正在加载...")) : (openBlock(), createElementBlock("view", {
                  key: 1,
                  class: "word-container_body"
                }, [
                  !$data.netHotListIsHide ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 0 },
                    [
                      error ? (openBlock(), createElementBlock(
                        "u-text",
                        {
                          key: 0,
                          class: "word-container_body-info"
                        },
                        toDisplayString(error.message),
                        1
                        /* TEXT */
                      )) : (openBlock(true), createElementBlock(
                        Fragment,
                        { key: 1 },
                        renderList(data, (word, index) => {
                          return openBlock(), createElementBlock("u-text", {
                            class: "word-container_body-text",
                            key: index,
                            onClick: ($event) => $options.search(word.content)
                          }, toDisplayString(word.content), 9, ["onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (openBlock(), createElementBlock("view", {
                    key: 1,
                    style: { "flex": "1" }
                  }, [
                    createElementVNode("u-text", { class: "word-container_body-info" }, "当前搜索发现已隐藏")
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
      ]),
      createCommentVNode(" 搜索联想 "),
      $options.associativeShow ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "search-associative"
      }, [
        createVNode(_component_uni_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.associativeList, (item, index) => {
                return openBlock(), createBlock(_component_uni_list_item, {
                  key: item._id,
                  ellipsis: 1,
                  title: item.name,
                  onClick: ($event) => $options.associativeClick(item),
                  "show-extra-icon": "",
                  clickable: "",
                  "extra-icon": { size: 18, color: $data.iconColor, type: "search" }
                }, null, 8, ["title", "onClick", "extra-icon"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/Users/asus/Desktop/很“厦”饭/pages/list/search/search.nvue"]]);
export {
  search as default
};
