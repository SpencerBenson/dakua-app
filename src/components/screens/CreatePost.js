import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CreatePost = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};


  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

    <h1 style={{textAlign:"center"}}>Dakua</h1>
        <Form.Item label="Title">
          <Input  placeholder="Title" />
        </Form.Item>
        <Form.Item label="udaku">
          <Input  placeholder="create post..." />
        </Form.Item>
        <Form.Item
        name="upload"
        label="Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit Post
        </Button>
      </Form.Item>
      </Form>
    </>
  );
};

export default CreatePost;