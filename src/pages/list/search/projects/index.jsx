import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import AvatarList from './components/AvatarList';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './style.less';

const { Option } = Select;
const FormItem = Form.Item;
const { Paragraph } = Typography;

const getKey = (id, index) => `${id}-${index}`;

class Projects extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndsearchAndprojects/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      listAndsearchAndprojects: { list = [] },
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;
    const cardList = list && (
      <List
        rowKey="id"
        loading={loading}
        grid={{
          gutter: 24,
          xl: 4,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
            >
              <Card.Meta
                title={<a>{item.title}</a>}
                description={
                  <Paragraph
                    className={styles.item}
                    ellipsis={{
                      rows: 2,
                    }}
                  >
                    {item.subDescription}
                  </Paragraph>
                }
              />
              <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={styles.avatarList}>
                  <AvatarList size="small">
                    {item.members.map((member, i) => (
                      <AvatarList.Item
                        key={getKey(item.id, i)}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    );
    const formItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    return (
      <div className={styles.coverCardList}>
        <Card bordered={false}>
          <Form layout="inline">
            <StandardFormRow
              title="????????????"
              block
              style={{
                paddingBottom: 11,
              }}
            >
              <FormItem>
                {getFieldDecorator('category')(
                  <TagSelect expandable>
                    <TagSelect.Option value="cat1">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat2">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat3">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat4">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat5">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat6">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat7">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat8">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat9">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat10">?????????</TagSelect.Option>
                    <TagSelect.Option value="cat11">????????????</TagSelect.Option>
                    <TagSelect.Option value="cat12">????????????</TagSelect.Option>
                  </TagSelect>,
                )}
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title="????????????" grid last>
              <Row gutter={16}>
                <Col lg={8} md={10} sm={10} xs={24}>
                  <FormItem {...formItemLayout} label="??????">
                    {getFieldDecorator(
                      'author',
                      {},
                    )(
                      <Select
                        placeholder="??????"
                        style={{
                          maxWidth: 200,
                          width: '100%',
                        }}
                      >
                        <Option value="lisa">?????????</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
                <Col lg={8} md={10} sm={10} xs={24}>
                  <FormItem {...formItemLayout} label="?????????">
                    {getFieldDecorator(
                      'rate',
                      {},
                    )(
                      <Select
                        placeholder="??????"
                        style={{
                          maxWidth: 200,
                          width: '100%',
                        }}
                      >
                        <Option value="good">??????</Option>
                        <Option value="normal">??????</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
      </div>
    );
  }
}

const WarpForm = Form.create({
  onValuesChange({ dispatch }) {
    // ??????????????????????????????
    // ????????????????????????
    dispatch({
      type: 'listAndsearchAndprojects/fetch',
      payload: {
        count: 8,
      },
    });
  },
})(Projects);
export default connect(({ listAndsearchAndprojects, loading }) => ({
  listAndsearchAndprojects,
  loading: loading.models.listAndsearchAndprojects,
}))(WarpForm);
