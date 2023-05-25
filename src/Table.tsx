import { useEffect, useState } from 'react';
import './Table.css';
import { FlavanoidsAnalysisObject, GammaAnalysisObject } from './types';

type PropsType = {
    heading: string,
    classList: string[],
    list :  string[][]
}

function Table({ heading, classList, list }: PropsType) {
    const [rows,setRows] = useState<string[][]>([])

    useEffect(()=>{
        setRows(list)
    },[heading, classList, list])
    
    return (<>
        <div className="container">
            <h2>{heading}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {classList.map((item)=><th>{`Alcohol ${item}`}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item:string[])=><tr>
                        {item.map((element:string)=> <td>{element}</td>)}
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </>)
}

export default Table;