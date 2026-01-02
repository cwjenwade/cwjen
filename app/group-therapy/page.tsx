export default function GroupTherapy() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">團體治療</h1>
      <div className="space-y-4 text-slate-700">
        <p>
          團體治療是在一個安全、支持的群體環境中進行的心理治療。小組成員相互支持、分享經驗，
          並從彼此的故事與觀點中獲得洞察與成長。
        </p>
        <h2 className="text-xl font-semibold text-slate-900">團體治療的優勢</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>同儕支持 - 在相同困境的人身上感受到被理解</li>
          <li>不同視角 - 學習他人處理問題的不同方式</li>
          <li>社交互動 - 在安全環境中練習人際關係技能</li>
          <li>成本效益 - 相比個人治療，更加經濟實惠</li>
        </ul>
        <p className="mt-4">
          <a href="/project/male-sexual-minority" className="text-blue-600 hover:underline">
            查看「男性性少數群體團體治療」專案 →
          </a>
        </p>
      </div>
    </div>
  );
}
