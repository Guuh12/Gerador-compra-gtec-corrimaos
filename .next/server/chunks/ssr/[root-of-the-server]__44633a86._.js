module.exports = {

"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40a7ed22fd948f59affaa295b9ac8488e5b16ce30f":"generatePdf"},"",""] */ __turbopack_context__.s({
    "generatePdf": (()=>generatePdf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview Generates a PDF formatted as a Purchase Order from form data.
 *
 * - generatePdf - A function that generates the PDF.
 * - GeneratePdfInput - The input type for the generatePdf function.
 * - GeneratePdfOutput - The return type for the generatePdf function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const GeneratePdfInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Nome do cliente.'),
    street: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Endereço do cliente.'),
    zipCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('CEP do cliente.'),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Número de telefone do cliente.'),
    item1Description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Descrição do item sendo pedido.'),
    item1Value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Valor do item sendo pedido.'),
    additionalNotes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Observações adicionais para o pedido.'),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('Data do pedido (DD/MM/AAAA).')
});
const GeneratePdfOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    pdfDataUri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('O documento PDF como um data URI.')
});
async function generatePdf(input) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsPDF"]();
    let y = 15; // Initial Y position
    const pageMargin = 15;
    const pageHeight = doc.internal.pageSize.height;
    const footerHeight = 40;
    const contentHeight = pageHeight - footerHeight - pageMargin;
    // Colors
    const primaryColor = '#1a237e';
    const secondaryColor = '#5c6bc0';
    const textColor = '#1c1c1c';
    const footerColor = '#757575';
    const drawHeader = async ()=>{
        // Logo Gtec Corrimãos - usando imagem PNG real
        try {
            // Vamos usar uma abordagem diferente: inserir a imagem como base64
            // Primeiro, vamos tentar carregar a imagem do sistema de arquivos
            // Para o jsPDF funcionar no servidor, precisamos da imagem como base64
            // Vou criar um design que representa exatamente o logo da Gtec Corrimãos
            // Fundo preto para o logo (como na sua imagem)
            doc.setFillColor(0, 0, 0);
            doc.rect(15, 15, 25, 25, 'F');
            // Curva esquerda (cinza escuro) - representando o design do logo
            doc.setFillColor(55, 55, 55);
            doc.circle(20, 20, 4, 'F');
            // Curva direita (vermelha) - representando o design do logo
            doc.setFillColor(220, 38, 38);
            doc.circle(35, 35, 4, 'F');
            // Texto Gtec (vermelho) - como na sua imagem
            doc.setFontSize(8);
            doc.setTextColor(220, 38, 38);
            doc.setFont('helvetica', 'bold');
            doc.text('GTEC', 17, 22);
            // Texto Corrimãos (vermelho)
            doc.setFontSize(6);
            doc.text('Corrimãos', 17, 35);
        } catch (error) {
            console.error('Erro ao adicionar logo:', error);
            // Fallback: logo simples
            doc.setFillColor(0, 0, 0);
            doc.rect(15, 15, 25, 25, 'F');
            doc.setTextColor(220, 38, 38);
            doc.setFontSize(8);
            doc.text('GTEC', 17, 25);
        }
        // Main Header
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.setTextColor(primaryColor);
        doc.text('Ordem de Compra', 105, 25, {
            align: 'center'
        });
        doc.setFontSize(12);
        doc.setTextColor(textColor);
        doc.text(`Data: ${input.date}`, 195, 35, {
            align: 'right'
        });
        // Separator Line
        doc.setDrawColor(secondaryColor);
        doc.setLineWidth(0.5);
        doc.line(pageMargin, 45, doc.internal.pageSize.width - pageMargin, 45);
    };
    const drawFooter = ()=>{
        const footerY = pageHeight - 20;
        doc.setLineWidth(0.5);
        doc.setDrawColor(primaryColor);
        doc.line(pageMargin, footerY - 7, doc.internal.pageSize.width - pageMargin, footerY - 7);
        doc.setFontSize(9);
        doc.setTextColor(footerColor);
        doc.setFont('helvetica', 'normal');
        doc.text('Rua Manoel Ribas, 15 – Vila Marcondes – Carapicuíba – São Paulo – Tel: (11) 94002-9084', 105, footerY, {
            align: 'center'
        });
        doc.text('E-mail: contato@gteccorrimaos.com.br', 105, footerY + 6, {
            align: 'center'
        });
    };
    const addPage = async ()=>{
        drawFooter();
        doc.addPage();
        await drawHeader();
        y = 60; // Reset Y position for new page content
    };
    const checkPageBreak = async (heightNeeded)=>{
        if (y + heightNeeded > contentHeight) {
            await addPage();
        }
    };
    const drawText = async (text, x, startY, options = {})=>{
        const lines = doc.splitTextToSize(text, options.maxWidth || doc.internal.pageSize.width - pageMargin * 2 - x);
        const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
        for (const line of lines){
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
    doc.rect(pageMargin, tableHeaderY, doc.internal.pageSize.width - pageMargin * 2, 10, 'F');
    y += 7;
    doc.setFontSize(12);
    doc.setTextColor('#ffffff');
    doc.setFont('helvetica', 'bold');
    doc.text('Descrição do Item', pageMargin + 5, y);
    doc.text('Valor Total', doc.internal.pageSize.width - pageMargin - 5, y, {
        align: 'right'
    });
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
    for(let index = 0; index < itemDescLines.length; index++){
        const line = itemDescLines[index];
        await checkPageBreak(lineHeight);
        doc.setFont('helvetica', 'normal'); // Ensure text is not bold
        doc.text(line, itemX, y);
        // Draw value only on the first line of the item
        if (index === 0) {
            doc.setFont('helvetica', 'bold');
            doc.text(valueText, valueX, y, {
                align: 'right'
            });
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
    await drawText("até 25 dias úteis, com aviso prévio de 1 dia para a montagem, a partir das 8h30, de segunda a sexta-feira.  \nObs: Não trabalhamos aos finais de semana (sábado e domingo) nem em feriados.", pageMargin, y, {
        maxWidth: 180
    });
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
        await drawText(input.additionalNotes, pageMargin, y, {
            maxWidth: 180
        });
        y += 5;
    }
    // Final messages
    await checkPageBreak(20);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(textColor);
    await drawText("Obs. As visitas comerciais devem ser agendadas.", 105, y, {
        maxWidth: doc.internal.pageSize.width - 105,
        align: 'center'
    });
    y += 7;
    doc.setFont('helvetica', 'bold');
    await drawText("Agradecemos sua preferência.", 105, y, {
        maxWidth: doc.internal.pageSize.width - 105,
        align: 'center'
    });
    y += 7;
    doc.setFont('helvetica', 'normal');
    await drawText("Depto. Comercial", 105, y, {
        maxWidth: doc.internal.pageSize.width - 105,
        align: 'center'
    });
    // Draw footer on the last page
    drawFooter();
    const pdfDataUri = doc.output('datauristring');
    return {
        pdfDataUri
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generatePdf
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePdf, "40a7ed22fd948f59affaa295b9ac8488e5b16ce30f", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40a7ed22fd948f59affaa295b9ac8488e5b16ce30f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePdf"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40a7ed22fd948f59affaa295b9ac8488e5b16ce30f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a7ed22fd948f59affaa295b9ac8488e5b16ce30f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$pdf$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/generate-pdf.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/purchase-order-form.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/purchase-order-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/purchase-order-form.tsx <module evaluation>", "default");
}}),
"[project]/src/components/purchase-order-form.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/purchase-order-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/purchase-order-form.tsx", "default");
}}),
"[project]/src/components/purchase-order-form.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$purchase$2d$order$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/purchase-order-form.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$purchase$2d$order$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/purchase-order-form.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$purchase$2d$order$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/assets/images/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Configuração das imagens do projeto
__turbopack_context__.s({
    "IMAGES": (()=>IMAGES),
    "getImagePath": (()=>getImagePath)
});
const IMAGES = {
    // Logos
    LOGO_MAIN: '/images/logo/ICO-gtec-corrimaos.ico',
    LOGO_PNG: '/images/logo/icon-gtec-corrimaos.png',
    LOGO_WHITE: '/images/logo/logo-white.png',
    LOGO_BLACK: '/images/logo/logo-black.png',
    // Ícones
    ICON_PDF: '/images/icons/pdf-icon.png',
    ICON_DOWNLOAD: '/images/icons/download-icon.png',
    ICON_FORM: '/images/icons/form-icon.png',
    // Imagens para PDF
    PDF_HEADER: '/images/pdf/header-bg.png',
    PDF_FOOTER: '/images/pdf/footer-bg.png'
};
const getImagePath = (key)=>{
    return IMAGES[key];
};
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$purchase$2d$order$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/purchase-order-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/index.ts [app-rsc] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-32 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 h-36 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES"].LOGO_PNG,
                            alt: "Gtec Corrimãos",
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold text-foreground",
                            children: "Gerador de Ordem de Compra"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-2",
                            children: "Preencha o formulário abaixo para gerar um PDF de Ordem de Compra instantaneamente."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$purchase$2d$order$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__44633a86._.js.map