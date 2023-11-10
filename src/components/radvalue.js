import React from 'react';
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
import Data from '../utils/data.json';

const radValue = ()=>{
    return(
            <div>
                <div className={Data.radValue.className}>
                    {Data.radValue?.children?.map((header, headerIndex) => (
                        <div key={headerIndex} className={header?.className} id={header?.id} data-cmp-data-layer={header?.['data-cmp-data-layer']}>
                            {header?.children?.map((line, lineIndex) => (
                                <div key={lineIndex} className={line?.className}>
                                    {line?.children?.map((wrapper, wrapperIndex) => (
                                        <div key={wrapperIndex} className={wrapper?.className}>
                                            {wrapper?.children?.map((svg, svgIndex) => (
                                                <svg key={svgIndex} className={svg?.className} role={svg?.role} xmlns={svg?.xmlns}>
                                                    {svg?.title && <title>{svg?.title}</title>}
                                                    {svg?.children?.map((path, pathIndex) => (
                                                        <path key={pathIndex} {...path} style={{ fill: 'currentColor' }} />
                                                    ))}
                                                </svg>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                    <h3 className="rad-360-value-title__sub-header">{Data.radValue?.children[1]?.children[0]}</h3>
                </div>
            </div>
    )
}

export default radValue;
