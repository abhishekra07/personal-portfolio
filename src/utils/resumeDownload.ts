import { portfolioData } from "@/data/portfolio";

export const downloadResume = () => {
  // Create a dummy PDF blob (in production, this would be your actual resume file)
  const dummyPdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 100
>>
stream
BT
/F1 12 Tf
100 700 Td
(${portfolioData.personal.name} - Resume) Tj
0 -20 Td
(This is a dummy PDF file) Tj
0 -20 Td
(Replace with actual resume content) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000426 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
523
%%EOF`;

  // Create blob and download
  const blob = new Blob([dummyPdfContent], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  
  // Generate filename with current date
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const filename = `${portfolioData.personal.resumeFileName}-${currentDate}.pdf`;
  
  // Create download link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};