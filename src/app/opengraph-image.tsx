import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 56,
          background: 'radial-gradient(circle at 20% 10%, rgba(0, 208, 132, 0.28), transparent 38%), radial-gradient(circle at 84% 0%, rgba(44, 231, 247, 0.2), transparent 40%), linear-gradient(165deg, #060a10 0%, #0f1d2a 60%, #0a1622 100%)',
          color: '#e8f0f2'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #00d084, #2ce7f7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#062015',
              fontSize: 36,
              fontWeight: 700
            }}
          >
            C
          </div>
          <div style={{ fontSize: 46, fontWeight: 700 }}>Clarium</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 64, lineHeight: 1.06, fontWeight: 700, maxWidth: 940 }}>
            Organização financeira clara, minimalista e local-first.
          </div>
          <div style={{ fontSize: 30, color: '#a7bac5' }}>Baixe o APK Android direto na landing oficial.</div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
