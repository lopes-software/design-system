import TableItems from '@/components/TableItems/TableItems.vue'

export default {
  title: 'TableItems',
  component: TableItems
}

export const itemsUsingProps = () => {
  const fields = '["Date", "Status"]'
  const items = '[{"date": "10/10/2022", "status": "Approved"}, {"date": "10/10/2022", "status": "Rejected"}]'
  return {
    components: { TableItems },
    template: `<table-items :fields='${fields}' :items='${items}'></table-items>`
  }
}

export const tableWithRowNumber = () => {
  const fields = '["Date", "Status"]'
  const items = '[{"date": "10/10/2022", "status": "Approved"}, {"date": "10/10/2022", "status": "Rejected"}]'
  return {
    components: { TableItems },
    template: `<table-items :fields='${fields}' :items='${items}' :hasRowNumber="true" ></table-items>`
  }
}

export const itemsUsingSlots = () => {
  const fields = '["","Date", "Status"]'
  const items = '[{"date": "10/10/2022", "status": "Approved"}, {"date": "10/10/2022", "status": "Rejected"}]'
  return {
    components: { TableItems },
    template: `
      <table-items :fields='${fields}' :items='${items}'>
        <slot slot-scope="{ row }">
        <td> Item: </td>
        <td>{{row.date}} </td>
        <td>{{row.status}} </td>
      </slot>
      </table-items>`
  }
}
