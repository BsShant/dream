import React, { useState } from 'react'
// import { LineGraphType } from '../../@types/Graph';
import { LineData } from '../../Assets/Data/GraphData';
import { Area } from '@ant-design/charts';

const LineGraph = () => {
    const [data, setData] = useState(LineData);

    //   useEffect(() => {
    //     asyncFetch();
    //   }, []);


    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    }

    return (
            <Area {...config} />
    )
}

export default LineGraph