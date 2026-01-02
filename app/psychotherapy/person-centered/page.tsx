export default function PersonCentered() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">人中心治療法</h1>
      <div className="space-y-4 text-slate-700">
        <p>
          人中心治療法由卡爾·羅傑斯（Carl Rogers）發展，強調治療師與個案之間的真摯關係。
        </p>
        <h2 className="text-xl font-semibold text-slate-900">核心原則</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>無條件正面關注 - 治療師對個案的接納與尊重</li>
          <li>同理心 - 深入理解個案的內在體驗</li>
          <li>真誠性 - 治療師的真實與透明</li>
          <li>個案的內在資源 - 信任個案有自我改變的能力</li>
        </ul>
      </div>
    </div>
  );
}
