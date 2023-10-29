<template>
  <footer class="py-5 bg-dark text-white">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 px-5 text-white" >
        <FooterNavigation :footerNavigation="footerNavigation" />
      </div>
      <div class="col-6 col-md-2 mb-3">
        <FooterClient :footerclient="footerclient" />
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden"
              >Email address</label
            >
            <input
              id="newsletter1"
              type="text"
              class="form-control"
              placeholder="Email address" />
            <button class="btn btn-outline-success" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
      class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#telegram"></use></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#instagram"></use></svg
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { menuClient, menuList } from "../data/Links.js";
import FooterNavigation from "./Footer/FooterNavigation.vue";
import FooterClient from "./Footer/FooterClient.vue";

export default {
  data() {
    return {
      footerNavigation: menuList,
      footerclient: menuClient,
    };
  },
  components: {
    FooterNavigation,
    FooterClient,
  },
};
</script>

<style lang="scss" scoped></style>
