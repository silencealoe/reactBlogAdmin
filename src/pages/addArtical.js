import React, { useState } from 'react';
import { Row, Col ,Input, Select ,Button ,DatePicker } from 'antd'
import marked from 'marked'
import '../static/css/addArtical.css'
const { Option } = Select;
const { TextArea } = Input
const AddArtical = ()=>{
  const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
   const [articleTitle,setArticleTitle] = useState('')   //文章标题
   const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
   const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
   const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
   const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
   const [showDate,setShowDate] = useState()   //发布日期
   const [updateDate,setUpdateDate] = useState() //修改日志的日期
   const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
   const [selectedType,setSelectType] = useState(1) //选择的文章类别

   marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  }); 
  const handleContent = (e) => {
    console.log(e.target.value)
    setArticleContent(e.target.value)
    let contenthtml = marked(e.target.value)
    setMarkdownContent(contenthtml)
  }
  const handleIntroduce = (e) => {
    setIntroducemd(e.target.value)
    let introduce = marked(e.target.value)
    setIntroducehtml(introduce)
  }
  return(
    <div>

      <Row gutter={5}>
        <Col span={19}>
            <Row gutter={5}>
              <Col span={18}>
                <Input
                  size="large"
                  placeholder="输入博客标题"
                />
              </Col>
              <Col span={6}>
                <Select size="large" defaultValue="study">
                  <Option value="study">学习</Option>
                  <Option value="life">生活</Option>
                  <Option value="other">其他</Option>
                </Select>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={12}>
                <TextArea 
                  className="markdown-content" 
                  rows={35}  
                  placeholder="文章内容"
                  onChange={handleContent}
                />
              </Col>
              <Col span={12}>
                <div className="show-html" dangerouslySetInnerHTML={{__html:markdownContent}}>

                </div>
              </Col>
            </Row>
        </Col>
        <Col span={5}>
            <Row>
              <Col span={24}> 
                <Button type="white" size="large">暂存文章</Button> &nbsp;
                <Button type="primary" size="large">发表文章</Button>
              </Col>
              <Col span={24}>
                <br/>
                <TextArea 
                  rows={4} 
                  placeholder="文章简介"
                  onChange={handleIntroduce}
                />
                <br/><br/>
                <div  className="introduce-html" dangerouslySetInnerHTML={{__html:introducehtml}}></div>
              </Col>
              <Col span={12}>
                <div className="date-select">
                    <DatePicker
                        placeholder="发布日期"
                        size="large"  
                    />
                  </div>
              </Col>
            </Row>
        </Col>

      </Row>
    </div>
  )
}
export default AddArtical