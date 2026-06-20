import React, { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState(0);

  // 状態と表示結果の対応表
  const viewMap = {
    0: <span style={{ color: 'blue' }}>準備中（〇〇）</span>,
    1: <span style={{ color: 'green' }}>進行中（△△）</span>,
    100: <span style={{ color: 'red' }}>完了！（×××）</span>
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>リアルタイム進捗状況: {viewMap[status] || <span>その他</span>}</h1>
      <button onClick={() => setStatus(0)}>0にする</button>
      <button onClick={() => setStatus(1)}>1にする</button>
      <button onClick={() => setStatus(100)}>100にする</button>
    </div>
  );
}
