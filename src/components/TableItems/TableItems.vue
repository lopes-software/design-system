<template>
  <table class="table-items">
    <thead>
      <th v-if="hasRowNumber">#</th>
      <th
        v-for="field in fields"
        :key="field"
      >
        {{ field }}
      </th>
    </thead>
    <tbody>
      <template v-for="(item, index) in items">
        <tr :key="index" data-test="table-items-row">
          <td v-if="hasRowNumber" data-test="table-items-number-row">{{ index + 1 }}</td>
          <slot :row="item">
            <td
              v-for="(field, index) in Object.keys(item)"
              :key="index"
              :data-test="`table-items-column-${field}`"
            >
            {{  item[field] }}
            </td>
          </slot>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      require: true
    },
    items: {
      type: Array,
      require: true
    },
    hasRowNumber: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/constants.scss';

.table-items {
  background-color: #fff;
  width: 95%;
  padding: 20px;

  th {
    font-weight: 400;
  }

  td {
    font-weight: 300;
  }

  th, td {
    text-align: center;
    padding: 15px;
  }

  .item__link {
    color: $secondary-color;
    text-decoration: none;
  }

  .item__link:hover {
    color: $secondary-dark-color;
  }
}

</style>
