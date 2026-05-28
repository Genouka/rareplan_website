<template>
  <div class="download-panel">
    <div class="download-agreement">
      <input type="checkbox" id="agreement1" v-model="agreed" />
      <label for="agreement1">
        我已阅读，完全理解并同意该应用的用户协议、隐私政策、免责声明以及该网站的<a href="/eula/">最终用户许可协议</a>和<a href="/privacy/">隐私条款</a>
      </label>
    </div>
    <div v-for="(ver, index) in appData?.list || []" :key="index" class="version-item">
      <div class="version-header" @click="toggle(index)">
        <span class="ver">{{ ver.ver }}</span>
        <span v-if="ver.date" class="date">{{ ver.date }}</span>
        <span class="arrow" :class="{ open: openIndex === index }">▼</span>
      </div>
      <div class="version-body" :class="{ open: openIndex === index }">
        <div v-if="ver.content"><pre>{{ ver.content }}</pre></div>
        <p v-if="ver.date"><b>本版本发布于：{{ ver.date }}</b></p>
        <template v-if="ver.download && ver.download.length > 0">
          <p>注意：下载后即意味着你已阅读，完全理解并同意本页面政策（如果有）、免责声明（如果有）和隐私条款。</p>
          <ul class="download-list">
            <li v-for="(d, di) in ver.download" :key="di">
              <a :href="handleDownload(d.url)" @click.prevent="onDownload(d.url)">
                📥 {{ d.name }}
              </a>
            </li>
          </ul>
        </template>
        <p v-else-if="ver.download !== undefined && ver.download.length === 0">无下载链接。</p>
        <template v-if="ver.links && ver.links.length > 0">
          <ul class="download-list">
            <li v-for="(l, li) in ver.links" :key="li">
              <a :href="l.url">{{ l.name }}</a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
})

const appsData = {
  rarebox: {
    name: 'rarebox',
    list: [
      {
        ver: '3.3',
        content: '- 支持华为手表安装\n- 修复很多已知问题\n- 修改部分UI界面',
        date: '2024-05-02',
        download: [
          { name: '官方源', url: 'https://github.com/Genouka/RareBox/releases/download/v3.3/RareBox3.3.apk' },
        ],
      },
      {
        ver: '3.0 Final',
        content: '- 修复含空格文件名无法安装的问题\n- 修改部分UI界面\n- 增加帮助文档\n\nV2签名特供版是为部分不支持v3签名应用的手表特供的，如无必要请勿使用，功能与原版相同。\n\n(2023-12-13更新特供版,2023-12-22删除特供版）',
        date: '2023-12-16',
        download: [],
      },
      {
        ver: '2.6.0暑假版',
        content: '修复一些bug，给其他应用准备了接口，优化了UI。',
        date: '2023-07-18',
        download: [],
      },
      {
        ver: '2.5.1儿童节版',
        content: '修复了一些bug',
        date: '2023-06-03',
        download: [],
      },
    ],
  },
  rareboxdesktop: {
    name: 'rareboxdesktop',
    list: [
      {
        ver: '0.5.1',
        content: '公测版本',
        date: '2024-08-14',
        download: [
          { name: '官方源', url: 'https://www.123pan.com/s/WxHjVv-VHb0A.html' },
        ],
      },
    ],
  },
  rarebrowser: {
    name: 'rarebrowser',
    list: [
      {
        ver: '后续版本',
        content: '后续版本将不再提供免费下载',
        links: [
          { name: '购买链接', url: 'https://verity.genouka.top/info/' },
        ],
      },
      {
        ver: '2.9.1.2',
        date: '2024-5-30',
        content: '修复大批bug',
        download: [
          { name: '官方源', url: 'https://ardrive.net/td8Sdff4AD0jMsr8-QS82kK6blubzpmGVG4GamUbuFU' },
        ],
      },
      {
        ver: '2.9.0',
        content: '特供版专用于华为儿童手表，无需重新签名。\n每次进入有三个小心盗版的弹窗。\n本栏下载为免费版。\n\n务必记得校验！\n特供版：\nmd5:\n41fea20267443549c012572c88905444',
        date: '2024-1-6',
        download: [],
      },
      {
        ver: '2.8.3',
        content: '请用最新版！\n\n特供版重新提供，专用于华为儿童手表，无需重新签名。\n每次进入有三个小心盗版的弹窗。\n非常感谢꧁꫞𝚊𝚋𝚢𝚜𝚜꫞꧂的测试。\n\n本栏下载为免费版。\n\n务必记得校验！\n特供版：\nmd5:\n815759be1b6b545eb5ebe067b255aca8\nSHA-1:\nd23893db1e736e3245243a21073766ab1ca93ea6',
        date: '2023-12-31',
        download: [],
      },
      {
        ver: '2.8.0',
        content: '* 隐藏未实装功能的按钮\n* 渲染优化\n* 实装部分功能\n* 修复已知bug\n* 历史管理功能\n* 视频解析功能添加免责声明，详细请查看对应页面。\n* 添加极其详细的帮助文档\n* 添加退出浏览器按钮\n* 优化时间显示\n* 添加视频解析调用凉腕播放器的支持，以下是授权文本：\n  凉腕播放器现于2023年11月24日同意RarePro浏览器接入播放，请勿播放违规内容，遵守绿色网络文纪（保留所有权益）。——2023年11月24日 凉生初霜',
        date: '2023-11-24',
        download: [],
      },
      {
        ver: '2.7.1',
        content: '适配更多手表、已知问题修复，目前仅限收费版',
        date: '2023-10-04',
        download: [],
      },
      {
        ver: '2.6',
        content: '视频解析和播放，目前仅限收费版',
        date: '2023-09-04',
        download: [],
      },
      {
        ver: '2.5.1',
        content: '添加收藏功能，自本版本起最低Android5.1',
        date: '2023-08-18',
        download: [],
      },
      {
        ver: '1.2',
        content: '经典版，最低Android4.4',
        date: '2023-04-15',
        download: [
          { name: '官方源', url: 'http://mobvoi-search-public.mobvoi.com/mobvoi-apk/awch/com.yuanwow.rarebrowser_4_wear_armeabi-v7a_61fdf4b5c7f742f0d4b0fe360d63715a.apk' },
        ],
      },
    ],
  },
  rarestore: {
    name: 'rarestore',
    list: [
      {
        ver: '1.2',
        content: '最新版本',
        date: '2023-12-31',
        download: [
          { name: '官方源', url: '/store.apk' },
        ],
      },
    ],
  },
}

const appData = computed(() => appsData[props.name] || null)
const openIndex = ref(null)
const agreed = ref(false)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

function handleDownload(url) {
  return url
}

function onDownload(url) {
  if (!agreed.value) {
    alert('请先勾选下载列表上方复选框同意相关内容。')
    const checkbox = document.getElementById('agreement1')
    if (checkbox) {
      checkbox.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }
  window.open(url, '_blank')
}
</script>
