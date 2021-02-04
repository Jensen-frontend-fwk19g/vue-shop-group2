<template>
  <div class="dark-mode-toggle">
    <input
      @change="toggleDark"
      id="switch"
      type="checkbox"
      name="theme"
      v-model="darkMode"
    />
    <label for="switch">Toggle</label>
  </div>
</template>

<script>
export default {
  name: "DarkMode",
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDark() {
      //this.darkMode = !this.darkMode
      if (!this.darkMode) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "dark-mode");
      }
    },
  },
};
</script>
  
<style>
html {
  transition: color 600ms, background-color 600ms;

  background-color: rgb(195, 216, 243);
}

html[data-theme="dark-mode"] {
  filter: invert(100%) hue-rotate(180deg);
}

html[data-theme="dark-mode"] img {
  filter: invert(100%) hue-rotate(180deg);
}
html[data-theme="dark-mode"] .bag {
  filter: invert(0%) hue-rotate(0deg);
}

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 52px;
  height: 27px;
  background: grey;
  float: right;
  border-radius: 100px;
  position: relative;
}

label::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  filter: invert(100%) hue-rotate(180deg);
}

input:checked + label::after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
  filter: invert(100%) hue-rotate(180deg);
}

label:active:after {
  width: 45px;
}
</style>