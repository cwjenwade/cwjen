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
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
