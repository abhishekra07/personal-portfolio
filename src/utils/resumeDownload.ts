import { portfolioData } from '@/data/portfolio';

export const downloadResume = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const filename = `${portfolioData.personal.resumeFileName}-${currentDate}.pdf`;

  // File location in public folder
  const fileUrl = '/resume.pdf';

  // Create a temporary download link
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
