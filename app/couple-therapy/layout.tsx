import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '伴侶諮商與治療 | 依附關係與情緒互動',
  description: '專業伴侶治療服務。透過情緒焦點治療（EFT），協助逃避型與焦慮型伴侶看見彼此底層的需要，中斷惡性循環，重新建立安全穩固的依附連結。',
  keywords: ['伴侶諮商', '伴侶治療', '婚姻諮商', '情緒焦點治療', 'EFT', '依附理論', '焦慮型依附', '逃避型依附', '心理諮商'],
  openGraph: {
    title: '伴侶治療 | 關係修復與依附重建',
    description: '當親密關係卡住時，我們不是彼此的敵人，是被互動模式拉走了。深入了解伴侶治療如何修復連結。',
  }
};

export default function CoupleTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}