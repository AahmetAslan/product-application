<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>ProductApplication</strong> byAhmet
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger" style="width: 75px"> {{ getTradeResult.purchase | currency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success" style="width: 75px"> {{ getTradeResult.sale | currency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary" style="width: 75px"> {{ getTradeResult.balance | currency }}</span>
    </span>
  </nav>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    computed : mapGetters(["getTradeResult"])
  }
</script>
