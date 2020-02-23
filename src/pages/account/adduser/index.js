import React  from 'react'
import { Card, List, Typography } from 'antd';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {FormattedMessage} from "umi-plugin-react/locale";
import styles from './style.less';
import EmailModal from "@/pages/account/adduser/components/emailModal/emailModal";
import LinkModal from "@/pages/account/adduser/components/linkModal/linkModal";

import ManualModal from "@/pages/account/adduser/components/manualModal";
import useLinklModal from "./components/linkModal/useLinkModal";
import useEmailModal from './components/emailModal/useEmailModal';
import useManualModal from './components/manualModal/useManualModal';

import {getAuthority} from "@/utils/authority"
import {connect} from "dva";
const { Paragraph } = Typography;

const AddUser = (props) => {

  const {isShowingEmail, toggleEmail} = useEmailModal();
  const {isShowingLink, toggleLink} = useLinklModal();
  const {isShowingManual, toggleManual} = useManualModal();
  const auth = getAuthority()

  const authVerify = () =>{
    if(auth[0] === "admin"){
      return true
    }
  }

  return(
    <>
      <PageHeaderWrapper content={<FormattedMessage id="adduser.description" />}>
      </PageHeaderWrapper>
      <div className={styles.cardList}>
        <br></br>
        <List

          grid={{
            gutter: 6,
            lg: 3,
            md: 2,
            sm: 1,
            xs: 1,
          }}>
          <List.Item >
            <Card
              hoverable
              className={styles.card}
              onClick={toggleEmail}
            >
              <Card.Meta
                title={<a>{<FormattedMessage id="adduser.email.title" />}</a>}
                description={
                  <Paragraph
                    className={styles.item}
                    ellipsis={{
                      rows: 3,
                    }}
                  >
                    Convidar usuário via e-mail
                  </Paragraph>
                }
              />
            </Card>
          </List.Item>

          <List.Item >
            <Card
              hoverable
              className={styles.card}
              onClick={toggleLink}
            >
              <Card.Meta
                title={<a>{<FormattedMessage id="adduser.link.title" />}</a>}
                description={
                  <Paragraph
                    className={styles.item}
                    ellipsis={{
                      rows: 3,
                    }}
                  >
                    Criar link de convite com direitos pré-selecionados
                  </Paragraph>
                }
              />
            </Card>
          </List.Item>
          {authVerify() ?
            <List.Item >
            <Card
              hoverable
              className={styles.card}
              onClick={toggleManual}

            >
              <Card.Meta
                title={<a>{<FormattedMessage id="adduser.manual.title" />}</a>}
                description={
                  <Paragraph
                    className={styles.item}
                    ellipsis={{
                      rows: 3,
                    }}
                  >
                    Criar link de convite com direitos pré-selecionados
                  </Paragraph>
                }
              />
            </Card>
          </List.Item> : false
          }

        </List>
      </div>
      <EmailModal isShowingEmail={isShowingEmail} hideEmail={toggleEmail}/>
      <LinkModal isShowingLink={isShowingLink} hideLink={toggleLink}/>
      <ManualModal isShowingLink={isShowingManual} {...props} hideLink={toggleManual}/>


    </>

  )
}



export default AddUser
