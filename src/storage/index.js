// 存值 取值 删除值 的方法等

// Storage 封装

const STORAGE_KEY = "mall";
export default {
  // 存储值
  setItem(key, value, module_name) {
    let val = this.getStorage();
    val[key] = value;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
  // 获取某一个模块下面的属性
  getItem(key, module_name) {
    if(module_name) {
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear() {

  }
}