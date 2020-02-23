function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
}

export default {
  'POST  /api/login/account': (req, res) => {
    const { password, email, type } = req.body;

    if (password === 'ant.design' && email === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (password === 'ant.design' && email === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
};
