export const lookupSalesHistoryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `settlement-api`,   // input category ex) exchange-service-api
    id: `lookup-fees-retroactive`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    name: `수수료 소급분 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``
  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/greatwall_api/apis/api/v1/settlement/goods/sales/inquiries/{vendorId}`,
    HMACPath: `/v2/providers/greatwall_api/apis/api/v1/settlement/goods/sales/inquiries/{vendorId}`,
    _description: `Seller can use this API to get settlement goods sales fee. Settlement goods sales fee is equal to order details, including payment amount, delivery amount, service fee and service fee VAT etc.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }

    ],
    queryStringParameters: [
      {
        name: `recognitionDate`,
        require: true,
        _description: `recognition date`,
        _relation: ``,
        _referenceInfo: `Inquired to, format: yyyy-MM-dd`,
        _warning: ``
      },
      {
        name: `nextToken`,
        require: true,
        _description: `next page start`,
        _relation: ``,
        _referenceInfo: `start index, 0 on first call`,
        _warning: ``
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `default = 50, min = 1, max = 50`,
        _relation: ``,
        _referenceInfo: `if you doen't input the this parameter will be default value '50', minimum valid value is '1', maximum valid value is '50'`,
        _warning: ``
      }
    ],
    bodyParameters: false
  },
  errorSpec: [
    {
      status: 400,
      _description: `The vendorId in requestBody doesn't match the one got from api-gateway.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maxPerPage should be less than:50`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maxPerPage should be more than:1`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `nextToken should be digital...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `input nextToken should be more than:0`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `recognitionDate should be not blank and:yyyy-MM-dd`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `recognitionDate should be less than today;`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maybe call some internal api errors`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: `call other api exception`
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `hasNext`,
      type: `Boolean`,
      _description: `has next data`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `nextToken`,
      type: `Number`,
      _description: `nextToken`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `GoodsSalesOutputDto`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `saleType`,
          type: `String`,
          _description: `saleType`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `saleTransactionId`,
          type: `String`,
          _description: `saleTransactionId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `saleDate`,
          type: `String`,
          _description: `e.g:2015-12-12`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `recognitionType`,
          type: `String`,
          _description: `recognitionType`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `recognitionDate`,
          type: `String`,
          _description: `e.g:2015-12-12`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorItemId`,
          type: `Number`,
          _description: `vendorItemId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `orderId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `goodsSaleBaseDetailOutputDtos`,
          type: `Array`,
          _description: `GoodsSalesBaseDetailOutputDto`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `vendorItemId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `vendorItemName`,
              type: `String`,
              _description: `vendorItemName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `serviceFeeVat`,
              type: `Number`,
              _description: `serviceFeeVat`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `serviceFee`,
              type: `Number`,
              _description: `serviceFee`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `saleAmount`,
              type: `Number`,
              _description: `saleAmount`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `quantity`,
              type: `Number`,
              _description: `quantity`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `payoutTarget`,
              type: `Number`,
              _description: `payoutTarget`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `paymentAmount`,
              type: `Number`,
              _description: `paymentAmount`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `coupangDiscountCoupon`,
              type: `Number`,
              _description: `coupangDiscountCoupon`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `agreedFeePolicy`,
              type: `Boolean`,
              _description: `agreedFeePolicy`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `externalCode`,
              type: `String`,
              _description: `externalCode`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `productId`,
              type: `Number`,
              _description: `productId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `productName`,
              type: `String`,
              _description: `productName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `taxType`,
              type: `String`,
              _description: `taxType`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `unitPrice`,
              type: `Number`,
              _description: `unitPrice`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ],
        },
        {
          name: `goodsSaleBaseDeliverySaleOutputDto`,
          type: `Object`,
          _description: `goodsSaleBaseDeliverySaleOutputDto`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `deliveryAmount`,
              type: `Number`,
              _description: `deliveryAmount`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliverySupplyFee`,
              type: `Number`,
              _description: `deliverySupplyFee`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliverySupplyFeeVat`,
              type: `Number`,
              _description: `deliverySupplyFeeVat`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteAreaAmount`,
              type: `Number`,
              _description: `remoteAreaAmount`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteAreaAmountFee`,
              type: `Number`,
              _description: `remoteAreaAmountFee`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteAreaAmountFeeVat`,
              type: `Number`,
              _description: `remoteAreaAmountFeeVat`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalDeliveryAmount`,
              type: `Number`,
              _description: `totalDeliveryAmount`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalDeliverySupplyFee`,
              type: `Number`,
              _description: `totalDeliverySupplyFee`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalDeliverySupplyFeeVat`,
              type: `Number`,
              _description: `totalDeliverySupplyFeeVat`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ]
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v1/settlement/goods/sales/inquiries/A0002475?recognitionDate=2016-12-30&nextToken=1&maxPerPage=20`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId":"A00012697",
          "recognitionDate":"2016-09-18",
          "nextToken":"0",
          "maxPerPage":50
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
          "saleType": "SA",
          "saleTransactionId": "20161126-115235941",
          "saleDate": "2016-11-15",
          "recognitionType": "AUTO",
          "recognitionDate": "2016-11-26",
          "orderId": 23000002575090,
          "goodsSaleBaseDetailOutputDtos": [
            {
              "agreedFeePolicy": true,
              "coupangDiscountCoupon": 0,
              "externalCode": "카밀 핸드크림 익스프레스 75ml 익스프레스 75ml",
              "paymentAmount": 27000,
              "payoutTarget": 24327,
              "productId": 2778836,
              "productName": "카밀 익스프레스 핸드크림",
              "quantity": 10,
              "saleAmount": 27000,
              "serviceFee": 2430,
              "serviceFeeVat": 243,
              "taxType": "TAX",
              "unitPrice": 2700,
              "vendorItemId": 3011876990,
              "vendorItemName": "카밀 익스프레스 핸드크림, 75ml"
            }
          ],
          "goodsSaleBaseDeliverySaleOutputDto": {
            "totalDeliverySupplyFeeVat": 8,
            "totalDeliverySupplyFee": 75,
            "totalDeliveryAmount": 2500,
            "remoteAreaAmountFeeVat": 0,
            "remoteAreaAmountFee": 0,
            "remoteAreaAmount": 0,
            "deliverySupplyFeeVat": 8,
            "deliverySupplyFee": 75,
            "deliveryAmount": 2500
          }
        }
      ],
      "hasNext": true,
      "nextToken": 115264255
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
