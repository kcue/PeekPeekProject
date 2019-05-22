<template>
  <div>
    <div style= "margin-right: 20%" v-bind:key="item.id" v-for="item in buttonList">
    <button type="button" class="blue-btns">{{ item.label }}</button>
    </div>
      <!--<div-->
        <!--style="margin-right: 20%"-->
        <!--v-bind:key="item.id"-->
        <!--v-for="item in buttonList">-->
        <!--<button class="blue-btns" :id="item.id" type="button">-->
          <!--{{ item.label }}-->
        <!--</button>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
export default {
  name: "Buttons",
  props: ["buttonList"]
};
</script>

<style>
.blue-btns {
  /*pointer-events: auto;*/
  padding: 12px;
  /*user-select: none;*/
  background-color: rgb(23, 164, 169);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.18) 0 2px 15px;
  border: 0 none rgb(160, 160, 160);
  /*line-height: 35px;*/
  /*overflow-wrap: break-word;*/
  white-space: nowrap;
  display: inline;
  font-family: "Libre Franklin", sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: normal;
  color: rgb(255, 255, 255);
  cursor: pointer;
  overflow: visible;
  text-shadow: none;
  width: 100%;
  height: 100%;
}
</style>
