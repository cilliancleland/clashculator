<template>
<div>
    <h3>Deployment fatigue table - foot (mounted)</h3>
    <table>
        <tr>
            <th class="main">
            Action tokens
            </th>
            <th>
            1
            </th>
            <th>
            2
            </th>
            <th>
            3
            </th>
            <th>
            4
            </th>
            <th>
            5
            </th>
            <th>
            6
            </th>
        </tr>
        <tr class="alt">
            <th>
            Save 6+
            </th>
            <td>0
            </td>
            <td>0
            </td>
            <td>
            0
            </td>
            <td>
            0
            </td>
            <td>
            1(0)
            </td>
            <td>
            1
            </td>
        </tr>
        <tr>
            <th>
            Save 4+
            </th>
            <td>
            0
            </td>
            <td>
            0
            </td>
            <td>
            1(0)
            </td>
            <td>
            1
            </td>
            <td>
            2
            </td>
            <td>
            2
            </td>
        </tr>
        <tr class="alt">
            <th>
            Save 3+
            </th>
            <td>
            0
            </td>
            <td>
            0
            </td>
            <td>
            1
            </td>
            <td>
            2
            </td>
            <td>
            3
            </td>
            <td>
            4
            </td>
        </tr>
    </table>
</div>
</template>
<script>
export default {
  name: 'DeploymentTable',
};
</script>
<style scoped lang="scss">
    table {
        width: 100%;
        display: none;
    }
    th {
        width: 12.5%;
        border-bottom: solid black 1px;
    }
    td {
        text-align: center;
        border-bottom: solid black 1px;
    }
    @media print {
        table {
            display: table;
        }
    }
</style>
