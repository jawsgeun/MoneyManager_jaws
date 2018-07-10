import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';
const localDatas = [
];
class Statistics extends Component {
    constructor(props){
        super(props);
        Object.keys(localStorage).forEach( v =>{
            let data = {};
            data.name = v.substring(5);
            data.수입 =0;
            data.지출 =0;
            console.log(localStorage.getItem(v))
            let tmpData = JSON.parse(localStorage.getItem(v));
            tmpData.forEach(vv =>{
                if(vv.isIncome){
                    data.수입 += (vv.amount*1)
                }else{
                    data.지출 += (vv.amount*1)
                }
            })
            console.log(JSON.stringify(data));
            localDatas.push(data)
        })
    }
    render() {
        return (
            <BarChart width={600} height={300} data={localDatas}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="수입" stackId="a" fill="#8884d8" />
       <Bar dataKey="지출" stackId="a" fill="#82ca9d" />
      </BarChart>
        );
    }
}
export default Statistics;