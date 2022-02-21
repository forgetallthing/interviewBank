<script setup>
import { reactive, ref, onMounted } from "vue";
import { Fold } from "@element-plus/icons-vue";

if (document.documentElement.clientWidth > 500) {
  document.getElementsByTagName("body")[0].className = "aside-open";
} else {
  document.getElementsByTagName("body")[0].className = "aside-close";
}

const toggle = () => {
  const cName = document.getElementsByTagName("body")[0].className;
  if (cName === "aside-open") {
    document.getElementsByTagName("body")[0].className = "aside-close";
  } else {
    document.getElementsByTagName("body")[0].className = "aside-open";
  }
};

const handleNodeClick = data => {
  console.log(data);
};

const dataClass = [
  {
    label: "1-1",
    code: "1-1",
    father: "1"
  },
  {
    label: "1",
    code: "1",
    father: ""
  },
  {
    label: "1-2",
    code: "1-2",
    father: "1"
  },
  {
    label: "1-1-1",
    code: "1-1-1",
    father: "1-1"
  },
  {
    label: "2",
    code: "2",
    father: ""
  }
];
const data = reactive([]);
const genClass = () => {
  const fatherRecord = {};
  for (let i = 0; i < dataClass.length; i++) {
    const element = dataClass[i];
    const curEle = { label: element.label, code: element.code, children: [] };
    if (element.father) {
      let father = fatherRecord[element.father];
      if (father) {
        father.children.push(curEle);
      } else {
        fatherRecord[element.father] = {
          code: element.father,
          children: [curEle]
        };
      }
      fatherRecord[element.code] = curEle;
    } else {
      if (fatherRecord[element.code]) {
        fatherRecord[element.code].label = element.label;
      } else {
        fatherRecord[element.code] = curEle;
      }
      data.push(fatherRecord[element.code]);
    }
  }
};

onMounted(() => {
  genClass();
});

const defaultProps = {
  children: "children",
  label: "label"
};

const mylist = [];
const list = reactive([]);
console.log(list);
const load = () => {
  console.log("list");
  list.push({
    question: "<p>问你是不是喝多了</p>",
    class: "DOM",
    level: 1,
    answer:
      "<p>没有</p><br/><pre class='language-markup'><code>let me = '没喝'</code></pre>"
  });
};

const dialogTableVisible = ref(false);
const form = reactive({
  class: "",
  weight: "",
  sort: "",
  stem: "",
  answer: ""
});
</script>

<template>
  <div class="el-container">
    <div class="el-aside">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    </div>
    <div class="el-main">
      <div class="sidebar-toggle" @click="toggle">
        <el-icon :size="26" color="#989494">
          <fold />
        </el-icon>
      </div>
      <div class="tools">
        <el-space wrap>
          <el-button
            type="primary"
            @click="dialogTableVisible = true"
            v-if="!dialogTableVisible"
          >添加试题</el-button>
          <el-button type="primary" @click="dialogTableVisible = false" v-else>关闭</el-button>
          <el-button type="primary" v-show="dialogTableVisible">删除</el-button>
          <el-button type="primary" v-show="dialogTableVisible">保存</el-button>
        </el-space>
      </div>
      <div class="formEditor" v-show="dialogTableVisible">
        <el-form-item label="题干">
          <TEditor ref="editor" v-model="form.stem" />
        </el-form-item>
        <el-form-item label="答案">
          <TEditor ref="editor" v-model="form.answer" />
        </el-form-item>
        <el-form ref="formRef" :model="form">
          <el-form-item label="分类">
            <el-select v-model="form.class" placeholder="选择分类">
              <el-option
                v-for="item in dataClass"
                :label="item.label"
                :value="item.code"
                :key="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="权重">
            <el-input v-model="form.weight"></el-input>
          </el-form-item>
          <el-form-item label="排序">
            <el-input v-model="form.sort"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <ul class="list" v-infinite-scroll="load" style="overflow: auto" v-show="!dialogTableVisible">
        <li v-for="item in list" :key="item.level" class="list-item">
          <el-card class="box-card">
            <span v-html="item.question"></span>
            <el-collapse>
              <el-collapse-item title="答案" name="1">
                <span v-html="item.answer"></span>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@import url("./app.css");
</style>
