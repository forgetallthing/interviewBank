<script setup>
import { reactive, ref } from "vue";

document.getElementsByTagName("body")[0].className = "aside-open";

const toggle = () => {
  const cName = document.getElementsByTagName("body")[0].className;
  if (cName === "aside-open") {
    document.getElementsByTagName("body")[0].className = "aside-close";
  } else {
    document.getElementsByTagName("body")[0].className = "aside-open";
  }
};

const handleNodeClick = (data) => {
  console.log(data);
};

const data = [
  {
    label: "css",
    children: [
      {
        label: "居中",
        children: [
          {
            label: "垂直居中",
          },
          {
            label: "水平居中",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];

const defaultProps = {
  children: "children",
  label: "label",
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
      "<p>没有</p><br/><pre class='language-markup'><code>let me = '没喝'</code></pre>",
  });
};

const editor = 12;
const dialogTableVisible = ref(false);
</script>

<template>
  <div class="el-container">
    <div class="el-aside">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="el-main">
      <div class="sidebar-toggle" @click="toggle"></div>
      <div class="tools">
        <el-button type="primary" @click="dialogTableVisible = true"
          >添加试题</el-button
        >
      </div>
      <ul class="list" v-infinite-scroll="load" style="overflow: auto">
        <li v-for="item in list" :key="item.level" class="list-item">
          <el-card class="box-card">
            <span v-html="item.question"></span>
            <div></div>
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
  <el-dialog v-model="dialogTableVisible" title="编辑">
    <TEditor ref="editor" v-model="editor" />
  </el-dialog>
</template>

<style>
@import url("./app.css");
</style>
