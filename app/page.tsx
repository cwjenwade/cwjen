export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">歡迎</h1>
      <p className="text-lg text-slate-700">
        這是 Wade Jen 的個人網站。我提供心理治療、心理輔導與團體治療服務。
      </p>
      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">服務項目</h2>
        <ul className="space-y-2 text-slate-700">
          <li>• 個人心理治療</li>
          <li>• 團體治療</li>
          <li>• 個人成長與自我探索</li>
          <li>• 學術研究與教學</li>
        </ul>
      </div>
    </div>
  );
}
