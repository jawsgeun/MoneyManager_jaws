import React, { Component } from 'react';
import {BarChart, Bar,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';
class Statistics extends Component {
    constructor(props){
        super(props);
        const localDatas = [];
        const exDatas = [];
        Object.keys(localStorage).forEach( v =>{
            let data = {};
            let exData = {};
            data.name = v.substring(5);
            exData.name = v.substring(5);
            data.수입 =0;
            data.지출 =0;
            exData.지출 =0;
            console.log(localStorage.getItem(v))
            let tmpData = JSON.parse(localStorage.getItem(v));
            tmpData.forEach(vv =>{
                if(vv.isIncome){
                    data.수입 += (vv.amount*1)
                }else{
                    data.지출 += (vv.amount*1)
                    exData.지출 += (vv.amount*1)
                }
            })
            // console.log(JSON.stringify(data));
            if(data.수입 !==0||data.지출!==0){localDatas.push(data)}
            exDatas.push(data)
        })
        this.state = {
            datas : localDatas,
            expenseDatas : exDatas,
        }
    }
    render() {
        return (
        <div>
        <h1>수입 지출 그래프</h1>
        <BarChart width={600} height={300} data={this.state.datas}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="수입" stackId="a" fill="#0033aa" />
            <Bar dataKey="지출" stackId="a" fill="#aa0000" />
        </BarChart>
        <h1>지출 그래프</h1>
        <LineChart width={730} height={250} data={this.state.expenseDatas}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="지출" stroke="#aa0000" />
        </LineChart>
        </div>
        );
    }
}
export default Statistics;