export const customerEnquiryResponseDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `answer-to-customer-inquiry`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `answer_to_customer_inquiry`,
    name: `고객문의 답변`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `상담에대한 회신(셀러 -> 고객)`,
      anchorId: ``,
    },

  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-22`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/replies/{counselingId}`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/replies/{counselingId}`,
    _description: `셀러는 이 API를 사용하여 고객님의 질문에 대답할수있습니다<br>Note: API 한번 호출시, 단 하나의 질문만 대답할수 있습니다. 고객님의 질문에 대답하기전에 customer service inquiry api를 사용하여 inquiryId (inquiryId =question Id)를 받으십시오.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `counselingId`,
        require: true,
        _description: `Inquiry ID`,
        _relation: ``,
        _referenceInfo: `이 파라미터는 셀러가 어느 질문을 대답해야할지를 가르킴니다.<br>우선 customer service inquiry API를 사용하여 이 값을 받으십시오.`,
        _warning: ``,
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `counselingId`,
        type: `Number`,
        require: true,
        _description: `Inquiry ID`,
        _relation: ``,
        _referenceInfo: `이 파라미터는 셀러가 어느 질문을 대답해야할지를 가르킴니다.<br>우선 customer service inquiry API를 사용하여 이 값을 받으십시오.`,
        _warning: ``,
        children: false
      },
      {
        name: `cSAddComment`,
        type: `Object`,
        require: true,
        _description: `상세한 답변내용(코멘트&질문에 응답한 셀러 이름도 포함됨)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `content`,
            type: `String`,
            require: true,
            _description: `답변내용`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorId`,
            type: `String`,
            require: true,
            _description: `벤더 아이디`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `replyBy`,
            type: `String`,
            require: false,
            _description: `응답자 혹은 벤더 아이디`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
        ]
      },
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `eg: 400,401 and so on`,
      _warning: ``,
      children: false
    },
    {
      name: `message`,
      type: `String`,
      _description: `If inquiry success, will show success message;<br>If inquiry fail, will show the corresponding message`,
      _relation: ``,
      _referenceInfo: `200 : OK <br> 400 : Bad request , will show corresponding bad request message <br> 500 : Internal error`,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    code: [
      {
        language: `http`,
        codeblock: {
          "content":"just do it",
          "vendorId":"A00010028",
          "replyBy":"wanger"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
