<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#Home">
        <img src="../assets/market.svg" alt="Market" />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#About"
              >About</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Catalog
            </a>
            <ul class="dropdown-menu">
              <li v-for="{ id, name, path } in CatalogLinks" :key="id">
                <router-link class="dropdown-item" :to="path">{{
                  name
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="justify-content-end d-flex">
          <button type="button" class="btn btn-outline-success">
            <i class="bi bi-person"></i> Login
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { catalogLinks } from "../data/Catalogs.js";
export default {
  data() {
    return {
      CatalogLinks: catalogLinks,
    };
  },
};
</script>
<style scoped></style>
