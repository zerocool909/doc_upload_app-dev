import jsPDF from "jspdf";
import 'jspdf-autotable';
import { downloadExcel } from "react-export-table-to-excel";

export const pdfConvert = (data) =>
{
    var doc = new jsPDF()

  // From HTML
  doc.autoTable({ html: '.table' })

  // From Javascript
  var finalY = doc.lastAutoTable.finalY || 10
  doc.autoTable({
    startY: finalY + 20,
    // head: [['ID', 'Name', 'Email', 'Country', 'IP-address']],
    body: data,
  })

  finalY = doc.lastAutoTable.finalY
  doc.autoTable({
    startY: finalY + 20,
    html: '.table',
    useCss: true,
  })
  return doc;
}

export const handleDownloadExcel  = (data) => {
  downloadExcel({
    fileName: "react-export-table-to-excel -> downloadExcel method",
    sheet: "react-export-table-to-excel",
    tablePayload: {
      // header,
      // accept two different data structures
      body: data,
    },
  });
}