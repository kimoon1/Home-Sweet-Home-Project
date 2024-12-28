import axios from "axios";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../../components/SearchBox";



//든든 전세
// async function getDataDNDN() {
//   console.log(process.env.dndnAPI)
//   // await new Promise((resolve) => setTimeout(resolve, 10));
//   const response = await axios.get('https://api.odcloud.kr/api/15139525/v1/uddi:5b6bf851-162c-4927-9783-b4a391488c8d?page=1&perPage=10', {
//     params: {
//       page: 1,
//       perPage: 10,
//       serviceKey: process.env.DataAPI
//     }
//   });

//   return response
// }


//lh 청약 정보 가져오기
async function getDataLH({ startDate, endDate, region } : { startDate:String , endDate: String, region: String }) {
  'use server'
  console.log(startDate);

  const response = await axios.get('http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1', {
    params: {
      serviceKey: process.env.DataAPI,
      PG_SZ: 20,
      PAGE: 1,
      PAN_NM: '', //공고명
      PAN_NT_ST_DT: '20231231', // 공고게시일
      CLSG_DT: '20251231', // 공고마감일
      CNP_CD: region, //지역코드
      PAN_SS: '공고중', //공고상태코드
      // UPP_AIS_TP_CD: '06' //공고 유형 코드 [05: 분양주택 , 06: 임대주택]
    }
  })
  console.log('=============')
  console.dir(response.data[1])
  console.log('=============')
  return response.data
}


export default async function Page() {

  // const {data} = await getData();
  const todayDate = new Date();
  // 올해 1월 1일로 고정
const oneMonthAgoDate = new Date(todayDate.getFullYear(), 0, 1)

  //  oneMonthAgoDate.setMonth(todayDate.getMonth() - 6) // 날짜를 한달전으로 변경s
  console.log(oneMonthAgoDate, 'one')
   
   const today = todayDate.toISOString().split('T')[0]
   const oneMonthAgo = oneMonthAgoDate.toISOString().split('T')[0]
   
  
  const LHdata = await getDataLH({startDate : oneMonthAgo, endDate : today, region : '11'});
  let LHMap = LHdata[1].dsList || [];

  // console.log(LHMap[0]);
  // console.log(data.data);

  return (
    <>
      <h1 className="w-full text-2xl font-bold text-center">청약정보 모아보기</h1>
      <hr className="my-4" />
      <SearchBox fetchFunction={getDataLH} fetchData={LHMap} />

      <div className="text-gray-700 font-bold grid grid-cols-table justify-items-stretch auto-cols-max border-t-table border-t-blue-900 ">
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">번호</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">유형</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">공고명</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">지역</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">게시일</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">마감일</div>
        <div className="text-slate-900 py-2.5 border-b text-sm border-b-neutral-400 bg-indigo-50 text-center">상태</div>

        {/*여기부터 시작 */}
        {LHMap && LHMap.length > 0 ? (
          LHMap.map((LHitem: any, idx: React.Key) => (
            <React.Fragment key={idx}>
              <div className="py-2 text-sm flex border-b border-b-neutral-200 justify-center">{LHitem.RNUM}</div>
              <div className="py-2 text-sm truncate inline-block border-b border-b-neutral-200 text-center">{LHitem.AIS_TP_CD_NM}</div>
              <div className="py-2 text-sm truncate block border-b border-b-neutral-200 hover:text-rose-500">
                <Link target="blank" href={LHitem.DTL_URL_MOB}>{LHitem.PAN_NM}</Link>
              </div>
              <div className="py-2 text-sm truncate block border-b border-b-neutral-200 text-center">{LHitem.CNP_CD_NM}</div>
              <div className="py-2 text-sm truncate block border-b border-b-neutral-200 text-center">{LHitem.PAN_NT_ST_DT}</div>
              <div className="py-2 text-sm truncate block border-b border-b-neutral-200 text-center">{LHitem.CLSG_DT}</div>
              <div className="py-2 text-emerald-600 truncate block text-sm border-b border-b-neutral-200 text-center">{LHitem.PAN_SS}</div>
            </React.Fragment>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">데이터가 없습니다.</div>
        )}



      </div>
      {/* {data[1].dsList.map((item, key) => (
        <div key={key}>{item.PAN_NM} / {item.UPP_AIS_TP_NM} / {item.PAN_NT_ST_DT}</div>
      ))} */}
    </>
  )
}