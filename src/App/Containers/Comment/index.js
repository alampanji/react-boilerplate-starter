import React from 'react';
import {Row, Col, Table, Button, Modal, message} from 'antd';
import HeaderTitle from '../../Components/HeaderTitle';
import MainButton from '../../Components/MainButton';
import IgnoreButton from '../../Components/IgnoreButton';
import FormAddPost from '../../Components/AddPost';
import FormUpdatePost from '../../Components/UpdatePost';
import Constant from '../../../config/constant';
import {connect} from 'react-redux';
import {deletes} from '../../api/service';
import {getPostById} from '../../../reducers/post/action';
import './index.scss';

class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            modalAddComment: false,
            modalUpdateComment:false,
            selected:{}
        }
        this.modalAddClose = this.modalAddClose.bind(this);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.modalUpdateClose = this.modalUpdateClose.bind(this);
    }

    componentDidMount(){
        this.getData();
    }
    
    async getData(){
        const response = await fetch(Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT);
        const data = await response.json();
        const constructPayload = data.map(obj=>
            ({...obj, key:obj.id}
        ))
        this.setState({
            data:constructPayload,
        })
    }

    
    modalAddClose(){
        this.setState({
            modalAddComment: false
        })
    }

    modalUpdateClose(){
        this.setState({
            modalUpdateComment: false
        })
    }

    addComment(){
        this.setState({
            modalAddComment:true
        })
    }

    updateComment(data){
        this.props.getPostData(data);
        this.setState({
            modalUpdateComment:true
        })
    }

    delete(id){
    const url = Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + '/' + id
        deletes(url).then(response=>{
            if(response.status === 200){
                message.success('Success delete posts'); 
                this.getData();  
            }
            else{
              message.error('Failed to add new post');
            }
        })
    }

    render(){
          
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: 'Posted By',
                dataIndex: 'email',
                key: 'email',
            }, 
            {
                title: 'Action',
                dataIndex: 'id',
                key: 'id',
                render: (id) => (
                    <div>
                        <MainButton action={()=>this.updatePost(id)} label={`UPDATE`} />
                        <IgnoreButton action={()=>this.delete(id)} label={`DELETE`} />
                    </div>
                )
            }
        ];
          

        return(
            <div className="user-container">
                <HeaderTitle title={`Comment`} subtitle={`List of Comment`}/>
                <MainButton label={`ADD NEW COMMENT`} action={this.addComment} />
                <Table dataSource={this.state.data} columns={columns} />

                <Modal
                    title="Add Post"
                    visible={this.state.modalAddComment}
                    onCancel={this.modalAddClose}
                    footer={null }
                    width="50%"
                    >
                        <FormAddPost closeModal={this.modalAddClose} />
                </Modal>

                <Modal
                    title="Album User"
                    visible={this.state.modalUpdatePost}
                    onCancel={this.modalAlbumClose}
                    footer={null }
                    width="50%"
                    >
                    <FormUpdatePost data={this.props.selectedPost} closeModal={this.modalUpdateClose} />
                </Modal>
            </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return{
        selectedPost: state.posts.current
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getPostData : (id)=>{
            dispatch(getPostById(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Comment);