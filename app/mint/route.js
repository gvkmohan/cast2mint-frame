import { NextResponse } from "next/server";

export async function GET() {
  const imageUrl = "https://tan-perfect-pelican-799.mypinata.cloud/ipfs/bafybeicvc56xi7q7q7mcdlezsq3cfh43t2ffnl7bhtauqsbkxpq6tinvha/Alien.png"; // Replace this with your NFT image
  const mintUrl = "https://zora.co/coin/base:0xdad2aad4d9d802e806a4a765ab04a03f312329f9?referrer=0xcba8c016201c3df2b665d16b478598e17f85a79d"; // Replace with real Zora link

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${imageUrl}" />
        <meta property="fc:frame:button:1" content="Mint on Zora 🎨" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${mintUrl}" />
        <meta property="og:title" content="Mint this NFT" />
        <meta property="og:image" content="${imageUrl}" />
      </head>
      <body>
        <h1>Mint Frame Active</h1>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
