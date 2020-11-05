Vue.component('search-input', {
    props: ['value'],
    template: `
    <input class="search-field" type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Поиск"
    >
  `
})