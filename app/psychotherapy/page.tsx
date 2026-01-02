export default function Psychotherapy() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">心理治療</h1>
      <p className="text-lg text-slate-700">
        心理治療是一種幫助個案處理心理困擾、促進心理健康與個人成長的專業服務。
      </p>
      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">治療方法</h2>
        <ul className="space-y-2 text-slate-700">
          <li>• <a href="/psychotherapy/person-centered" className="text-blue-600 hover:underline">人中心治療法</a> - 以個案為中心的治療方法</li>
          <li>• <a href="/psychotherapy/reality-therapy" className="text-blue-600 hover:underline">現實治療</a> - 著重於個案的責任與選擇</li>
        </ul>
      </div>
    </div>
  );
}
