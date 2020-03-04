const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'Bem Vindo ao IDome!',
      datetime: '2020-02-09',
      type: 'notification',
    },

  ]);
};

export default {
  'GET /api/notices': getNotices,
};
