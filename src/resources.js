export default {
  '.*/attendanceTypes.*': {
    GET: {
      response: {
        items: [
          {
            "name": "hoge"
          }
        ]
      },
      status: 200
    }
  },
  '.*/attendanceReasons.*': {
    GET: {
      response: {
        items: [
          {
            "name": "foo"
          }
        ]
      },
      status: 200
    }
  }
};
