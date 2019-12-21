import React from 'react';

import { Query, Mutation } from 'react-apollo';
import {GET_MYSELF} from "@/atomic_data/query";
import {userId} from "@/utils/rolesDecrypt"

import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  localStorage.getItem("token")
  const userId = userId


  // let Users
  //
  // const App = () => (
  //   <Query query={GET_USERS}>
  //     {({ data: { organization }, loading }) => {
  //     ...
  //       return (
  //         <Users repositories={organization.repositories} />
  //       );
  //     }}
  //   </Query>
  // );

  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
