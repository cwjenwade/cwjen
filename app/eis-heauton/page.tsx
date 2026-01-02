export default function EisHeauton() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">Eis Heauton</h1>
      <p className="text-lg text-slate-700">
        "Eis Heauton" 意為「認識你自己」，是古希臘德爾斐神廟門口的銘文。
        這個頁面探討自我認識的旅程與個人成長。
      </p>
      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">主題</h2>
        <ul className="space-y-2 text-slate-700">
          <li>• <a href="/eis-heauton/unity" className="text-blue-600 hover:underline">合一</a> - 身心靈的整合</li>
          <li>• <a href="/eis-heauton/freedom" className="text-blue-600 hover:underline">自由</a> - 內在的自由與解放</li>
        </ul>
      </div>
    </div>
  );
}
