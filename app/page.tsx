import axios from "axios";


//든든 전세
async function getDataDNDN() {
  console.log(process.env.dndnAPI)
  // await new Promise((resolve) => setTimeout(resolve, 10));
  const response = await axios.get('https://api.odcloud.kr/api/15139525/v1/uddi:5b6bf851-162c-4927-9783-b4a391488c8d?page=1&perPage=10', {
    params: {
      page : 1,
      perPage: 10,
      serviceKey: process.env.DataAPI
    }
  } );
  
  return response
}

async function getDataLH() {
  const response = await axios.get('http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1', {
    params: {
      serviceKey: process.env.DataAPI,
      PG_SZ: 10,
      PAGE: 1,
      PAN_NT_ST_DT: '20241011',
      CLSG_DT: '20241211',
      UPP_AIS_TP_CD: '06' //공고 유형 코드 [05: 분양주택 , 06: 임대주택]
    }
  })
  // console.dir(response)
  return response.data
}


export default async function Page() {

  // const {data} = await getData();
  const data = await getDataLH();
  console.dir(data);

  // console.log(data.data);

  return (
    <>
      <h1 className="w-full text-2xl font-bold text-center">청약정보 모아보기</h1>
      <hr className="my-4" />
      {data[1].dsList.map((item, key) => (
        <div key={key}>{item.PAN_NM}</div>
      ))}
    </>
  )
}