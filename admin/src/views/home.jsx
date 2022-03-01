import React from "react";
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
// 引入组件
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
} from 'echarts/components';

// 引入图表类型
import {
    PieChart,
    LineChart,
    BarChart,
} from 'echarts/charts';

// 引入渲染类型（canvas,svg）
import {
    CanvasRenderer,
    // SVGRenderer
} from 'echarts/renderers';

echarts.use(
    [
        TitleComponent, TooltipComponent, LegendComponent, GridComponent,
        PieChart, LineChart,BarChart,
        CanvasRenderer
    ]
);
function Home(props) {
    const chart = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(document.querySelector('.charts'))
        let option = {
            title: {
                text: '彩讯开发员工概览',
                subtext: '前端开发',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            xAxis: {
                name:'星期',
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                name:"一天代码总和",
                type: 'value'
            },
            series: [
                {
                    name: '一天摸鱼比例',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 90, name: '法明' },
                        { value: 80, name: '利生' },
                        { value: 50, name: '伟金' },
                        { value: 50, name: '涌鑫' },
                        { value: 10, name: '健明' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },

                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    // smooth: true
                }
            ]
        }
        myChart.setOption(option);
    }, [])
    return (
        <div className="Home">
            <h1>Home页面</h1>
            <div className="charts" ref={chart} style={{ height: 300 }}></div>
        </div>
    )
}
export default Home