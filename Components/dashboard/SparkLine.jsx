import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export function SparkLine (props){
    
        // const { id, height, width, color, data, type, currentColor } = this.props;

        return (
            <SparklineComponent
                id=''
                height='80px'
                width='250px'
                lineWidth={1}
                valueType="Numeric"
                fill='blue'
                border={{ color: 'blue', width: 2 }}
                tooltipSettings={{
                    visible: true,
                    // eslint-disable-next-line no-template-curly-in-string
                    format: '${x} : data ${yval}',
                    trackLineSettings: {
                        visible: true,
                    },
                }}
                markerSettings={{ visible: ['All'], size: 2.5, fill: 'blue' }}
                // dataSource={SparklineAreaData}
                xName="x"
                yName="yval"
                type='line'
            >
                <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
        );
    }

