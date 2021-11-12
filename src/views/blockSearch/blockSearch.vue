<template style="background-color:red">
<div>
<div id="find_input">
    <input class="input is-success" type="text" placeholder="Please input blockIndex" style="width:350px; margin-right:10px;">
    <button class="button is-success is-light">查找</button>
</div>
<div id="find_table">
    <table class="table" style="width:500px; float:left; margin-right:100px;">
        <thead>
            <tr>
            <th><abbr title="Position">区块索引</abbr></th>
            <th>区块根哈希</th>
            </tr>
        </thead>
        <tfoot>
            
        </tfoot>
        <tbody>
            <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            </tr>
        </tbody>
    </table>
</div>
<div id="block_head">
    <table class="table" style="width:800px; ">
        <thead>
            <tr>
                <th><abbr title="Position">交易ID</abbr></th>
                <th>交易时间</th>
                <th>交易金额</th>            
                <th>交易内容</th>
            </tr>
        </thead>
        <tfoot>
            
        </tfoot>
        <tbody>
            <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            </tr>
        </tbody>
    </table>
</div>
</div>

</template>
<style  src='@/styles/bulma.css'  scoped></style>
<style lang="scss" scoped>
.is-success{
    width:80px;
}
.table {
    margin-top:50px;
    width: 500px;
}
th {
    height: 30px;
}
</style>
