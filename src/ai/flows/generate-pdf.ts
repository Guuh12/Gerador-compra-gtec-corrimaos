/**
 * @fileOverview Generates a PDF formatted as a Purchase Order from form data.
 *
 * - generatePdf - A function that generates the PDF.
 * - GeneratePdfInput - The input type for the generatePdf function.
 * - GeneratePdfOutput - The return type for the generatePdf function.
 */

import { z } from 'zod';
import { jsPDF } from 'jspdf';

const GeneratePdfInputSchema = z.object({
  name: z.string().describe('Nome do cliente.'),
  street: z.string().describe('Endereço do cliente.'),
  zipCode: z.string().describe('CEP do cliente.'),
  phoneNumber: z.string().describe('Número de telefone do cliente.'),
  item1Description: z
    .string()
    .describe('Descrição do item sendo pedido.'),
  item1Value: z.string().describe('Valor do item sendo pedido.'),
  additionalNotes: z.string().describe('Observações adicionais para o pedido.'),
  date: z.string().describe('Data do pedido (DD/MM/AAAA).'),
});
export type GeneratePdfInput = z.infer<typeof GeneratePdfInputSchema>;

const GeneratePdfOutputSchema = z.object({
  pdfDataUri: z.string().describe('O documento PDF como um data URI.'),
});
export type GeneratePdfOutput = z.infer<typeof GeneratePdfOutputSchema>;

export async function generatePdf(
  input: GeneratePdfInput
): Promise<GeneratePdfOutput> {
  // Configuração do documento PDF com melhor compatibilidade
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });
  
  let y = 15; // Initial Y position
  const pageMargin = 15;
  const pageHeight = doc.internal.pageSize.height;
  const footerHeight = 40;
  const contentHeight = pageHeight - footerHeight - pageMargin;

  // Colors - usando valores RGB para melhor compatibilidade
  const primaryColor = '#1a237e';
  const secondaryColor = '#5c6bc0';
  const textColor = '#1c1c1c';
  const footerColor = '#757575';

  const drawHeader = async () => {
    // Logo Gtec Corrimãos - logo simples como fallback
    // Usando apenas texto estilizado para evitar problemas de fundo
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(220, 38, 38); // GTEC em vermelho
    doc.text('GTEC', 17, 30);
    doc.setFontSize(8);
    doc.setTextColor(220, 38, 38); // CORRIMÃOS em vermelho também
    doc.text('CORRIMÃOS', 17, 35);
    
    // Main Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(primaryColor);
    doc.text('Ordem de Compra', 105, 25, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(textColor);
    doc.text(`Data: ${input.date}`, 195, 35, { align: 'right' });

    // Separator Line
    doc.setDrawColor(secondaryColor);
    doc.setLineWidth(0.5);
    doc.line(pageMargin, 45, doc.internal.pageSize.width - pageMargin, 45);
  };
  
  const drawFooter = () => {
      const footerY = pageHeight - 20;
      doc.setLineWidth(0.5);
      doc.setDrawColor(primaryColor);
      doc.line(pageMargin, footerY - 7, doc.internal.pageSize.width - pageMargin, footerY - 7);
      doc.setFontSize(9);
      doc.setTextColor(footerColor);
      doc.setFont('helvetica', 'normal');
      doc.text('Rua Manoel Ribas, 15 – Vila Marcondes – Carapicuíba – São Paulo – Tel: (11) 94002-9084', 105, footerY, { align: 'center' });
      doc.text('E-mail: contato@gteccorrimaos.com.br', 105, footerY + 6, { align: 'center' });
  };

  const addPage = async () => {
    drawFooter();
    doc.addPage();
    await drawHeader();
    y = 60; // Reset Y position for new page content
  };
  
  const checkPageBreak = async (heightNeeded: number) => {
    if (y + heightNeeded > contentHeight) {
      await addPage();
    }
  };
  
  const drawText = async (text: string, x: number, startY: number, options: any = {}) => {
      const lines = doc.splitTextToSize(text, options.maxWidth || (doc.internal.pageSize.width - pageMargin * 2 - x));
      const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      
      for (const line of lines) {
          await checkPageBreak(lineHeight);
          doc.text(line, x, y, options);
          y += lineHeight;
      }
  };

  // Initial page draw
  await drawHeader();
  y = 60;


  // Client Info
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor);
  await drawText('Dados do Cliente:', pageMargin, y);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor);
  await drawText(`Nome: ${input.name}`, pageMargin, y);
  await drawText(`Endereço: ${input.street}`, pageMargin, y);
  await drawText(`CEP: ${input.zipCode}`, pageMargin, y);
  await drawText(`Telefone: ${input.phoneNumber}`, pageMargin, y);
  y += 10;
  
  // Order Details Header
  await checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor);
  await drawText('Detalhes do Pedido:', pageMargin, y);
  
  // Table Header
  await checkPageBreak(15);
  const tableHeaderY = y;
  doc.setFillColor(secondaryColor);
  doc.rect(pageMargin, tableHeaderY, doc.internal.pageSize.width - (pageMargin * 2), 10, 'F');
  y += 7;
  doc.setFontSize(12);
  doc.setTextColor('#ffffff');
  doc.setFont('helvetica', 'bold');
  doc.text('Descrição do Item', pageMargin + 5, y);
  doc.text('Valor Total', doc.internal.pageSize.width - pageMargin - 5, y, { align: 'right' });
  y += 8; // Increased from 5 to 8 to add spacing

  // Order Items
  doc.setTextColor(textColor);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  
  const itemDescLines = doc.splitTextToSize(input.item1Description, 120);
  const valueText = `R$ ${input.item1Value}`;
  const lineHeight = 7;
  
  const valueX = doc.internal.pageSize.width - pageMargin - 5;
  const itemX = pageMargin + 5;
  
  for (let index = 0; index < itemDescLines.length; index++) {
      const line = itemDescLines[index];
      await checkPageBreak(lineHeight);
      doc.setFont('helvetica', 'normal'); // Ensure text is not bold
      doc.text(line, itemX, y);
      // Draw value only on the first line of the item
      if(index === 0) {
        doc.setFont('helvetica', 'bold');
        doc.text(valueText, valueX, y, { align: 'right' });
      }
      y += lineHeight;
  }
  y += 10;

  // Delivery Info
  await checkPageBreak(25);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor);
  await drawText('Prazo de Entrega:', pageMargin, y);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor);
  await drawText("até 25 dias úteis, com aviso prévio de 1 dia para a montagem, a partir das 8h30, de segunda a sexta-feira.  \nObs: Não trabalhamos aos finais de semana (sábado e domingo) nem em feriados.", pageMargin, y, { maxWidth: 180 });
  y += 5;

  // Additional Notes
  if (input.additionalNotes) {
    await checkPageBreak(25);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    await drawText('Observações Adicionais:', pageMargin, y);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor);
    await drawText(input.additionalNotes, pageMargin, y, { maxWidth: 180 });
    y += 5;
  }
  
  // Final messages
  await checkPageBreak(20);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(textColor);
  await drawText("Obs. As visitas comerciais devem ser agendadas.", 105, y, { maxWidth: doc.internal.pageSize.width - 105, align: 'center'});
  y += 7;
  doc.setFont('helvetica', 'bold');
  await drawText("Agradecemos sua preferência.", 105, y, { maxWidth: doc.internal.pageSize.width - 105, align: 'center'});
  y += 7;
  doc.setFont('helvetica', 'normal');
  await drawText("Depto. Comercial", 105, y, { maxWidth: doc.internal.pageSize.width - 105, align: 'center'});

  // Draw footer on the last page
  drawFooter();
  
  const pdfDataUri = doc.output('datauristring');

  return { pdfDataUri };
}
