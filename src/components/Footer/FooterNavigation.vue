<template>
    <h5>Navigation</h5>
    <ul class="nav flex-column ">
      <li
        v-for="{ i, name, path } in footerNavigation"
        :key="i"
        class="nav-item mb-2 ">
        <router-link :to="path" class="nav-link p-0 text-white ">{{
          name
        }}</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    footerNavigation: {
      type: Array,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped></style>
