export default {
  '.*/attendanceTypes.*': {
    GET: {
      response: {
        items: [
          {
            "id": 0,
            "name": "その他"
          },
          {
            "id": 1,
            "name": "遅刻"
          },
          {
            "id": 2,
            "name": "早退"
          },
          {
            "id": 3,
            "name": "午前半休"
          },
          {
            "id": 4,
            "name": "午後半休"
          },
          {
            "id": 5,
            "name": "有給/欠勤"
          },
          {
            "id": 6,
            "name": "振休"
          },
          {
            "id": 7,
            "name": "振出"
          },
          {
            "id": 8,
            "name": "外出"
          },
          {
            "id": 9,
            "name": "早朝出勤"
          },
          {
            "id": 10,
            "name": "特別休暇"
          },
          {
            "id": 11,
            "name": "出張"
          },
          {
            "id": 12,
            "name": "朝会欠席"
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
            "id": 0,
            "name": "その他"
          },
          {
            "id": 1,
            "name": "体調不良"
          },
          {
            "id": 2,
            "name": "電車遅延"
          },
          {
            "id": 3,
            "name": "通院"
          },
          {
            "id": 4,
            "name": "リリース"
          },
          {
            "id": 5,
            "name": "家事都合"
          },
          {
            "id": 6,
            "name": "私用"
          },
          {
            "id": 7,
            "name": "外部研修"
          },
          {
            "id": 8,
            "name": "社用"
          },
          {
            "id": 9,
            "name": "メンテ"
          },
          {
            "id": 10,
            "name": "休職中"
          }
        ]
      },
      status: 200
    }
  }
};
