<script setup lang="ts">
import { init, setOption } from 'echarts'
setTimeout(() => {
    var siteHits = echarts.init(document.getElementById('site-hits'))
    siteHits.setOption({
        title: {
            text: 'Site Hits'
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
                name: 'hits',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    });
}, 100);

</script>

<template>
    <div id="site-hits" style="width: 300px;height:200px;"></div>
</template>

<style lang="css" scoped></style>