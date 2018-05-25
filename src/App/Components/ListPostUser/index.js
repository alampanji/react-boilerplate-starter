import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import './index.scss';
const Panel = Collapse.Panel;


const ListPostUser = ({posts})=>{
    return(
        <div className="list-post-user-container">
            <Collapse accordion>
                {
                    
                    posts.map((data, index)=>(
                        <Panel header={data.title} key={index}>
                            <p>{data.body}</p>
                        </Panel>
                    ))
                }

            </Collapse>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        posts : state.user_list.posts
    }
}


export default connect(mapStateToProps, null)(ListPostUser);