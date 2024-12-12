export default function SearchBox() {
  return (
    <form className="my-4 p-4 border rounded-xl border-blue-200 bg-gray-100 grid grid-cols-4 gap-4">
        <label className="flex">
          <dt>유형</dt>
          <dd>
            <select name="유형">
              <option value="전체">전체</option>
              <option value="전체">국민임대</option>
              <option value="전체">행복주택</option>
            </select>
          </dd>
        </label>
        <label className="flex">
          <dt>지역</dt>
          <dd>
            <select name="유형">
              <option value="전체">전체</option>
              <option value="전체">국민임대</option>
              <option value="전체">행복주택</option>
            </select>
          </dd>
        </label>
        <label className="flex">
          <dt>상태</dt>
          <dd>
            <select name="유형">
              <option value="전체">전체</option>
              <option value="전체">국민임대</option>
              <option value="전체">행복주택</option>
            </select>
          </dd>
        </label>
        <label className="flex">
          <dt>기간</dt>
          <dd>
            <select name="유형">
              <option value="전체">전체</option>
              <option value="전체">국민임대</option>
              <option value="전체">행복주택</option>
            </select>
          </dd>
        </label>
        <label className="flex">
          <dt>공고명</dt>
          <dd>
            <input type="text" />
            <button>검색</button>
          </dd>
        </label>
      </form>
  );
}