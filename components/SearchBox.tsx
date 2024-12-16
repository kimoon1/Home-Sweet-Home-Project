import Form from 'next/form';
import SearchButton from './SearchButton';





export default function SearchBox({fetchFunction, fetchData} : {fetchFunction: any, fetchData: Array<Object>}) {
  async function submit(searchdata: FormData) {
    'use server'
    // const promise = await new Promise((resolve) => setTimeout(resolve, 1000)) // 테스트 비동기 처리 
    
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], ':', pair[1]);
    // }
    const start = searchdata.get('게시일');
    const end = searchdata.get('마감일');
    const region = searchdata.get('지역')

    console.log(start, end, region);

    const fetch = await fetchFunction({startDate : start, endDate : end, region : ''});
    // console.log(fetch[1].dsList);
    
    console.log(fetchData);
    fetchData = [];
    // fetchData = [...fetch[1].dsList]

  }

  return (
    <Form formMethod='get' action={submit} className="my-4 p-4 border rounded-xl border-blue-200 bg-gray-100 grid grid-cols-4 gap-4">
      <label className="flex gap-2.5 items-center">
        <span>유형</span>
        <select className="border border-gary-500 rounded py-0.5 px-1 w-48 text-sm" name="유형">
          <option value="전체">전체</option>
          <option value="전체">국민임대</option>
          <option value="전체">행복주택</option>
        </select>

      </label>
      <label className="flex gap-2.5 items-center">
        <dt>지역</dt>
        <dd>
          <select className="border border-gary-500 rounded py-0.5 px-1 w-36 text-sm" name="지역" defaultValue='11'>
            <option value="">전국</option>

            <option value="11">서울특별시</option>

            <option value="26">부산광역시</option>

            <option value="27">대구광역시</option>

            <option value="28">인천광역시</option>

            <option value="29">광주광역시</option>

            <option value="30">대전광역시</option>

            <option value="31">울산광역시</option>

            <option value="36110">세종특별자치시</option>

            <option value="41">경기도</option>

            <option value="51">강원특별자치도</option>

            <option value="43">충청북도</option>

            <option value="44">충청남도</option>

            <option value="52">전북특별자치도</option>

            <option value="46">전라남도</option>

            <option value="47">경상북도</option>

            <option value="48">경상남도</option>

            <option value="50">제주특별자치도</option>
          </select>

        </dd>
      </label>
      <label className="flex gap-2.5 items-center">
        <dt>상태</dt>
        <dd>
          <select className="border border-gary-500 rounded py-0.5 px-1 w-24 text-sm" name="상태">
            <option value="전체">전체</option>
            <option value="공고중">공고중</option>
            <option value="접수중">접수중</option>
            <option value="접수마감">접수마감</option>
            <option value="정정공고중">정정공고중</option>

          </select>
        </dd>
      </label>
      <label className="flex gap-2.5 items-center">
        <dt>기간</dt>
        <dd className="flex items-center gap-1">
          <select className="border border-gary-500 rounded py-0.5 px-1 text-sm" name="게시 기간">
            <option value="게시일">게시일</option>
            <option value="마감일">마감일</option>
          </select>
          <input className="border border-gary-500 rounded py-0.5 px-1 text-sm" name="게시일" type="date" defaultValue="2024-10-16" />
          <span>~</span>
          <input className="border border-gary-500 rounded py-0.5 px-1 text-sm" name="마감일" type="date" defaultValue="2024-12-16" />
        </dd>
      </label>
      <label className="flex gap-2.5 items-center col-span-4 text-sm">
        <dt className="w-16">공고명</dt>
        <dd className="flex w-full gap-1">
          <input className="border border-gary-500 rounded py-0.5 px-1 w-full " name="공고명" type="text" />
          <SearchButton />
        </dd>
      </label>
    </Form>
  );
}