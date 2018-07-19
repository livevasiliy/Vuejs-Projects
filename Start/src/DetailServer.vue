<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ statusServer }}</p>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      statusServer: "Server Details are currently not updated"
    };
  }
};
</script>