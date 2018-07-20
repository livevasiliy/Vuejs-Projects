<template>
    <div class="container">
        <app-header :maxQuotes="maxQuetes" :countQuotes="quetes.length"></app-header>
        <app-new-quote @quoteAdding="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quetes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
export default {
  data: function() {
    return {
      quetes: ["Just a quetes to see something"],
      maxQuetes: 10
    };
  },
  methods: {
    newQuote: function(quete) {
      if (this.quetes.length >= this.maxQuetes) {
        return alert("Please delete quotes first");
      }
      this.quetes.push(quete);
    },
    deleteQuote: function(index) {
      this.quetes.splice(index, 1);
    }
  },
  components: {
    appHeader: Header,
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
};
</script>

<style>
</style>
