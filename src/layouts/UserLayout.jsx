import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import SelectLang from '@/components/SelectLang';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

const UserLayout = props => {
const Footer = () => {
  return(
  <DefaultFooter
    copyright="2019 IOCOM Tecnologia"
    links={[

      {
        key: 'Ant Design',
        title: 'IOCOM',
        href: 'https://iocom.com.br',
        blankTarget: true,
      },
    ]}
  />
  )
}


  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    formatMessage,
    ...props,
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>IDome - Platform</span>
              </Link>
            </div>
          </div>
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
