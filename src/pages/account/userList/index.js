import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import {
  Table,
  Divider,
  Popconfirm,
  message,
  List,
  Card,
  Button,
  Avatar,
  Icon,
  Typography,
  Pagination,
  Tag,
} from 'antd'
import Link from 'umi/link';

import {PageHeaderWrapper} from "@ant-design/pro-layout";
import { FormattedMessage, formatMessage } from "umi-plugin-react/locale";
import styles from './style.less';

import { GET_USERS } from '@/atomic_data/query'
const { Paragraph } = Typography;
let dt = {}
const UserList = () => {
  const { data, error, loading } = useQuery(GET_USERS)


  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        <FormattedMessage id="admin.userlist.description" />
      </p>
      <div className={styles.contentLink}>
        <a>
          <Link to="/account/singular">
            <Icon type="plus"/> <FormattedMessage id='admin.userlist.add'/>
          </Link>

        </a>

      </div>
    </div>
  );

  return(
    <PageHeaderWrapper content={content} >
      <div className={styles.cardList}>
        <List
          rowKey="ID"
          loading={loading}
          grid={{
            gutter: 24,
            lg: 3,
            md: 2,
            sm: 1,
            xs: 1,
          }}
          dataSource={ data.Users}
          pagination={<Pagination defaultCurrent={1} total={50}/>}
          renderItem={item => {

            if (item && item.id) {
              return (

                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                  >
                    <Card.Meta
                      avatar={<Avatar alt="" size={80} className={styles.cardAvatar} src={item.avatar} />}
                      title={<>
                        {item.active ? <Tag color="green"  ><FormattedMessage id='admin.userlist.active'/></Tag> : <Tag color="red" ><FormattedMessage id='admin.userlist.inactive'/></Tag> }
                        <br/>
                        <a>{item.full_name}
                        </a>
                      </>}
                      description={
                        <>
                          <Paragraph
                            className={styles.item}
                            ellipsis={{
                              rows: 3,
                            }}
                          >

                            {item.email}

                          </Paragraph>
                        </>
                      }
                    />
                  </Card>
                </List.Item>

              );
            }
          }}
        />
      </div>


    </PageHeaderWrapper>


  )
}
export default UserList
