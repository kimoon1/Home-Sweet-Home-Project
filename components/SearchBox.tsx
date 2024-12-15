export default function SearchBox() {
  return (
    <form className="my-4 p-4 border rounded-xl border-blue-200 bg-gray-100 grid grid-cols-4 gap-4">
      <label className="flex gap-2.5 items-center">
        <span>유형</span>
        <select className="border border-gary-500 rounded py-0.5 px-1 w-48" name="유형">
          <option value="전체">전체</option>
          <option value="전체">국민임대</option>
          <option value="전체">행복주택</option>
        </select>

      </label>
      <label className="flex gap-2.5 items-center">
        <dt>지역</dt>
        <dd>
          <select className="border border-gary-500 rounded py-0.5 px-1 w-24" name="유형">
            <option value="전체">전체</option>
            <option value="전체">국민임대</option>
            <option value="전체">행복주택</option>
          </select>
        </dd>
      </label>
      <label className="flex gap-2.5 items-center">
        <dt>상태</dt>
        <dd>
          <select className="border border-gary-500 rounded py-0.5 px-1 w-24" name="유형">
            <option value="전체">전체</option>
            <option value="전체">국민임대</option>
            <option value="전체">행복주택</option>
          </select>
        </dd>
      </label>
      <label className="flex gap-2.5 items-center">
        <dt>기간</dt>
        <dd>
        <select className="border border-gary-500 rounded py-0.5 px-1 w-48" name="유형">
            <option value="전체">게시일</option>
            <option value="전체">마감일</option>
          </select>
        </dd>
      </label>
      <label className="flex gap-2.5 items-center col-span-4">
        <dt className="w-16">공고명</dt>
        <dd className="flex w-full">
          <input className="border border-gary-500 rounded py-0.5 px-1 w-full " type="text" />
          <button className="w-16">검색</button>
        </dd>
      </label>
    </form>
  );
}