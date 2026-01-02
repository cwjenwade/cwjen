export default function Project() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">專案</h1>
      <p className="text-lg text-slate-700">
        本網站介紹我進行的各項心理健康相關專案。
      </p>
      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">進行中的專案</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            • <a href="/project/male-sexual-minority" className="text-blue-600 hover:underline">
              Group Therapy｜Male Sexual Minority
            </a> - 針對男性性少數群體的團體治療服務
          </li>
        </ul>
      </div>
    </div>
  );
}
