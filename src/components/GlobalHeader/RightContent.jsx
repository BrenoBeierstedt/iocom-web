import { Icon, Tooltip } from 'antd';
import React, {useEffect} from 'react';
import { connect } from 'dva';
import Avatar from './AvatarDropdown';
import SelectLang from '../SelectLang';
import styles from './index.less';
import NoticeIconView from './NoticeIconView';
import useFetchUser from '@/utils/useFetchUser'
import { useDispatch } from 'dva'
import {useSelector} from "react-redux";
import {useQuery} from "@apollo/react-hooks";
import {GET_MYSELF} from "@/atomic_data/query";
import jwt_decode from 'jwt-decode'



const GlobalHeaderRight = props => {
  const dispatch = useDispatch()
  const { theme, layout } = props;
  let className = styles.right;

  const decoded = jwt_decode(localStorage.getItem("idome_authority_token"))
  const email = decoded.email
  const {loading, error, data} = useQuery(GET_MYSELF, {variables : {email}});
useEffect(() => {
  if(data){
    let user = {
      id: data.Myself.id,
      full_name: data.Myself.full_name,
      email: data.Myself.email,
      avatar: data.Myself.avatar
    }
    dispatch({type:'user/fetchCurrent', payload: {user}})
  }

  }

)




  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }



  return (
    <div className={className}>
      {/*<HeaderSearch*/}
      {/*  className={`${styles.action} ${styles.search}`}*/}
      {/*  placeholder={formatMessage({*/}
      {/*    id: 'component.globalHeader.search',*/}
      {/*  })}*/}
      {/*  defaultValue="umi ui"*/}
      {/*  dataSource={[*/}
      {/*    formatMessage({*/}
      {/*      id: 'component.globalHeader.search.example1',*/}
      {/*    }),*/}
      {/*    formatMessage({*/}
      {/*      id: 'component.globalHeader.search.example2',*/}
      {/*    }),*/}
      {/*    formatMessage({*/}
      {/*      id: 'component.globalHeader.search.example3',*/}
      {/*    }),*/}
      {/*  ]}*/}
      {/*  onSearch={value => {*/}
      {/*    console.log('input', value);*/}
      {/*  }}*/}
      {/*  onPressEnter={value => {*/}
      {/*    console.log('enter', value);*/}
      {/*  }}*/}
      {/*/>*/}

      <NoticeIconView />
      <Avatar menu {...props} />
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
