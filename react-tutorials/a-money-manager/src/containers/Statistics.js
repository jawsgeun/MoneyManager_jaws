import React, { Component } from 'react';
import {BarChart, Bar,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import PeriodController from '../components/PeriodController';

class Statistics extends Component {
    constructor(props){
        super(props);
        const keys = Object.keys(localStorage)
        const from = keys[0];
        const to = keys[keys.length-1];
        const {localDatas,exDatas,cateDatas} = this.initData(from,to);
        this.state = {
            datas : localDatas,
            expenseDatas : exDatas,
            categoryDatas : cateDatas,
            from : from,
            to : to,
        }
    }
    onChange = (from,to) =>{
        const {localDatas,exDatas,cateDatas} = this.initData(from,to);
        console.log(localDatas)
        this.setState({
            from:from,
            to:to,
            datas : localDatas,
            expenseDatas : exDatas,
            categoryDatas : cateDatas,
        })
    }
    
    initData = (from,to)=>{
        const localDatas = [];
        const exDatas = [];
        const cateDatas = [];
        let fashion = {name : '의류' ,비용 :0};
        let food = {name : '음식',비용 :0};
        let traffic= {name : '교통',비용 :0};
        Object.keys(localStorage).forEach( v =>{
            if(v<from||v>to)return false;
            let data = {};    
            data.name = v.substring(5);
            data.수입 =0;
            data.지출 =0;
            let tmpData = JSON.parse(localStorage.getItem(v));
            tmpData.forEach(vv =>{
                if(vv.isIncome){
                    data.수입 += (vv.amount*1)
                }else{
                    data.지출 += (vv.amount*1)
                    switch(vv.category){
                        case '의류' :fashion.비용 += (vv.amount*1);
                                    break;
                        case '음식' : food.비용 += (vv.amount*1);
                                    break;
                        case '교통' : traffic.비용 += (vv.amount*1);
                                    break;
                        default : break;
                    }
                }
            })
            if(data.수입 !==0||data.지출!==0){localDatas.push(data)}
            exDatas.push(data)
        })
        cateDatas.push(fashion);
        cateDatas.push(food);
        cateDatas.push(traffic);
        return {localDatas,exDatas,cateDatas};
    }
    render() {
        const {datas,expenseDatas,categoryDatas} = this.state;
        return (
        <div>
            <PeriodController onChange = {this.onChange}/>
        <h1>수입 지출 그래프</h1>
        <BarChart width={600} height={300} data={datas}
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
        <LineChart width={730} height={250} data={expenseDatas}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="지출" stroke="#aa0000" />
        </LineChart>
        <h1>카테고리 그래프</h1>
        <BarChart width={600} height={300} data={categoryDatas}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="비용" stackId="a" fill="#7733aa" />
        </BarChart>
        </div>
        );
    }
}
export default Statistics;