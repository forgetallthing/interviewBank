<script setup>
import { reactive, ref, onMounted } from "vue";
import { Fold } from "@element-plus/icons-vue";
import { getQuestion, saveQuestion, delQuestion } from "./api/api";
import { ElMessageBox, ElMessage } from "element-plus";

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

const dataClass = [
  {
    label: "1-1",
    code: "1-1",
    father: "1",
  },
  {
    label: "1",
    code: "1",
    father: "",
  },
  {
    label: "1-2",
    code: "1-2",
    father: "1",
  },
  {
    label: "1-1-1",
    code: "1-1-1",
    father: "1-1",
  },
  {
    label: "2",
    code: "2",
    father: "",
  },
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
          children: [curEle],
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
  label: "label",
};

const list = reactive([]);
const loading = ref(false);
const noMore = ref(false);
const page = ref(0);

const load = async () => {
  //避免首次发多次请求
  if (loading.value) return;

  loading.value = true;
  const res = await getQuestion({
    page: page.value++,
    count: 20,
    class: null,
    search: "",
  });
  console.log(res);

  loading.value = false;
  if (res.list.length > 0) {
    list.push(...res.list);
  } else {
    noMore.value = true;
  }
};

const dialogTableVisible = ref(false);
const form = reactive({
  class: "",
  level: 0,
  sort: "",
  question: "",
  answer: "",
  code: "",
});

const editType = ref("add");
const add = () => {
  editType.value = "add";
  dialogTableVisible.value = true;
};

const update = (item) => {
  editType.value = "update";
  dialogTableVisible.value = true;
  form.class = item.class;
  form.level = item.level;
  form.sort = item.sort;
  form.question = item.question;
  form.answer = item.answer;
  form.code = item.code;
};

const onSubmit = async () => {
  console.log(form);
  // const res = await saveQuestion(form);
  // if (res.state === "ok") {
  //   ElMessage({
  //     type: "success",
  //     message: "保存成功",
  //   });
  // } else {
  //   ElMessage({
  //     type: "error",
  //     message: "保存失败",
  //   });
  // }
};

const onDelete = () => {
  ElMessageBox.confirm("确认删除?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  }).then(async () => {
    const res = await delQuestion({
      code: form.code,
    });
    if (res.state === "ok") {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    } else {
      ElMessage({
        type: "error",
        message: "删除失败",
      });
    }
  });
};

const handleNodeClick = (data) => {
  console.log(data);
  const res = await getQuestion({
    page: 0,
    count: 20,
    class: null,
    search: "",
  });
  console.log(res);

};
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
      <div class="sidebar-toggle" @click="toggle">
        <el-icon :size="26" color="#989494">
          <fold />
        </el-icon>
      </div>
      <div class="tools">
        <el-space wrap>
          <el-button type="primary" @click="add()" v-if="!dialogTableVisible"
            >添加试题</el-button
          >
          <el-button type="primary" @click="dialogTableVisible = false" v-else
            >关闭</el-button
          >
          <el-button
            type="primary"
            v-if="editType === 'update' && dialogTableVisible"
            @click="onDelete()"
            >删除</el-button
          >
          <el-button
            type="primary"
            v-show="dialogTableVisible"
            @click="onSubmit"
            >保存</el-button
          >
        </el-space>
      </div>
      <div class="formEditor" v-if="dialogTableVisible">
        <el-form ref="formRef" :model="form">
          <el-form-item label="题干">
            <TEditor ref="editor" v-model="form.question" />
          </el-form-item>
          <el-form-item label="答案">
            <TEditor ref="editor" v-model="form.answer" />
          </el-form-item>
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
            <el-rate v-model="form.level"></el-rate>
          </el-form-item>
          <el-form-item label="排序">
            <el-input v-model="form.sort"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <ul
        class="list"
        v-infinite-scroll="load"
        style="overflow: auto"
        v-show="!dialogTableVisible"
        infinite-scroll-disabled="noMore"
      >
        <li v-for="item in list" :key="item.level" class="list-item">
          <el-card class="box-card">
            <span v-html="item.question"></span>
            <div>
              <el-button type="primary" @click="update(item)">编辑</el-button>
            </div>
            <el-collapse>
              <el-collapse-item title="答案" name="1">
                <span v-html="item.answer"></span>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </li>
        <li>
          <p class="tips" v-if="loading">Loading...</p>
          <p class="tips" v-if="noMore">No more</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@import url("./app.css");
</style>
