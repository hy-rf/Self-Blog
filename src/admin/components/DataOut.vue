<script setup lang="ts">
import * as echarts from 'echarts'
setTimeout(() => {
    var siteHits = echarts.init(document.getElementById('data-out'))
    siteHits.setOption({
        title: {
            text: 'Data Out'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
            {
                name: 'data-out',
                type: 'line',
                data: [0, 20, 36, 10, 10, 20]
            }
        ]
    });
}, 100);
</script>

<template>
    <div>
        <div id="data-out" style="width: 300px;height:200px;"></div>
    </div>
</template>

<style lang="css" scoped></style>