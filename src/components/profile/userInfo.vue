<script setup>
import {ref} from "vue";
import Avatar from "@/components/profile/userInfo/avatar.vue";
import UserShow from "@/components/profile/userInfo/userShow.vue";
import UserForm from "@/components/profile/userInfo/userForm.vue";

const edit = ref(true);
function editInfo() {
  edit.value = !edit.value;
}
</script>

<template>
  <div class="userInfo">
    <avatar></avatar>

    <div class="user">
      <user-show v-if="edit"  @edit-info="editInfo"/>
      <user-form v-else @edit-info="editInfo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.userInfo {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    margin-bottom: 10%;
  }
}
</style>