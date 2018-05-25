import React from 'react';
import {Row, Col, Table, Button} from 'antd';
import HeaderTitle from '../../Components/HeaderTitle';
import MainButton from '../../Components/MainButton';
import Constant from '../../../config/constant';
import './index.scss';

class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.getData();
    }
    
    async getData(){
        const response = await fetch(Constant.MASTER_PATH_API + Constant.URL_GET_USER);
        const data = await response.json();
        const constructPayload = data.map(obj=>
            ({...obj, key:obj.id}
        ))
        this.setState({
            data:constructPayload
        })
    }

    getDetail(id){
        // console.log(id);
    }

    render(){
          
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            }, 
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Detail',
                dataIndex: 'id',
                key: 'id',
                render: (id) => (
                    <MainButton action={()=>this.getDetail(id)} label={`DETAIL`} />
                )
            }
        ];
          

        return(
            <div className="user-container">
                <HeaderTitle title={`User`} subtitle={`List of User Application`}/>
                <Table dataSource={this.state.data} columns={columns} />
            </div>
        )
    }
    
}

export default User;